import dt from '#dictionary'

export default async function (msg,user){
    const chatid = msg.from.id
    const msgid = msg.message_id
    const msgtime = msg.date
    const text = msg.text

    const responseText = '<b>' + dt[user.language]['settingsText'] + '</b>'
    
    const keyboard = []

    
    Object.keys(dt[user.language]['settingsMenuKeyboard']).map( el => {
        keyboard.push([{
            'text': el, callback_data: el
        }])
    })

    const responseParam = { 
        parse_mode:'HTML',
        reply_markup:{
            inline_keyboard: keyboard
        }
    }

    return {
        responseText,
        responseParam
    }
}