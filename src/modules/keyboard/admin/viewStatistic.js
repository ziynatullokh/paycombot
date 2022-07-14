import dt from '#dictionary'
import { Op } from 'sequelize'

export default async (msg,user) => {
    const chatid = msg.from.id
    const msgid = msg.message_id
    const msgtime = msg.date
    const text = msg.text
    

    let responseText = '<b>' + dt[user.language]['statisticViewText'] + '</b>'
    
    let allSuccessOrders = 0 
    let allFailOrders = 0 
    let allPendingOrders = 0 
    let allCancelOrders = 0
    let allUndetermined = 0

    const { count: countAllMobileOrders, rows: allMobileOrders} = await msg.db.OrderPayMobile.findAndCountAll()
    const { count: countAllCommunalOrders, rows: allCommunalOrders} = await msg.db.OrderPayCommunal.findAndCountAll()
    const { count: countAllCommonOrders, rows: allCommonOrders} = await msg.db.OrderPayCommon.findAndCountAll()
    const allUsers = await msg.db.User.count()
    const allOrders = countAllMobileOrders + countAllCommunalOrders + countAllCommonOrders
    const updatedTime = new Date().toLocaleString('UZ') 

    allMobileOrders.map( el => {
        if(el.order_status === 'success') allSuccessOrders++
        else if(el.order_status === 'fail') allFailOrders++
        else if(el.order_status === 'pending') allPendingOrders++
        else if(el.order_status === 'cancel') allCancelOrders++
        else allUndetermined++
    })
    
    allCommunalOrders.map( el => {
        if(el.order_status === 'success') allSuccessOrders++
        else if(el.order_status === 'fail') allFailOrders++
        else if(el.order_status === 'pending') allPendingOrders++
        else if(el.order_status === 'cancel') allCancelOrders++
        else allUndetermined++
    })

    allCommonOrders.map( el => {
        if(el.order_status === 'success') allSuccessOrders++
        else if(el.order_status === 'fail') allFailOrders++
        else if(el.order_status === 'pending') allPendingOrders++
        else if(el.order_status === 'cancel') allCancelOrders++
        else allUndetermined++
    })

    responseText += '\n\n<b>' + dt[user.language]['allUsersText'] + '</b>: ' + '<code>' + allUsers + '</code>'
    responseText += '\n\n<b>' + dt[user.language]['allOrdersText'] + '</b>: ' + '<code>' + allOrders + '</code>'
    responseText += '\n<b>' + dt[user.language]['allSuccessOrder'] + '</b>: ' + '<code>' + allSuccessOrders + '</code>'
    responseText += '\n<b>' + dt[user.language]['allFailOrder'] + '</b>: ' + '<code>' + allFailOrders + '</code>'
    responseText += '\n<b>' + dt[user.language]['allPendingOrder'] + '</b>: ' + '<code>' + allPendingOrders + '</code>'
    responseText += '\n<b>' + dt[user.language]['allCancelOrder'] + '</b>: ' + '<code>' + allCancelOrders + '</code>'
    responseText += '\n<b>' + dt[user.language]['allUndeterminedOrder'] + '</b>: ' + '<code>' + allUndetermined + '</code>'
    responseText += '\n\n<b>' + dt[user.language]['communalInfo']['update_timestamp'] + '</b>: ' + '<code>' + updatedTime + '</code>'

    const responseParam = { 
        parse_mode:'HTML',

    }

    return {
        responseText,
        responseParam
    }
}