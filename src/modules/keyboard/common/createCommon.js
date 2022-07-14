import dt from '#dictionary'

export default async  (msg,user,type) => {
    
    const chatid = msg.from.id
    const msgid = msg.message_id
    const msgtime = msg.date
    const text = msg.text


    const responseText = '<b>' + dt[user.language]['inputAccountCommon'] + '</b>'
    let provider;



    switch(type[2]){
        case 'Internet': {
            provider = await msg.db.Internet.findOne({ where: { provider_name: type[1]}}) 
            break
        }
        case 'Transport': {
            provider = await msg.db.Transport.findOne({ where: { provider_name: type[1]}}) 
            break
        }
    }


    await msg.db.OrderPayCommon.create({
        order_user_id: chatid,
        order_merchant: provider.provider_id,
        order_account_type: provider.provider_account_type,
        order_status: 'pending'
    })

    const keyboard = []

    user.session = 'inputAccountCommon'
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