import dt from '#dictionary'

export default (msg,user) => {
    const chatid = msg.from.id
    const msgid = msg.message_id
    const msgtime = msg.date
    const text = msg.text
    

    const responseText = '<b>' + dt[user.language]['successAdminPass'] + '</b>'
    
    const inline_keyboard = []
    
    Object.keys(dt[user.language]['adminPanel']).map( el => {
        inline_keyboard.push([{
            'text': el, callback_data: el
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