import dt from '#dictionary'
import axios from 'axios'
import error_handler from '#tools/errorHandler.js'


async function createCheck(order){
    try{
        order.order_amount *= 100 

        const data = JSON.stringify({
            "method": "cheque.create",
            "params": {
                "account": {
                    "pay_type": order.order_type,
                    "region": order.order_region,
                    "subRegion": order.order_subregion,
                    "account": order.order_account
                },
                "amount": order.order_amount,
                "merchant_id": order.order_merchant
            }
        })

        const options = {
            url: "https://payme.uz/api/cheque.create",
            method:"POST",
            headers:{'Content-type': 'application/json'},
            data
        }
        
        let response = await axios(options)
        response = await response.data
        if(response.result){
            return response.result.cheque._id
        }else{
            return response.error.message
        }
    }catch(error){
        return error.message
    }
}

async function createVerify(id, order){
    try{
        const data = JSON.stringify({
            "method": "cheque.verify",
            "params": {
                "id": id,
                "card": {
                    "number": order.order_cardnumber,
                    "expire": order.order_cardexpire
                },
                "payment_fields": {}
            }
        })

        const options = {
            url: "https://payme.uz/api/cheque.verify",
            method:"POST",
            headers:{'Content-type': 'application/json'},
            data
        }
        
        let response = await axios(options)
        response = await response.data
        if(response.result){
            return { success: true, message: response.result.data.phone}
        }
        throw new Error(response.error.message)
    }catch(error){
        return {success: false, message: error.message}
    }
}

export default async function (msg,user,order,newCard = true){
    const chatid = msg.from.id
    const msgid = msg.message_id
    const msgtime = msg.date
    const text = msg.text
    const lang = user.language

    if(!order){
        order = (await msg.db.OrderPayMobile.findAll({
            where: { order_user_id: chatid },
            order: [ ['id', 'desc'] ],
            limit: 1,
        }))[0]
    }
    
    if(!order.order_cardexpire){
        order.order_cardexpire = text
    }
    
    let chequeCreate = await createCheck(order)
    let chequeVerify = await createVerify(chequeCreate, order)
    
    order.order_chek = chequeCreate
    order.save()

    if(!chequeVerify.success){
        order.order_status = 'fail'
        user.session = 'home'
        order.save()
        user.save()
        
        error_handler('chequeRequest', chequeVerify.message, JSON.stringify(order))

        const responseText = '<b>' + chequeVerify.message + '</b>'

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

    if(newCard){
        await msg.db.Cards.create({
            user_id : chatid,
            card_number : order.order_cardnumber,
            card_expire : order.order_cardexpire
        })
    }

    const responseText = '<i>' + chequeVerify.message + dt[user.language]['inputSmsCodePayMobile'] + '</i>'
    const keyboard = []
    
    Object.keys(dt[lang]['cancel']).map( el => {
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

    user.session = 'inputSmsCodeElectricity'
    user.save()
    
    return {
        responseText,
        responseParam
    }
}

