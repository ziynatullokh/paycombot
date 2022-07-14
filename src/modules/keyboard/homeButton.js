import dt from '#dictionary'

export default async function (msg,user){
    const chatid = msg.from.id
    const msgid = msg.message_id
    const msgtime = msg.date
    const text = msg.text

    user.session = 'home'
    user.save()

    const responseText = '<b>' + dt[user.language]['home'] + '</b>'
    
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