import dt from '#dictionary'
import getInfo from '#modules/payment/communal/communalGetInfo.js'


export default async function (msg,user){
    const chatid = msg.from.id
    const msgid = msg.message_id
    const msgtime = msg.date
    const text = msg.text
    const lang = user.language

    let order = (await msg.db.Wallets.findAll({ 
        where: { user_id: chatid },
        order: [ ['id', 'desc'] ],
        limit: 1
    }))[0]
    
    order.wallet_account = text
    order.save()
    

    const region = await msg.db.Regions.findOne({ where: { [order.wallet_type + '_id']: order.wallet_region }})
    const subregion = await msg.db.Subregion.findOne({ where: { region_code: order.wallet_sub_region }})
    
    const info = await getInfo(order.wallet_pay_type,order.wallet_region,order.wallet_sub_region,order.wallet_account,100000,order.wallet_merchant_id)
    
    

    let commWords = dt[lang]['communalInfo']
    let responseText = ''
    const keyboard = [[]]


    if(info.account){
        if(order.wallet_type === 'electricity'){
            responseText += '<b>' + commWords['infoText'] + ': </b>\n\n'
            responseText += commWords['area'] + ': <code>' + region['name_' + lang] + '</code>\n'
            responseText += commWords['branch'] + ': <code>' + subregion.region_name + '</code>\n'
            responseText += commWords['account'] + ': <code>' + order.wallet_account + '</code>\n'
            responseText += commWords['address'] + ': <code>' + info.account[4].value + '</code>\n\n'
            responseText += commWords['balance'] + ': <code>' + info.account[5].value + '</code> UZS\n'
            responseText += commWords['tarif'] + ' 1 kVt/s uchun: <code>' + info.account[7].value + '</code> UZS\n\n'
            responseText += commWords['lastPayDate'] + ': <code>' + info.account[8].value + '</code>\n'
            responseText += commWords['lastPayAmount'] + ': <code>' + info.account[9].value + '</code> UZS\n'
            responseText += commWords['lastPoint'] + ': <code>' + info.account[11].value + '</code> kVt\n\n'
            responseText += '<i>' + dt[lang]['walletAdded'] + '</i>'
        }
        else if(order.wallet_type === 'gas'){
            responseText += '<b>' + commWords['infoText'] + ': </b>\n\n'
            responseText += commWords['area'] + ': <code>' + region['name_' + lang] + '</code>\n'
            responseText += commWords['branch'] + ': <code>' + subregion.region_name + '</code>\n'
            responseText += commWords['account'] + ': <code>' + order.wallet_account + '</code>\n'
            responseText += commWords['account_owner'] + ': <code>' + info.account[4].value + '</code>\n\n'
            responseText += commWords['address'] + ': <code>' + info.account[5].value + '</code>\n\n'
            responseText += commWords['balance'] + ': <code>' + info.account[7].value + '</code> UZS\n'
            responseText += commWords['lastPoint'] + ': <code>' + info.account[9].value + '</code>\n\n'
            responseText += '<i>' + dt[lang]['walletAdded'] + '</i>'
        }
        
        
    }else{
        order.destroy()
        const text = dt[lang]['apiErrorCode'][info.code] || info.message + " : " + info.data
        responseText += '<i>' + text + '</i>'
    }

    user.session = 'home'
    user.save()

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


