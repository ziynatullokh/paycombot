import dt from '#dictionary'
import modules from '#modules/index.js'

export default async function (msg,user,card){
    const chatid = msg.from.id
    const msgid = msg.message_id
    const msgtime = msg.date
    const text = msg.text

    let [ order ] = await msg.db.OrderPayMobile.findAll({
        where: { order_user_id: chatid },
        order: [ ['id', 'desc'] ],
        limit: 1,
    })
    
    const findCard = await msg.db.Cards.findOne({ where: { card_number: text}})
    
    if(findCard){
        order.order_cardnumber= findCard.card_number
        order.order_cardexpire = findCard.card_expire
        const data = await modules['payMobileRequest'](msg,user, order,false)
        return data
    }

    order.order_cardnumber= card,
    order.order_msgid= msgid
    order.save()
    const responseText = '<b>' + dt[user.language]['inputCardExpireText'] + '</b>'
    
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

    user.session = 'inputCardExpireText'
    user.save()

    return {
        responseText,
        responseParam
    }
}