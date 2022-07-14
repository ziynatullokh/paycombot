import dt from '#dictionary'
import getInfo from '#modules/payment/communal/communalGetInfo.js'
import splitSum from '#tools/splitSum.js'


export default async function (msg,user,repeatCheque){
    const chatid = msg.from.id
    const msgid = msg.message_id
    const msgtime = msg.date
    const text = msg.text
    const lang = user.language

    let order;

    if(repeatCheque){
        order = await msg.db.OrderPayCommunal.findOne({ where: { order_chek: repeatCheque } })
    }
    else{ 
        order = (await msg.db.OrderPayCommunal.findAll({ 
            where: { order_user_id: chatid },
            order: [ ['id', 'desc'] ],
            limit: 1
        }))[0]
        order.order_account = text
        order.save()
    }
    

    const region = await msg.db.Regions.findOne({ where: { [order.order_name + '_id']: order.order_region }})
    const subregion = await msg.db.Subregion.findOne({ where: { region_code: order.order_subregion }})
    
    const info = await getInfo(order.order_type,order.order_region,order.order_subregion,order.order_account,100000,order.order_merchant)

    let commWords = dt[lang]['communalInfo']
    let responseText = ''
    const keyboard = [  ]

    if(info.account){
        if(order.order_name === 'electricity'){
            responseText += '<b>' + commWords['infoText'] + ': </b>\n\n'
            responseText += commWords['area'] + ': <code>' + region['name_' + lang] + '</code>\n'
            responseText += commWords['branch'] + ': <code>' + subregion.region_name + '</code>\n'
            responseText += commWords['account'] + ': <code>' + order.order_account + '</code>\n'
            responseText += commWords['address'] + ': <code>' + info.account[4].value + '</code>\n\n'
            responseText += commWords['balance'] + ': <code>' + info.account[5].value + '</code> UZS\n'
            responseText += commWords['tarif'] + ' 1 kVt/s uchun: <code>' + info.account[7].value + '</code> UZS\n\n'
            responseText += commWords['lastPayDate'] + ': <code>' + info.account[8].value + '</code>\n'
            responseText += commWords['lastPayAmount'] + ': <code>' + info.account[9].value + '</code> UZS\n'
            responseText += commWords['lastPoint'] + ': <code>' + info.account[11].value + '</code> kVt\n\n'
            responseText += '<i>' + dt[lang]['inputSumElectricity'] + '</i>'
        }
        else if(order.order_name === 'gas'){
            responseText += '<b>' + commWords['infoText'] + ': </b>\n\n'
            responseText += commWords['area'] + ': <code>' + region['name_' + lang] + '</code>\n'
            responseText += commWords['branch'] + ': <code>' + subregion.region_name + '</code>\n'
            responseText += commWords['account'] + ': <code>' + order.order_account + '</code>\n'
            responseText += commWords['account_owner'] + ': <code>' + info.account[4].value + '</code>\n\n'
            responseText += commWords['address'] + ': <code>' + info.account[5].value + '</code>\n\n'
            responseText += commWords['balance'] + ': <code>' + info.account[7].value + '</code> UZS\n'
            responseText += commWords['lastPoint'] + ': <code>' + info.account[9].value + '</code>\n\n'
            responseText += '<i>' + dt[lang]['inputSumElectricity'] + '</i>'
        }

        dt[user.language]['sumOptions'].map( (el,i) => {
            i%3 ===0 ? keyboard.push([{ 'text': splitSum(el) + ' so\'m' }]) : keyboard.at(-1).push({ 'text': splitSum(el) + ' so\'m' })
        })
        
        user.session = 'inputSumElectricity'
        user.save()
    }else{
        const text = dt[lang]['apiErrorCode'][info.code] || info.message + " : " + info.data
        responseText += '<i>' + text + '</i>'
    }


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


