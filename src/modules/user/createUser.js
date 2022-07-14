import dt from '#dictionary'

export default async function (msg){
    const chatid = msg.from.id
    const msgid = msg.message_id
    const msgtime = msg.date
    const text = msg.text

    const createUser = await msg.db.User.create({
        user_id: chatid,
        language: 'uz',
        session:'home',
        msgtime,
        msgid
    })

    const responseText = '<b>' + dt[createUser.language]['home'] + '</b>'
    
    const keyboard = [[]]
    
    Object.keys(dt[createUser.language]['homeMenuKeyboard']).map( el => {
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