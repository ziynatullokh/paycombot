import dt from '#dictionary'
import chequePay from '#payVerify'
import error_handler from '#tools/errorHandler.js'



export default async function (msg,user,OTPCODE){
    const chatid = msg.from.id
    const msgid = msg.message_id
    const msgtime = msg.date
    const text = msg.text

    let [ order ] = await msg.db.OrderPayMobile.findAll({
        where: { order_user_id: chatid },
        order: [ ['id', 'desc'] ],
        limit: 1,
    })

    
    let chequeVerify = await chequePay(order.order_chek, order.order_cardnumber, order.order_cardexpire,OTPCODE)
    
    if(chequeVerify == 'success') {
        chequeVerify= dt[user.language]['successPay']
        order.order_status = 'success'
        order.save()

        let responseText = '<b>' + chequeVerify + '</b>'
        
        const keyboard = [
            [ 
                {
                    text: dt[user.language]['viewCheckText'], callback_data: 'getCheque-' + order.order_chek
                }
            ],
            [
                {
                    text: dt[user.language]['repeatCheque'] , callback_data: 'repeatChequeMobile-' + order.order_chek
                },
                {
                    text: dt[user.language]['toCancelCheque'] , callback_data: 'toCancelCheque-' + order.order_chek
                }
            ]
        ]

        const responseParam = { 
            parse_mode:'HTML',
            reply_markup:{
                inline_keyboard: keyboard
            }
        }
    
        return {
            responseText,
            responseParam,
            success: true
        }
    }
    
    else if( chequeVerify == "Введен неверный код."){
        const responseText = '<b>' + dt[user.language]['wrongInputSmsCodePayMobile'] + '</b>'
        const keyboard = []
        Object.keys(dt[user.language]['cancel']).map( el => {
            keyboard.push([{
                'text':el
            }])
        })
        const responseParam = { 
            parse_mode:'HTML',
            reply_markup:{
                resize_keyboard: true,
                keyboard
            }
        }
    
        return {
            responseText,
            responseParam
        }
    }else{
        order.order_status = 'fail'
        order.save()

        user.session = 'home'
        user.save()

        error_handler('chequeVerify', chequeVerify, JSON.stringify(order))
        
        chequeVerify = chequeVerify == "Количество попыток ввода кода превышено. Запросите новый код." ? dt[user.language]['manyWrongInputSmsCode'] : chequeVerify

        const responseText = '<b>' + chequeVerify + '</b>'
        const keyboard = [[]]
        Object.keys(dt[user.language]['homeMenuKeyboard']).map( el => {
            if(keyboard.at(-1).length == 2){
                return keyboard.push([ {
                    'text': el
                }])
            }
            keyboard.at(-1).push({
                'text': el
            })
        })
        const responseParam = { 
            parse_mode:'HTML',
            reply_markup:{
                resize_keyboard: true,
                keyboard
            }
        }
    
        return {
            responseText,
            responseParam
        }
    }
}