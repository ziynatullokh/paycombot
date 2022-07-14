import dt from '#dictionary'

export default async function (msg,user){
    const chatid = msg.from.id
    const msgid = msg.message_id
    const msgtime = msg.date
    const text = msg.text

    const phoneNumbers = await msg.db.OrderPayMobile.aggregate('order_phone_number', 'DISTINCT', { plain: false })

    const responseText = '<b>' + dt[user.language]['inputPhoneText'] + '</b>'
    
    const keyboard = [ [] ]
    
    Object.keys(dt[user.language]['cancel']).map( el => {
        keyboard[0].push({ 
            'text': dt[user.language]['requestPhone'],
            request_contact:true
        },
        {
            'text':el
        })
    })

    phoneNumbers.map( (el,i) => {
        i%3 ===0 ? keyboard.push([{ 'text': el.DISTINCT.slice(3) }]) : keyboard.at(-1).push({ 'text': el.DISTINCT.slice(3) })
    })

    const responseParam = { 
        parse_mode:'HTML',
        reply_markup:{
            resize_keyboard: true,
            keyboard
        }
    }

    user.session = 'inputPhoneValue'
    user.save()
    
    return {
        responseText,
        responseParam
    }
}