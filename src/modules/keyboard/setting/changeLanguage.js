import dt from '#dictionary'

export default async function (msg,user,toLang){
    const chatid = msg.from.id
    let responseText = ''
    const inline_keyboard = []
    let responseParam = {}

    if(toLang){
        responseText = dt[user.language]['successChangeLanguage']
        user.language = dt['languages'][toLang]
        responseParam.language = true
        user.save()
    }
    else {
        responseText = '<b>' + dt[user.language]['selectLanguageText'] + '</b>'
        
        Object.keys(dt['languages']).map( el => {
            inline_keyboard.push([{
                'text': el, callback_data: msg.data + "-" + el
            }])
        })
    }



  
    responseParam.chat_id = chatid, 
    responseParam.message_id = msg.message.message_id,
    responseParam.parse_mode = 'HTML',
    responseParam.reply_markup = { inline_keyboard }

    return {
        responseText,
        responseParam
    }
}