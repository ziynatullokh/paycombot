import dt from '#dictionary'
import splitSum from '#tools/splitSum.js'
import getInfo from '#modules/payment/common/commonGetInfo.js'


export default async  (msg,user,repeatCheque) => {
    
    const chatid = msg.from.id
    const msgid = msg.message_id
    const msgtime = msg.date
    const text = msg.text
    const lang = user.language
    let order;

    if(repeatCheque){
        const findOrder = await msg.db.OrderPayCommon({ where: { order_chek: repeatCheque}})
        order = await msg.OrderPayCommon.create({
            order_account: findOrder.order_account,
            order_account_type: findOrder.order_account_type,
            order_merchant: findOrder.order_merchant,
        })
    }
    else{
        order =  (await msg.db.OrderPayCommon.findAll({
            where: { order_user_id: chatid },
            order: [ ['id', 'desc'] ],
            limit: 1,
        }))[0]
        order.order_account = text
        order.save()
    }


    const info = await getInfo(order.order_account, order.order_account_type, order.order_amount, order.order_merchant)


    let commWords = dt[lang]['communalInfo']
    let responseText = ''
    const keyboard = [  ]

    if(info.account){
        const [ balance ] = info.account.filter( el => el.name === 'balance' ? true : false)
        

        responseText += '<b>' + commWords['infoText'] + ': </b>\n\n'
        responseText += commWords['account'] + ': <code>' + order.order_account + '</code>\n'
        responseText += balance ? commWords['balance'] + ': <code>' + balance.value + '</code> UZS' : ''
        responseText += '\n\n<i>' + dt[lang]['inputSumCommon'] + '</i>'

        dt[user.language]['sumOptions'].map( (el,i) => {
            i%3 ===0 ? keyboard.push([{ 'text': splitSum(el) + ' so\'m' }]) : keyboard.at(-1).push({ 'text': splitSum(el) + ' so\'m' })
        })
        
        user.session = 'inputSumCommon'
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