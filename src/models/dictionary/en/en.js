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
    'speed':"โณ Wow what a fast man ๐ค\nSend 1 command in 1 second โน๏ธ",
    'loading':"Loading... ",
    'successPay':"โ Payment completed successfully!!",
    'home':"๐ Homepage",
    'selectPayCategory':"Select the desired section ๐",
    'requestPhone':"๐ Send number",
    'inputPhoneText':"๐ฑ Enter the phone number you want to top up or click ๐ Send number.\n\nSample for input: 991234567 or 998991234567",
    'wrongInputPhone':"๐ฑ The entered number is incorrect, please be careful.\n\nSample: 998991234567",
    'inputSumText':"๐ต Enter the payment amount.\n\nFrom " + mobileMinSum + " to " + mobileMaxSum + ".",
    'mobileMinSumText':"โผ๏ธ Please note that the minimum amount is " + mobileMinSum + " sum.",
    'mobileMaxSumText':"โผ๏ธ The maximum amount is " + mobileMaxSum + " sum, please be careful.",
    'wrongInputSum':"โ ๏ธ Enter the sum (from " + mobileMinSum + " to " + mobileMaxSum + "):",
    'inputCardText':"๐ณ Enter your card number...\nYou can enter UzCard, HUMO and all Kobeijing cards.",   
    'wrongInputCard':"โผ๏ธ Enter your card number.",
    'inputCardExpireText':"๐ Enter the validity period of your card.",
    'wrongInputCardExpire':"โผ๏ธ Enter the validity period of your card.",
    'inputSmsCodePayMobile': " number, enter the confirmation code received in SMS.",
    'wrongInputSmsCodePayMobile': "โ You entered the verification code incorrectly.",
    'manyWrongInputSmsCode': "โ Attempts to enter the code have ended.",
    'viewCheckText':"๐งพ Get the check ๐",
    'toCancelCheque':"โ Cancellation of payment",
    'cancelledCheque':"โ A request to cancel the payment has been sent!\nThe process may take up to 60 minutes.\n\nP.S: <i>The payment will not be canceled if there are insufficient funds in the customer's account or otherwise!</i>",
    'repeatCheque':"๐ Repeat payment",

    'cancel':{
        "โ Cancel":"cancel"
    },
    'keyboardPayCategory':{
        "๐ฑ Mobile operators":'inputMobilePhone',
        "๐ก Utility bills":'payUtilityPayments',
        "๐ฐ Internet providers":'payInternetProviders',
        "๐ Transport":'payTransport',
        "โ Cancel":"cancel"
    },
    'homeMenuKeyboard':{
        "๐ธ Payment":"btnPay",
        "๐ My house":"myHomeWallet",
        "โ๏ธ Settings":"btnSettings",
    },

    'walletsNotFound':"๐คทโโ๏ธ You have no saved accounts!",
    'walletsAddText':"Click the buttons below to add information!",
    'walletAdded':"โ๏ธ Account added successfully!",


    'selectCommunalPayText':"Select a utility.",
    'selectArea':"๐ Select an area",
    'selectBranch':"๐ Select a district",
    'inputAccountElectricity':"Enter the account number: ๐",
    'wrongAccountElectricity':"๐ซ Error entering account number",
    'inputSumElectricity':"๐ต Enter or select payment amount\n\n from " + communalMinSum + " to " + communalMaxSum + " soums! ๐",
    'communalMinSumText':"โผ๏ธ The minimum amount is " + communalMinSum + " soum, please be careful.",
    'communalMaxSumText':"โผ๏ธ Please note that the maximum amount is " + communalMaxSum + " sum.",
    'wrongSumElectricity':"๐ซ The payment amount was entered incorrectly.",

    'sumOptions':[ 5000, 10000, 30000, 50000, 100000],

    'communalInfo':{
        'infoText':"๐ Account number information",
        'area':"๐ Province",
        'branch':"๐ Region",
        'account':"๐ Account number",
        'account_owner':"๐ค Ln.Fn.",
        'address':"๐ Address",
        'balance':"๐ฐ Current account status",
        'tarif':"โ๏ธ Current energy tariff",
        'lastPayDate':"๐ Last payment time",
        'lastPayAmount':"๐ฐ Last payment amount",
        'lastPoint':"๐ Counter status",
        'payAmount':"๐ด Payment amount",
        'card':"๐ณ Card",
        'cardExpire':"๐ ะalidity",
        'errorLoadData':"๐ An error occurred while checking the balance",
        'electricity':"โก๏ธ Electricity data",
        'gas':"๐ฅ Gas data",
        'update_timestamp':"๐ The time the information was received",
    },

    'apiErrorCode':{
        '-10000':"๐ซ The server is not responding! Try again later",
        '-31700':"๐ซ User not found, check the account again!",
        '-31512':"๐ซ User not found, check the account again!",
        '-31623':"๐ซ The service provider does not exist or is not working properly! Please try again later",
        '-32602':"๐ซ The data was entered incorrectly"
    },

    'selectInternetProviderText':"๐ก Select an Internet provider",
    'selectTransportText':"๐ Select the type of transport",

    'inlineKeyboardCommunal':{
        "โก๏ธ Electric energy":"electricity",
        "๐ฅ Gas":"gas",
        // "๐ง Ichimlik suvi":"water",
        // "โป๏ธ Chiqindi":"musor"
    },

    'requestAdminPass':"๐ง Enter the password!",
    'wrongAdminPass':"๐ง The password is incorrect!",
    'successAdminPass':"๐ง Welcome!",

    'adminPanel':{
        'โ Add an Internet provider': 'addInternetMerchant',
        'โ Turn off the Internet provider': 'deleteInternetMerchant',
        'โ Add transport': 'addTransportMerchant',
        'โ Turn off transport': 'deleteTransportMerchant',
        '๐ Statistics': 'viewStatistic',
        '๐ด Disable the bot': 'disableBot',
        '๐ข Enable the bot': 'enableBot',
        '๐ฌ Send a general message': 'sendMessageAllUsers'
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

    'statisticViewText':"๐ About the bot's users and payments",
    'allUsersText':"๐ General users of the bot",
    'allOrdersText':"๐งพ Total Bot Fees",
    'allSuccessOrder':"โ Effective payments",
    'allFailOrder':"โ Effective outstanding payments",
    'allPendingOrder':"๐ Payments in progress",
    'allCancelOrder':"๐ซ Canceled payments",
    'allUndeterminedOrder':"โ ๏ธ Failed with server error",

    'disabledBotText':"๐ด The bot has been suspended",
    'enabledBotText':"๐ Bot activity has been restored",
    'statusBotText':"โ ๏ธ The system is under repair, please try again later",
    'errorBotText':"โ ๏ธ The system is malfunctioning",

    'sendMessageAllUsersText': "๐ฌ Send a message to users!",
    'sendBroadcast': "๐ฌ Sending!",
    'cancelBroadcast':"โ Cancel",
    'startBroadcasr':"๐๏ธโโ๏ธ Sending started",
    'finishBroadcast':"๐๏ธโโ๏ธ Sending completed",
    'errorBroadcast':"๐ซ Sending has been suspended",
    'statBroadcast':{
        'allUsers':"๐ All users",
        'activeUsers':"โ Active users",
        'blockUsers':"โฌ๏ธ Users who left the bot"
    },

    'inputAccountCommon':"๐ Enter the account (ID, Card) number",
    'inputWrongAccountCommon':"๐ The account (ID, Card) number was entered incorrectly",
    'inputSumCommon':"๐ต Enter or select payment amount\n\n" + commonMinSum + " to " + commonMaxSum + " sums! ๐",
    'inputMinSumCommon':"โผ๏ธ Please note that the minimum amount is " + commonMinSum + " sum.",
    'inputMaxSumCommon':"โผ๏ธ The maximum amount is " + commonMaxSum + " sum, please be careful.",
    'inputWrongSumCommon':"๐ซ The payment amount was entered incorrectly.",
    
    'settingsText':"โ๏ธ Bot settings",
    'successChangeLanguage': "Usage language changed successfully",
    'selectLanguageText':"Select the desired language",


    'settingsMenuKeyboard':{
        "๐บ๐ฟ Change the language":"changeLanguage"
    },

    
}