import dt from '#dictionary'

export default async  (msg,user,type) => {
    
    const chatid = msg.message.chat.id
    const msgid = msg.message.message_id
    const msgtime = msg.message.date
    const text = msg.data.split('-')
    const order = await msg.db.OrderPayCommunal.findOne({ where: { id: text[0] }})
    let commWords = dt[user.language]['communalInfo']
    

    if(!text[2]){
        const responseText = '<b>' + text[1] + '\n\n' + dt[user.language]['selectArea'] + '</b>'
        
        const inline_keyboard = []
        const regions = await msg.db.Regions.findAll()
        
        regions.map( el => {
            inline_keyboard.push([{
                'text': el['name_' + user.language], callback_data: msg.data + '-' +el[type + '_id']
            }])
        })

        const responseParam = { 
            chat_id: chatid, 
            message_id: msg.message.message_id,
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

    else if(!text[3]){
        const region = await msg.db.Regions.findOne({ where: { [type + '_id']: text[2] }})
        const responseText = '<b>' + text[1] + '\n\n' + commWords['area'] + ": " + region['name_' + user.language] + "\n\n" + dt[user.language]['selectBranch'] + '</b>'
        
        const inline_keyboard = []
        const subregions = await msg.db.Subregion.findAll({ where: { filter: text[2] }})
        
        subregions.map( el => {
            inline_keyboard.push([{
                'text': el.region_name, callback_data: msg.data + '-' + el.region_code
            }])
        })
        
        const responseParam = { 
            chat_id: chatid, 
            message_id: msg.message.message_id,
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

    else if(!text[4]){
        const merchant = await msg.db.Merchant.findOne({ where: { merchant_name: type }})

        order.order_merchant = merchant.merchant_id
        order.order_type = merchant.merchant_pay_type
        order.order_name = type
        order.order_region= text[2]
        order.order_subregion= text[3]
        order.order_status = 'pending'
        order.save()

        const region = await msg.db.Regions.findOne({ where: { [type + '_id']: text[2] }})
        const subregion = await msg.db.Subregion.findOne({ where: { region_code: text[3] }})


        user.session = 'inputAccountElectricity'
        user.save()

        let responseText = '<b>' + text[1] + '\n\n' + commWords['area'] + ": " + region['name_' + user.language] + "\n" + commWords['branch'] + ": " + subregion.region_name + '</b>\n\n'
        
        responseText += '<i>' + dt[user.language]['inputAccountElectricity'] + '</i>'
        
        const responseParam = { 
            chat_id: chatid, 
            message_id: msg.message.message_id,
            parse_mode:'HTML'
        }

        return {
            responseText,
            responseParam
        }
    }
}