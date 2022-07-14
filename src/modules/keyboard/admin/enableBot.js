import getBotStatus from '#tools/botStatus.js'

export default (_,user,type) => {

    const data = getBotStatus(user.language,type)

    const responseText = '<b>' + data + '</b>'

    const responseParam = { 
        parse_mode:'HTML'
    }

    return {
        responseText,
        responseParam
    }
}