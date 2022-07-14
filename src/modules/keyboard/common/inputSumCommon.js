import dt from '#dictionary'

export default async  (msg,user) => {
    
    const chatid = msg.from.id
    const msgid = msg.message_id
    const msgtime = msg.date
    const text = msg.text

    const responseText = '<b>' + dt[user.language]['inputCardText'] + '</b>'

    let [ order ] = await msg.db.OrderPayCommon.findAll({
        where: { order_user_id: chatid },
        order: [ ['id', 'desc'] ],
        limit: 1,
    })

    order.order_amount = text
    user.session = 'inputCardCommon'

    order.save()
    user.save()

    const keyboard = []
    
    const cards = await msg.db.Cards.findAll({ where: { user_id: chatid }})

    cards.map( el => {
        keyboard.push([{
            'text': el.card_number
        }])
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

    return {
        responseText,
        responseParam
    }
}