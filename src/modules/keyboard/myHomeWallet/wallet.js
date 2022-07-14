import dt from '#dictionary'
import getInfo from '#modules/payment/communal/communalGetInfo.js'





export default async (msg,user) => {
  
    const chatid = msg.from.id
    const msgid = msg.message_id
    const msgtime = msg.date
    const text = msg.text
    
    let responseText = '';
    
    const wallets = await msg.db.Wallets.findAll({ where: { user_id: chatid }})
    
    let commWords = dt[user.language]['communalInfo']
    
    if(wallets.length){
        for(let el of wallets){
            
            const subregion = await msg.db.Subregion.findOne({ where: { region_code: el.wallet_sub_region }})
            const info = await getInfo(el.wallet_pay_type,el.wallet_region,el.wallet_sub_region,el.wallet_account,100000,el.wallet_merchant_id)
            
            if(info.account){
                if(el.wallet_type === 'electricity'){
                    responseText += '<b>' + commWords[el.wallet_type] + ': </b>\n'
                    responseText += commWords['branch'] + ': <code>' + subregion.region_name + '</code>\n'
                    responseText += commWords['account'] + ': <code>' + el.wallet_account + '</code>\n'
                    responseText += commWords['balance'] + ': <code>' + info.account[5].value + '</code> UZS\n'

                }
                else if(el.wallet_type === 'gas'){
                    responseText += '<b>' + commWords[el.wallet_type] + ': </b>\n'
                    responseText += commWords['branch'] + ': <code>' + subregion.region_name + '</code>\n'
                    responseText += commWords['account'] + ': <code>' + el.wallet_account + '</code>\n'
                    responseText += commWords['balance'] + ': <code>' + info.account[7].value + '</code> UZS\n'

                }
                responseText += commWords['update_timestamp'] + ': <code>' + new Date(info.update_timestamp).toLocaleString('UZ') + '</code>\n\n'

            }
            else{
                responseText += '<b>' + commWords[el.wallet_type] + ': </b>\n'
                responseText += commWords['errorLoadData']
            }
        }

        responseText += '\n\n' + dt[user.language]['walletsAddText']

    }
    else{
        responseText += '<b>' + dt[user.language]['walletsNotFound'] + '</b\n\n>' + dt[user.language]['walletsAddText']
    }

    const keyboard = []

    Object.keys(dt[user.language]['inlineKeyboardCommunal']).map( el => {
        keyboard.push([{
            'text': el, callback_data: "addWallet-" + el
        }])
    })


    const responseParam = { 
        parse_mode:'HTML',
        reply_markup: {
            inline_keyboard: keyboard
        }
    }


    return {
        responseText,
        responseParam
    }
}