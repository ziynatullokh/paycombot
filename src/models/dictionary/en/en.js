const mobileMinSum = 500
const mobileMaxSum = 100000

const communalMinSum = 500
const communalMaxSum = 10000000

const commonMinSum = 1000
const commonMaxSum = 1000000

export default {
    mobileMinSum,
    mobileMaxSum,
    communalMaxSum,
    communalMinSum,
    commonMinSum,
    commonMaxSum,
    'speed':"⏳ Wow what a fast man 🤔\nSend 1 command in 1 second ☹️",
    'loading':"Loading... ",
    'successPay':"✅ Payment completed successfully!!",
    'home':"🏘 Homepage",
    'selectPayCategory':"Select the desired section 👇",
    'requestPhone':"📞 Send number",
    'inputPhoneText':"📱 Enter the phone number you want to top up or click 📞 Send number.\n\nSample for input: 991234567 or 998991234567",
    'wrongInputPhone':"📱 The entered number is incorrect, please be careful.\n\nSample: 998991234567",
    'inputSumText':"💵 Enter the payment amount.\n\nFrom " + mobileMinSum + " to " + mobileMaxSum + ".",
    'mobileMinSumText':"‼️ Please note that the minimum amount is " + mobileMinSum + " sum.",
    'mobileMaxSumText':"‼️ The maximum amount is " + mobileMaxSum + " sum, please be careful.",
    'wrongInputSum':"⚠️ Enter the sum (from " + mobileMinSum + " to " + mobileMaxSum + "):",
    'inputCardText':"💳 Enter your card number...\nYou can enter UzCard, HUMO and all Kobeijing cards.",   
    'wrongInputCard':"‼️ Enter your card number.",
    'inputCardExpireText':"📅 Enter the validity period of your card.",
    'wrongInputCardExpire':"‼️ Enter the validity period of your card.",
    'inputSmsCodePayMobile': " number, enter the confirmation code received in SMS.",
    'wrongInputSmsCodePayMobile': "❌ You entered the verification code incorrectly.",
    'manyWrongInputSmsCode': "❌ Attempts to enter the code have ended.",
    'viewCheckText':"🧾 Get the check 👈",
    'toCancelCheque':"❎ Cancellation of payment",
    'cancelledCheque':"✅ A request to cancel the payment has been sent!\nThe process may take up to 60 minutes.\n\nP.S: <i>The payment will not be canceled if there are insufficient funds in the customer's account or otherwise!</i>",
    'repeatCheque':"🔄 Repeat payment",

    'cancel':{
        "❌ Cancel":"cancel"
    },
    'keyboardPayCategory':{
        "📱 Mobile operators":'inputMobilePhone',
        "🏡 Utility bills":'payUtilityPayments',
        "🛰 Internet providers":'payInternetProviders',
        "🛂 Transport":'payTransport',
        "❌ Cancel":"cancel"
    },
    'homeMenuKeyboard':{
        "💸 Payment":"btnPay",
        "🏘 My house":"myHomeWallet",
        "⚙️ Settings":"btnSettings",
    },

    'walletsNotFound':"🤷‍♂️ You have no saved accounts!",
    'walletsAddText':"Click the buttons below to add information!",
    'walletAdded':"☑️ Account added successfully!",


    'selectCommunalPayText':"Select a utility.",
    'selectArea':"📍 Select an area",
    'selectBranch':"📍 Select a district",
    'inputAccountElectricity':"Enter the account number: 👇",
    'wrongAccountElectricity':"🚫 Error entering account number",
    'inputSumElectricity':"💵 Enter or select payment amount\n\n from " + communalMinSum + " to " + communalMaxSum + " soums! 👇",
    'communalMinSumText':"‼️ The minimum amount is " + communalMinSum + " soum, please be careful.",
    'communalMaxSumText':"‼️ Please note that the maximum amount is " + communalMaxSum + " sum.",
    'wrongSumElectricity':"🚫 The payment amount was entered incorrectly.",

    'sumOptions':[ 5000, 10000, 30000, 50000, 100000],

    'communalInfo':{
        'infoText':"🔌 Account number information",
        'area':"📍 Province",
        'branch':"📍 Region",
        'account':"🆔 Account number",
        'account_owner':"👤 Ln.Fn.",
        'address':"📍 Address",
        'balance':"💰 Current account status",
        'tarif':"⚖️ Current energy tariff",
        'lastPayDate':"📅 Last payment time",
        'lastPayAmount':"💰 Last payment amount",
        'lastPoint':"🔄 Counter status",
        'payAmount':"💴 Payment amount",
        'card':"💳 Card",
        'cardExpire':"📅 Мalidity",
        'errorLoadData':"🔗 An error occurred while checking the balance",
        'electricity':"⚡️ Electricity data",
        'gas':"🔥 Gas data",
        'update_timestamp':"🔄 The time the information was received",
    },

    'apiErrorCode':{
        '-10000':"🚫 The server is not responding! Try again later",
        '-31700':"🚫 User not found, check the account again!",
        '-31512':"🚫 User not found, check the account again!",
        '-31623':"🚫 The service provider does not exist or is not working properly! Please try again later",
        '-32602':"🚫 The data was entered incorrectly"
    },

    'selectInternetProviderText':"📡 Select an Internet provider",
    'selectTransportText':"🛂 Select the type of transport",

    'inlineKeyboardCommunal':{
        "⚡️ Electric energy":"electricity",
        "🔥 Gas":"gas",
        // "💧 Ichimlik suvi":"water",
        // "♻️ Chiqindi":"musor"
    },

    'requestAdminPass':"🏧 Enter the password!",
    'wrongAdminPass':"🏧 The password is incorrect!",
    'successAdminPass':"🏧 Welcome!",

    'adminPanel':{
        '➕ Add an Internet provider': 'addInternetMerchant',
        '➖ Turn off the Internet provider': 'deleteInternetMerchant',
        '➕ Add transport': 'addTransportMerchant',
        '➖ Turn off transport': 'deleteTransportMerchant',
        '📊 Statistics': 'viewStatistic',
        '🔴 Disable the bot': 'disableBot',
        '🟢 Enable the bot': 'enableBot',
        '📬 Send a general message': 'sendMessageAllUsers'
    },

    'addInternetMerchantText': "Submit your ISP(Internet provider) name!",
    'wrongInternetMerchantName': "ISP name is longer or shorter than before!",
    'existsInternetMerchantName': "Internet provider already exists, enter another name!",
    'successInternetMerchantName': "ISP successfully added!",

    'inputInternetMerchantID': "Enter your ISP's Paycom ID!",
    'wrongInternetMerchantID': "ISP Paycom ID was entered incorrectly!",
    'deleteInternetMerchantID': "Select the ISP to disable!",
    'successInternetMerchantID': "ISP is disabled !",
    'deleteWrongInternetMerchantID': "An error occurred when deleting the Internet service provider. !",

    'addTransportMerchantText': "Enter the transport name!",
    'wrongTransportMerchantName': "Transport name is longer or shorter than before!",
    'existsTransportMerchantName': "Transport already exists, enter another name!",
    'successTransportMerchantName': "Transport added successfully!",

    'inputTransportMerchantID': "Enter your Transport Paycom ID!",
    'wrongTransportMerchantID': "The Transport Paycom ID was entered incorrectly!",
    'deleteTransportMerchantID': "Select Transport to delete!",
    'successTransportMerchantID': "Transport deleted !",
    'deleteWrongTransportMerchantID': "Error during transport delete !",

    'statisticViewText':"📊 About the bot's users and payments",
    'allUsersText':"🔄 General users of the bot",
    'allOrdersText':"🧾 Total Bot Fees",
    'allSuccessOrder':"✅ Effective payments",
    'allFailOrder':"❌ Effective outstanding payments",
    'allPendingOrder':"🔐 Payments in progress",
    'allCancelOrder':"🚫 Canceled payments",
    'allUndeterminedOrder':"⚠️ Failed with server error",

    'disabledBotText':"📴 The bot has been suspended",
    'enabledBotText':"🔂 Bot activity has been restored",
    'statusBotText':"⚠️ The system is under repair, please try again later",
    'errorBotText':"⚠️ The system is malfunctioning",

    'sendMessageAllUsersText': "📬 Send a message to users!",
    'sendBroadcast': "📬 Sending!",
    'cancelBroadcast':"❌ Cancel",
    'startBroadcasr':"🏌️‍♂️ Sending started",
    'finishBroadcast':"🏌️‍♂️ Sending completed",
    'errorBroadcast':"🚫 Sending has been suspended",
    'statBroadcast':{
        'allUsers':"🔄 All users",
        'activeUsers':"✅ Active users",
        'blockUsers':"⬅️ Users who left the bot"
    },

    'inputAccountCommon':"🆔 Enter the account (ID, Card) number",
    'inputWrongAccountCommon':"🆔 The account (ID, Card) number was entered incorrectly",
    'inputSumCommon':"💵 Enter or select payment amount\n\n" + commonMinSum + " to " + commonMaxSum + " sums! 👇",
    'inputMinSumCommon':"‼️ Please note that the minimum amount is " + commonMinSum + " sum.",
    'inputMaxSumCommon':"‼️ The maximum amount is " + commonMaxSum + " sum, please be careful.",
    'inputWrongSumCommon':"🚫 The payment amount was entered incorrectly.",
    
    'settingsText':"⚙️ Bot settings",
    'successChangeLanguage': "Usage language changed successfully",
    'selectLanguageText':"Select the desired language",


    'settingsMenuKeyboard':{
        "🇺🇿 Change the language":"changeLanguage"
    },

    
}