import dt from '#dictionary'
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

    const cards = await msg.db.Cards.findAll({ where: { user_id: chatid }})
    
    order.order_amount = text
    order.save()

    
    let commWords = dt[lang]['communalInfo']
    let responseText = ''
    responseText += '<b>' + commWords['payAmount'] + ': ' + splitSum(text) + ' UZS</b>\n\n'
    responseText += '<i>' + dt[lang]['inputCardText'] + '</i>'
    
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

    user.session = 'inputCardElectricity'
    user.save()
    
    return {
        responseText,
        responseParam
    }
}

