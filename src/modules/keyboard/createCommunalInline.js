import dt from '#dictionary'

export default async  (msg,user) => {
    
    const chatid = msg.from.id
    const msgid = msg.message_id
    const msgtime = msg.date
    const text = msg.text
    
    const order = await msg.db.OrderPayCommunal.create({
        order_user_id: chatid,
        order_msgid: msgid,
        order_status: "pending"
    })

    const responseText = '<b>' + dt[user.language]['selectCommunalPayText'] + '</b>'
    
    const inline_keyboard = []
    
    Object.keys(dt[user.language]['inlineKeyboardCommunal']).map( el => {
        inline_keyboard.push([{
            'text': el, callback_data: order.id + "-" + el
        }])
    })

    const responseParam = { 
        parse_mode:'HTML',
        reply_markup:{
            inline_keyboard
        }
    }

    return {
        responseText,
        responseParam
    }
}