import dt from '#dictionary'
import modules from '#modules/index.js'
import splitSum from '#tools/splitSum.js'


export default async function (msg,user){
    const chatid = msg.from.id
    const msgid = msg.message_id
    const msgtime = msg.date
    const text = msg.text
    const lang = user.language

    let [ order ] = await msg.db.OrderPayCommunal.findAll({ 
        where: { order_user_id: chatid },
        order: [ ['id', 'desc'] ],
        limit: 1
    })
    
    const findCard = await msg.db.Cards.findOne({ where: { card_number: text}})
    
    if(findCard){
        order.order_cardnumber= findCard.card_number
        order.order_cardexpire = findCard.card_expire
        const data = await modules['payCommunalRequest'](msg,user, order,false)
        return data
    }
    order.order_cardnumber = text
    order.save()

    let commWords = dt[lang]['communalInfo']
    let responseText = ''
    responseText += '<b>' + commWords['payAmount'] + ': ' + splitSum(order.order_amount) + ' UZS</b>\n'
    responseText += '<b>' + commWords['card'] + ': ' + starCard(text) + '</b>\n\n'
    responseText += '<i>' + dt[lang]['inputCardExpireText'] + '</i>'
    
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

    user.session = 'inputExpireelectricity'
    user.save()

    return {
        responseText,
        responseParam
    }
}

