import dt from '#dictionary'

export default (msg,user) => {
    const chatid = msg.from.id
    const msgid = msg.message_id
    const msgtime = msg.date
    const text = msg.text
    

    const responseText = '<b>' + dt[user.language]['sendMessageAllUsersText'] + '</b>'
    
    const keyboard = []

    user.session = 'sendMessageAllUsers'
    user.save()
    
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