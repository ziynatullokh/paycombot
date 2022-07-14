import dt from '#dictionary'

export default async  (msg,user) => {
    
    const chatid = msg.from.id
    const msgid = msg.message_id
    const msgtime = msg.date
    const text = msg.text

    const responseText = '<b>' + dt[user.language]['selectTransportText'] + '</b>'
    
    const transports = await msg.db.Transport.findAll()

    const inline_keyboard = []

    
    transports.map( el => {
        inline_keyboard.push([{
            'text': el.provider_name, callback_data: "createCommon-" + el.provider_name + "-" + "Transport"
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