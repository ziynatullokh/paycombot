'user strict'
import TelegramBot from 'node-telegram-bot-api'
import puppeteer  from 'puppeteer'
import fs  from 'fs'
import path  from 'path'
import md5  from 'md5'
import config from './config.js'
import database from './models/db.js'
import modules from './modules/index.js'
import dt from '#dictionary'
import checkPhoneNumber from './tools/checkPhoneNumber.js'
import cancelCheque from './tools/cancelCheque.js'
import error_handler from './tools/errorHandler.js'
import getBotStatus from './tools/botStatus.js'
import searchMerchant from './tools/searchMerchant.js'




;( async() => {
    const app = new TelegramBot(config.TOKEN, { polling: true })
    
    const connectDatabase = await database()
    const db = connectDatabase.models
    

    app.on('message', async(msg) => {

        const chatid = msg.from.id
        const msgid = msg.message_id
        const msgtime = msg.date
        let text = msg?.text
        msg.db = db
        const user = await db.User.findOne({ where: { user_id: chatid}})
        const session = user?.session
        const lang = user?.language

        const botStatus = getBotStatus(lang,'status')

        if(user) {
            if(+user['msgtime'] + 0.5 >= msgtime) {
                return SM(chatid,dt[user['language'] || 'default']['speed'])
            }
            user.msgtime = msgtime
            user.msgid = msgid
            user.save()

            if(!botStatus){
                return SM(chatid,dt[lang]['statusBotText'])
            }
            else if(text == '/start'){
                await loading(chatid,dt[lang]['loading'])
                const data = await modules['homeButton'](msg,user)
                SM(chatid,data.responseText, data.responseParam)
            }
            else if(dt[lang]['homeMenuKeyboard'][text]){
                const data = await modules[dt[lang]['homeMenuKeyboard'][text]](msg,user)
                SM(chatid,data.responseText, data.responseParam)
            }
            else if(text == '/admin'){
                SM(chatid,dt[lang]['requestAdminPass'])
                user.session = 'inputAdminPass'
                user.save()
            }
            else if(session == 'inputAdminPass'){
                if(!text) return
                else if(md5(text) !== config.ADMIN_PASS){
                    SM(chatid,dt[lang]['wrongAdminPass'])
                    user.session = 'home'
                    return user.save()
                }
                await loading(chatid, dt[lang]['loading'])
                const data = await modules['adminPanel'](msg,user)
                SM(chatid,data.responseText,data.responseParam)
                user.session = 'adminPanel'
                user.save()
            }
            else if(session == 'addInternetMerchantName'){
                if(!text) return

                else if(dt[lang]['cancel'][text]){
                    const data = await modules['homeButton'](msg,user)
                    SM(chatid,data.responseText, data.responseParam)
                }
                else if(text.length > 3 && text.length < 16){
                    msg.db.Internet.create({
                        provider_name: text
                    })
                    .then( data => {
                        SM(chatid,dt[lang]['inputInternetMerchantID'])
                        user.session = 'inputInternetMerchantID'
                        user.save()
                    })
                    .catch(error => {
                        SM(chatid,dt[lang]['existsInternetMerchantName'])
                    })
                    return 
                }
                SM(chatid,dt[lang]['wrongInternetMerchantName'])
            }
            else if( session == 'inputInternetMerchantID'){
                const internet = await msg.db.Internet.findOne({
                    where: { provider_id: null}
                })

                if(!text) return

                else if(dt[lang]['cancel'][text]){
                    const data = await modules['homeButton'](msg,user)
                    internet.destroy()
                    SM(chatid,data.responseText, data.responseParam)
                }

                else if(text.length === 24){
                    const account_type = searchMerchant(text)

                    if(!account_type) return SM(chatid,dt[lang]['wrongInternetMerchantID'])

                    internet.provider_id = text
                    internet.provider_account_type = account_type
                    internet.save()
                    SM(chatid,dt[lang]['successInternetMerchantName'])
                    
                    const data = await modules['adminPanel'](msg,user)
                    SM(chatid,data.responseText,data.responseParam)
                    user.session = 'adminPanel'
                    user.save()
                    return
                }
                SM(chatid,dt[lang]['wrongInternetMerchantID'])
            }
            else if(session == 'addTransportMerchantName'){
                if(!text) return

                else if(dt[lang]['cancel'][text]){
                    const data = await modules['homeButton'](msg,user)
                    SM(chatid,data.responseText, data.responseParam)
                }
                else if(text.length > 3 && text.length < 16){
                    msg.db.Transport.create({
                        provider_name: text
                    })
                    .then( data => {
                        SM(chatid,dt[lang]['inputTransportMerchantID'])
                        user.session = 'inputTransportMerchantID'
                        user.save()
                    })
                    .catch(error => {
                        SM(chatid,dt[lang]['existsTransportMerchantName'])
                    })
                    return 
                }
                SM(chatid,dt[lang]['wrongTransportMerchantName'])
            }
            else if( session == 'inputTransportMerchantID'){
                const internet = await msg.db.Transport.findOne({
                    where: { provider_id: null}
                })

                if(!text) return

                else if(dt[lang]['cancel'][text]){
                    const data = await modules['homeButton'](msg,user)
                    internet.destroy()
                    SM(chatid,data.responseText, data.responseParam)
                }

                else if(text.length === 24){
                    const account_type = searchMerchant(text)

                    if(!account_type) return SM(chatid,dt[lang]['wrongTransportMerchantID'])

                    internet.provider_id = text
                    internet.provider_account_type = account_type
                    internet.save()
                    SM(chatid,dt[lang]['successTransportMerchantName'])
                    
                    const data = await modules['adminPanel'](msg,user)
                    SM(chatid,data.responseText,data.responseParam)
                    user.session = 'adminPanel'
                    user.save()
                    return
                }
                SM(chatid,dt[lang]['wrongTransportMerchantID'])
            }
            else if(session == 'selectCategory'){
                if(!text) return
                else if(dt[lang]['cancel'][text]){
                    const data = await modules['homeButton'](msg,user)
                    SM(chatid,data.responseText, data.responseParam)
                }
                else if(dt[lang]['keyboardPayCategory'][text]){
                    const data = await modules[dt[lang]['keyboardPayCategory'][text]](msg,user)
                    SM(chatid,data.responseText,data.responseParam)
                }
            }
            else if(session == 'inputPhoneValue'){

                const inputValue = text ? text.replaceAll(/[^0-9]/g, '') : msg?.contact?.phone_number?.replaceAll(/[^0-9]/g, '')
                const check = checkPhoneNumber(inputValue)

                if(dt[lang]['cancel'][text]){
                    const data = await modules['homeButton'](msg,user)
                    SM(chatid,data.responseText, data.responseParam)
                }

                else if(check){
                    const data = await modules['inputMobileSum'](msg,user,inputValue,check)
                    SM(chatid,data.responseText,data.responseParam)                    
                }

                else {
                    SM(chatid,dt[lang]['wrongInputPhone'])
                }

            }
            else if (session == 'inputSumText'){
                if(!text) return

                msg.text = text.replaceAll(/[^0-9]/g, '')

                if(dt[lang]['cancel'][text]){
                    const data = await modules['homeButton'](msg,user)
                    SM(chatid,data.responseText, data.responseParam)
                }

                else if(dt[lang].mobileMinSum > msg.text){
                    SM(chatid,dt[lang]['mobileMinSumText'])
                }

                else if(dt[lang].mobileMaxSum < msg.text){
                    SM(chatid,dt[lang]['mobileMaxSumText'])
                }

                else if(Number.isInteger(+msg.text)){
                    const data = await modules['inputCard'](msg,user,msg.text)
                    SM(chatid,data.responseText,data.responseParam)                    
                }

                else {
                    SM(chatid,dt[lang]['wrongInputSum'])
                }
            }
            else if(session == 'inputCardText'){
                if(!text) return
                const inputValue = text.replaceAll(/[^0-9]/g, '')

                if(dt[lang]['cancel'][text]){
                    const data = await modules['homeButton'](msg,user)
                    SM(chatid,data.responseText, data.responseParam)
                }

                else if(/(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/.test(inputValue) && inputValue.length === 16){
                    const data = await modules['inputCardExpire'](msg,user,inputValue)
                    SM(chatid,data.responseText,data.responseParam)                    
                }
                else{
                    SM(chatid,dt[lang]['wrongInputCard'])
                }
            }
            else if(session == 'inputCardExpireText'){
                if(!text) return
                msg.text = text.replaceAll(/[^0-9]/g, '')


                if(dt[lang]['cancel'][text]){
                    const data = await modules['homeButton'](msg,user)
                    SM(chatid,data.responseText, data.responseParam)
                }

                else if(/^(0[0-9]|1[0-2])(2[2-9])/.test(msg.text)){
                    const data = await modules['payMobileRequest'](msg,user)
                    await loading(chatid, dt[lang]['loading'])
                    SM(chatid,data.responseText,data.responseParam)                    
                }

                else{
                    SM(chatid,dt[lang]['wrongInputCardExpire'])
                }
            }
            else if (session == 'inputSmsCodePayMobile'){
                if(!text) return

                if(dt[lang]['cancel'][text]){
                    const data = await modules['homeButton'](msg,user)
                    SM(chatid,data.responseText, data.responseParam)
                }

                else if(text.length == 6 && Number.isInteger(+text)){
                    const data = await modules['payMobileVerify'](msg,user,text)
                    SM(chatid,data.responseText,data.responseParam)
                    if(data.success){
                        const data = await modules['homeButton'](msg,user)
                        SM(chatid,data.responseText, data.responseParam)
                    }
                }
                else{
                    SM(chatid,dt[lang]['wrongInputSmsCodePayMobile'])
                }
            }
            else if( session == 'inputAccountElectricity'){
                if(!text) return

                else if(dt[lang]['cancel'][text]){
                    const data = await modules['homeButton'](msg,user)
                    return SM(chatid,data.responseText, data.responseParam)
                }

                msg.text = text.replaceAll(/[^0-9]/g, '')

                if(msg.text?.length > 16){
                    SM(chatid,dt[lang]['wrongAccountElectricity'])
                } 
                
                else if(msg.text){
                    const data = await modules['inputAccountElectricity'](msg,user)
                    SM(chatid,data.responseText, data.responseParam)
                }

            }
            else if( session == 'inputSumElectricity'){
                if(!text) return

                else if(dt[lang]['cancel'][text]){
                    const data = await modules['homeButton'](msg,user)
                    return SM(chatid,data.responseText, data.responseParam)
                }

                msg.text = text.replaceAll(/[^0-9]/g, '')

                
                if(dt[lang].communalMinSum > msg.text){
                    SM(chatid,dt[lang]['communalMinSumText'])
                }

                else if(dt[lang].communalMaxSum < msg.text){
                    SM(chatid,dt[lang]['communalMaxSumText'])
                }

                else if(text){
                    const data = await modules['inputSumElectricity'](msg,user)
                    SM(chatid,data.responseText, data.responseParam)
                }

            }
            else if( session == 'inputCardElectricity'){
                if(!text) return

                else if(dt[lang]['cancel'][text]){
                    const data = await modules['homeButton'](msg,user)
                    return SM(chatid,data.responseText, data.responseParam)
                }

                msg.text = text.replaceAll(/[^0-9]/g, '')
                
                if(/(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/.test(msg.text) && msg.text.length === 16){
                    const data = await modules['inputCardElectricity'](msg,user)
                    SM(chatid,data.responseText, data.responseParam)                    
                }
                else{
                    SM(chatid,dt[lang]['wrongInputCard'])
                }

            }
            else if( session == 'inputExpireelectricity'){
                if(!text) return

                else if(dt[lang]['cancel'][text]){
                    const data = await modules['homeButton'](msg,user)
                    return SM(chatid, data.responseText, data.responseParam)
                }

                msg.text = text.replaceAll(/[^0-9]/g, '')

                if(/^(0[0-9]|1[0-2])(2[2-9])/.test(msg.text)){
                    const data = await modules['payCommunalRequest'](msg,user)
                    await loading(chatid, dt[lang]['loading'])
                    SM(chatid, data.responseText, data.responseParam)                    
                }

                else{
                    SM(chatid, dt[lang]['wrongInputCardExpire'])
                }
            }
            else if(session == 'inputSmsCodeElectricity'){
                if(!text) return

                if(dt[lang]['cancel'][text]){
                    const data = await modules['homeButton'](msg,user)
                    SM(chatid,data.responseText, data.responseParam)
                }

                msg.text = text.replaceAll(/[^0-9]/g, '')
                
                if(msg.text.length == 6){
                    const data = await modules['payCommunalVerify'](msg,user)
                    SM(chatid,data.responseText,data.responseParam)
                    if(data.success){
                        const data = await modules['homeButton'](msg,user)
                        SM(chatid,data.responseText, data.responseParam)
                    }
                }
                else{
                    SM(chatid,dt[lang]['wrongInputSmsCodePayMobile'])
                }
            }
            else if(session == 'inputAccountWallet'){
                if(!text) return

                else if(dt[lang]['cancel'][text]){
                    const data = await modules['homeButton'](msg,user)
                    return SM(chatid,data.responseText, data.responseParam)
                }

                msg.text = text.replaceAll(/[^0-9]/g, '')

                if(msg.text?.length > 16){
                    SM(chatid,dt[lang]['wrongAccountElectricity'])
                } 
                
                else if(msg.text){
                    const data = await modules['inputAccountWallet'](msg,user)
                    SM(chatid,data.responseText, data.responseParam)
                }
            }
            else if(session == 'sendMessageAllUsers'){

                if(dt[lang]['cancel'][text]){
                    const data = await modules['homeButton'](msg,user)
                    return SM(chatid,data.responseText, data.responseParam)
                }
                app.copyMessage(chatid,msg.from.id, msg.message_id, { 
                    reply_markup: {
                        inline_keyboard:[
                            [
                                { text: dt[lang]['sendBroadcast'], callback_data: 'sendBroadcast'},
                                { text: dt[lang]['cancelBroadcast'], callback_data: 'cancelBroadcast'}
                            ]
                        ]
                    }
                })
            }
            else if(session == 'inputAccountCommon'){
                if(!text) return

                else if(dt[lang]['cancel'][text]){
                    const data = await modules['homeButton'](msg,user)
                    return SM(chatid,data.responseText, data.responseParam)
                }

                else if(text.length > 3 && text.length < 20){
                    const data = await modules['inputAccountCommon'](msg,user)
                    return SM(chatid,data.responseText, data.responseParam)
                }
                else{
                    SM(chatid,dt[lang]['inputWrongAccountGlobal'])
                }
            }
            else if(session == 'inputSumCommon'){
                if(!text) return

                else if(dt[lang]['cancel'][text]){
                    const data = await modules['homeButton'](msg,user)
                    return SM(chatid,data.responseText, data.responseParam)
                }

                msg.text = text.replaceAll(/[^0-9]/g, '')

                
                if(dt[lang].commonMinSum > msg.text){
                    SM(chatid,dt[lang]['inputMinSumCommon'])
                }

                else if(dt[lang].commonMaxSum < msg.text){
                    SM(chatid,dt[lang]['inputMaxSumCommon'])
                }

                else if(text){
                    const data = await modules['inputSumCommon'](msg,user)
                    SM(chatid,data.responseText, data.responseParam)
                }
            }
            else if(session == 'inputCardCommon'){
                if(!text) return

                else if(dt[lang]['cancel'][text]){
                    const data = await modules['homeButton'](msg,user)
                    return SM(chatid,data.responseText, data.responseParam)
                }

                msg.text = text.replaceAll(/[^0-9]/g, '')

                if(/(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/.test(msg.text) && msg.text.length === 16){
                    const data = await modules['inputCardCommon'](msg,user)
                    SM(chatid,data.responseText, data.responseParam)                    
                }
                else{
                    SM(chatid,dt[lang]['wrongInputCard'])
                }
            }
            else if(session == 'inputCardExpireCommon'){
                if(!text) return

                else if(dt[lang]['cancel'][text]){
                    const data = await modules['homeButton'](msg,user)
                    return SM(chatid, data.responseText, data.responseParam)
                }

                msg.text = text.replaceAll(/[^0-9]/g, '')

                if(/^(0[0-9]|1[0-2])(2[2-9])/.test(msg.text)){
                    const data = await modules['payCommonRequest'](msg,user)
                    await loading(chatid, dt[lang]['loading'])
                    SM(chatid, data.responseText, data.responseParam)                    
                }

                else{
                    SM(chatid, dt[lang]['wrongInputCardExpire'])
                }
            }
            else if(session == 'inputVerifyCodeCommon'){
                if(!text) return

                else if(dt[lang]['cancel'][text]){
                    const data = await modules['homeButton'](msg,user)
                    return SM(chatid, data.responseText, data.responseParam)
                }

                msg.text = text.replaceAll(/[^0-9]/g, '')

                if(msg.text.length === 6){
                    const data = await modules['payCommonVerify'](msg,user,msg.text)
                    await loading(chatid, dt[lang]['loading'])
                    
                    SM(chatid, data.responseText, data.responseParam)                    
                    
                    if(data.success){
                        const data = await modules['homeButton'](msg,user)
                        SM(chatid,data.responseText, data.responseParam)
                    }
                }

                else{
                    SM(chatid, dt[lang]['wrongInputSmsCodePayMobile'])
                }
            }
            else{
                const data = await modules['homeButton'](msg,user)
                return SM(chatid,data.responseText, data.responseParam)
            }

        }
        else {
            const data = await modules.user.createUser(msg)
            SM(chatid,data.responseText, data.responseParam)
        }
    
    })
    
    app.on('callback_query', async (msg) => {
        const inlineId = msg.id
        const chatid = msg.message.chat.id
        const msgData = msg.data.split('-')
        const communalType = msgData[0]
        const communal = msgData[1]
        

        msg.db = db
        
        const user = await db.User.findOne({ where: { user_id: chatid}})
        const lang = user?.language
        
        ACQ(inlineId, { text: dt[lang]['loading'], cache_time: 20})

        if(dt[user.language]['adminPanel'][communalType]){
            const type = dt[lang]['adminPanel'][communalType]
            const data = await modules[type](msg,user,type)
            SM(chatid, data.responseText,data.responseParam)
        }
        else if(communalType === 'sendBroadcast'){
            const users = await msg.db.User.findAll()

            broadcast(user, msg, users, users.length)

            SM(chatid,dt[lang]['startBroadcasr'])
        }
        else if(communalType === 'cancelBroadcast'){
            app.deleteMessage(chatid,msg.message.message_id)
        }

        else if(communalType === 'createCommon'){
            const data = await modules[communalType](msg,user,msgData)
            SM(chatid, data.responseText,data.responseParam)
        }
        
        else if(communalType === 'addWallet'){
            const type = dt[lang]['inlineKeyboardCommunal'][communal]
            const data = await modules['addCommunalWallet'](msg,user,type)
            app.editMessageText(data.responseText, data.responseParam)
        }
        else if(dt[lang]['inlineKeyboardCommunal'][communal]){
            const type = dt[lang]['inlineKeyboardCommunal'][communal]
            const data = await modules[type](msg,user,type)
            app.editMessageText(data.responseText, data.responseParam)
        }
        else if(dt[lang]['settingsMenuKeyboard'][communalType]){
            const type = dt[lang]['settingsMenuKeyboard'][communalType]
            const data = await modules[type](msg,user,communal)
            app.editMessageText(data.responseText, data.responseParam)
            if(data.responseParam.language){
                const data = await modules['homeButton'](msg,user)
                return SM(chatid,data.responseText, data.responseParam)
            }
        }
        else if(communalType === 'getCheque' && communal.length === 24){
            const filePath = path.join(process.cwd(), 'chequeFile', communal + '.pdf')

            // if(fs.existsSync(filePath)){
            //     const file = fs.readFileSync(filePath)
            //     return app.sendDocument(chatid,file)
            // }

            const browser = await puppeteer.launch()
            const page = await browser.newPage()
          
            await page.goto('https://payme.uz/checkout/' + communal)
            await page.pdf({ path: filePath , format: 'A6'})
            await browser.close()

            const file = fs.readFileSync(filePath)
            app.sendDocument(chatid,file)
        }
        else if(communalType === 'toCancelCheque' && communal.length === 24){
            const response = await cancelCheque(communal)
            
            if(response.success){
                SM(chatid, dt[lang]['cancelledCheque'])
                try{
                    const [ mobil ] = await msg.db.OrderPayMobile.update( { order_status: 'cancel' },{ where: { order_chek: communal }})
                    if(!mobil){
                        await msg.db.OrderPayCommunal.update( { order_status: 'cancel' },{ where: { order_chek: communal }})
                    }
                }catch(error){
                    error_handler('toCancelCheque', error.message, communal + response.message)
                }
            }
            else {
                SM(chatid, response.message)
            }
        }
        else if(communalType === 'repeatChequeMobile' && communal.length === 24){
            const data = await modules['inputMobileSum'](msg,user,communal)
            SM(chatid,data.responseText,data.responseParam)
        }
        else if(communalType === 'repeatChequeCommunal' && communal.length === 24){
            const data = await modules['inputAccountElectricity'](msg,user,communal)
            SM(chatid,data.responseText, data.responseParam)
        }
        else if(communalType === 'repeatChequeCommon' && communal.length === 24){
            const data = await modules['inputAccountCommon'](msg,user,communal)
            SM(chatid,data.responseText, data.responseParam)
        }
        else if(communalType === 'deleteTransportMerchant'){
            const data = await msg.db.Transport.destroy({ where: { provider_id: communal}})
            app.deleteMessage(chatid,msg.message.message_id)

            if(!data){
                return SM(chatid,dt[lang]['deleteWrongTransportMerchantID'])
            }
            SM(chatid,dt[lang]['successTransportMerchantID'])
        }
        else if(communalType === 'deleteInternetMerchant'){
            const data = await msg.db.Internet.destroy({ where: { provider_id: communal}})
            app.deleteMessage(chatid,msg.message.message_id)

            if(!data){
                return SM(chatid,dt[lang]['deleteWrongInternetMerchantID'])
            }
            SM(chatid,dt[lang]['deleteWrongInternetMerchantID'])
        }
    })


    app.on('polling_error', error => {
        error_handler('polling', error.message)
    })

    
    function SM(chatid,text,param){
        param = param ? param : { parse_mode: 'HTML'}
        app.sendMessage(chatid,text,param)
        .catch(error => {
            error_handler('sendMessage', error.message, chatid + text + JSON.stringify(param))
        })
    }

    function ACQ(inlineid, param){
        app.answerCallbackQuery(inlineid, param).catch( error => {
            error_handler('answerCallbackQuery', error.message, inlineid + JSON.stringify(param))
        })
    }


    async function broadcast(admin,msg, users,count,success = 0, block = 0){
        try{
            if(!users.length) {

                const words = dt[admin.language]['statBroadcast']
                let responseText = dt[admin.language]['finishBroadcast']

                responseText += '\n\n<b>' + words['allUsers'] + ' : ' + count + '</b>'
                responseText += '\n<b>' + words['activeUsers'] + ' : ' + success + '</b>'
                responseText += '\n<b>' + words['blockUsers'] + ' : ' + block + '</b>'
                return SM(admin.user_id, responseText)
            }
            const user = users.shift()
            const data = await app.copyMessage(user.user_id, msg.message.chat.id, msg.message.message_id, { disable_notification: true })
            
            return broadcast(admin, msg, users, count,success +=1, block += 0)
        }catch(error){
            if(error.message === 'ETELEGRAM: 403 Forbidden: bot was blocked by the user'){
                return broadcast(admin, msg, users, count,success +=0, block += 1)
            }
            error_handler('broadcast', error.message)
            return SM(admin.user_id, dt[admin.language['errorBroadcast']])
        }
    }

    async function loading(chatid, text){
        const up = '🔺 '
        const down = '🔻 '
        const success = '✅ '
        let msgid = await app.sendMessage(chatid, text)
        const _100 = 100 / text.length
        
        for(let i = 1; i<=text.length;){
            const procent = i * _100 | 0
            let load = i < 7 ? up + text + procent + ' %' : down + text + procent + ' %'
            if(i == text.length){
                load = success + text + ' 100 %'
                await app.editMessageText(load,{ chat_id: chatid, message_id: msgid.message_id}) 
                await app.deleteMessage(chatid, msgid.message_id)
                return 
                
            }
            await app.editMessageText(load,{ chat_id: chatid, message_id: msgid.message_id}) 
            i+=1
        }
    }

})()
