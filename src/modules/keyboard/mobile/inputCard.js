import dt from '#dictionary'

export default async function (msg,user,amount){
    const chatid = msg.from.id
    const msgid = msg.message_id
    const msgtime = msg.date
    const text = msg.text
    const lang = user.language

    const cards = await msg.db.Cards.findAll({ where: { user_id: chatid }})

    let [ order ] = await msg.db.OrderPayMobile.findAll({
        where: { order_user_id: chatid },
        order: [ ['id', 'desc'] ],
        limit: 1,
    })

    order.order_amount = amount
    order.order_msgid = msgid
    order.save()
    
    const responseText = '<b>' + dt[user.language]['inputCardText'] + '</b>'
    
    const keyboard = []
    
    cards.map( el => {
        keyboard.push([{
            'text': el.card_number
        }])
    })

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

    user.session ='inputCardText',
    user.save()

    return {
        responseText,
        responseParam
    }
}