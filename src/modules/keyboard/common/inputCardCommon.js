import dt from '#dictionary'
import modules from '#modules/index.js'


export default async  (msg,user) => {
    
    const chatid = msg.from.id
    const msgid = msg.message_id
    const msgtime = msg.date
    const text = msg.text

    const responseText = '<b>' + dt[user.language]['inputCardExpireText'] + '</b>'

    let [ order ] = await msg.db.OrderPayCommon.findAll({
        where: { order_user_id: chatid },
        order: [ ['id', 'desc'] ],
        limit: 1,
    })

    const findCard = await msg.db.Cards.findOne({ where: { card_number: text}})
    
    if(findCard){
        order.order_cardnumber= findCard.card_number
        order.order_cardexpire = findCard.card_expire
        const data = await modules['payCommonRequest'](msg,user, order,false)
        return data
    }



    order.order_cardnumber = text
    user.session = 'inputCardExpireCommon'

    order.save()
    user.save()

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
}