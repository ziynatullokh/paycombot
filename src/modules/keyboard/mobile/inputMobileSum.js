import dt from '#dictionary'
import splitSum from '#tools/splitSum.js'

export default async function (msg,user,phoneNumber,id){
    const chatid = msg.from.id
    const msgid = msg.message_id
    const msgtime = msg.date
    const text = msg.text

    phoneNumber = phoneNumber.length === 9 ? "998" + phoneNumber : phoneNumber

    if(phoneNumber.length === 24){
        const order = await msg.db.OrderPayMobile.findOne({ where: { order_chek: phoneNumber }})
        await msg.db.OrderPayMobile.create({
            order_user_id: chatid,
            order_phone_number: order.order_phone_number,
            order_merchant: order.order_merchant,
            order_status: 'pending',
            order_msgid: msgid
        })
    }else{
        await msg.db.OrderPayMobile.create({
            order_user_id: chatid,
            order_phone_number: phoneNumber,
            order_merchant: id,
            order_status: 'pending',
            order_msgid: msgid
        })
    }
    
    const responseText = '<b>' + dt[user.language]['inputSumText'] + '</b>'
    
    const keyboard = []
    
    dt[user.language]['sumOptions'].map( (el,i) => {
        i%3 ===0 ? keyboard.push([{ 'text': splitSum(el) + ' so\'m' }]) : keyboard.at(-1).push({ 'text': splitSum(el) + ' so\'m' })
    })

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

    user.session = 'inputSumText',
    user.save()

    return {
        responseText,
        responseParam
    }
}

