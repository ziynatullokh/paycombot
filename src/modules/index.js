import createUser from './user/createUser.js'
import createPayButtons from './keyboard/createPayButtons.js'

import myHomeWallet from './keyboard/myHomeWallet/wallet.js'

import inputMobilePhone from './keyboard/mobile/inputMobilePhone.js'
import inputMobileSum from './keyboard/mobile/inputMobileSum.js'
import inputCard from './keyboard/mobile/inputCard.js'
import inputCardExpire from './keyboard/mobile/inputCardExpire.js'
import homeButton from './keyboard/homeButton.js'


import payMobileRequest from './payment/mobile/payMobileRequest.js'
import payMobileVerify from './payment/mobile/payMobileVerify.js'

import createCommunalInline from './keyboard/createCommunalInline.js'
import electricityInline from './keyboard/communal/electricity/electricityInline.js'
import addCommunalWallet from './keyboard/communal/electricity/addCommunalWallet.js'
import inputAccountElectricity from './keyboard/communal/electricity/inputAccountElectricity.js'
import inputAccountWallet from './keyboard/communal/electricity/inputAccountWallet.js'
import inputSumElectricity from './keyboard/communal/electricity/inputSumElectricity.js'
import inputCardElectricity from './keyboard/communal/electricity/inputCardElectricity.js'

import payCommunalRequest from './payment/communal/payCommunalRequest.js'
import payCommunalVerify from './payment/communal/payCommunalVerify.js'

import payInternetProviders from './keyboard/internet/createInternet.js'
import payTransport from './keyboard/transport/createTransport.js'


import createCommon from './keyboard/common/createCommon.js'
import inputAccountCommon from './keyboard/common/inputAccountCommon.js'
import inputSumCommon from './keyboard/common/inputSumCommon.js'
import inputCardCommon from './keyboard/common/inputCardCommon.js'

import payCommonRequest from './payment/common/payCommonRequest.js'
import payCommonVerify from './payment/common/payCommonVerify.js'

import adminPanel from './keyboard/admin/infoAdmin.js'
import addInternetMerchant from './keyboard/admin/addInternetMerchant.js'
import deleteInternetMerchant from './keyboard/admin/deleteInternetMerchant.js'

import addTransportMerchant from './keyboard/admin/addTransportMerchant.js'
import deleteTransportMerchant from './keyboard/admin/deleteTransportMerchant.js'

import viewStatistic from './keyboard/admin/viewStatistic.js'
import disableBot from './keyboard/admin/disableBot.js'
import enableBot from './keyboard/admin/enableBot.js'
import sendMessageAllUsers from './keyboard/admin/sendMessageAllUsers.js'

import btnSettings from './keyboard/setting/setting.js'
import changeLanguage from './keyboard/setting/changeLanguage.js'



export default {
    homeButton,

    user: {
        createUser
    },
    btnPay: createPayButtons,
    btnSettings,
    changeLanguage,
    myHomeWallet,

    inputMobilePhone,
    inputMobileSum,
    inputCard,
    inputCardExpire,
    payMobileRequest,
    payMobileVerify,

    payUtilityPayments: createCommunalInline,
    electricity: electricityInline,
    gas:electricityInline,
    addCommunalWallet,
    inputAccountWallet,
    inputAccountElectricity,
    inputSumElectricity,
    inputCardElectricity,
    payCommunalRequest,
    payCommunalVerify,


    payInternetProviders,
    payTransport,

    createCommon,
    inputAccountCommon,
    inputSumCommon,
    inputCardCommon,
    payCommonRequest,
    payCommonVerify,

    adminPanel,
    addInternetMerchant,
    deleteInternetMerchant,
    addTransportMerchant,
    deleteTransportMerchant,
    
    viewStatistic,
    disableBot,
    enableBot,
    sendMessageAllUsers

}