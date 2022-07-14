import dt from '#dictionary'
import axios from 'axios'
import error_handler from '#tools/errorHandler.js'


async function createChek (account,amount,merchant){
    try{
        account = account.slice(3)
        amount *= 100

        const data = JSON.stringify({
            "method": "cheque.create",
            "params": {
                "account": {
                    "phone": account
                },
                "amount": amount,
                "merchant_id": merchant
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

async function createVerify(cheque,cardNumber,cardExpier){
    try{
        const data = JSON.stringify({
            "method": "cheque.verify",
            "params": {
                "id": cheque,
                "card": {
                    "number": cardNumber,
                    "expire": cardExpier
                }
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
            return { ok: true, message: response.result.data.phone}
        }
        throw new Error(response.error.message)
    }catch(error){
        return {ok: false, message: error.message}
    }
}

export default async function (msg,user,order,newCard = true){
    const chatid = msg.from.id
    const msgid = msg.message_id
    const msgtime = msg.date
    const text = msg.text
    
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

    let chequeCreate = await createChek(order.order_phone_number,order.order_amount,order.order_merchant)
    let chequeVerify = await createVerify(chequeCreate, order.order_cardnumber, order.order_cardexpire)
    
    order.order_chek = chequeCreate
    order.save()


    if(!chequeVerify.ok){

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

    user.session = 'inputSmsCodePayMobile'
    user.save()

    return {
        responseText,
        responseParam
    }
}