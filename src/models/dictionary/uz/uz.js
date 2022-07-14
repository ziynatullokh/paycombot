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
    'speed':"⏳ Vou qanday tezkor odam 🤔\n1 soniyada 1 ta buyruq yuboring ☹️",
    'loading':"Yuklanmoqda... ",
    'successPay':"✅ To'lov muvaffaqiyatli bajarildi!",
    'home':"🏘 Bosh sahifa",
    'selectPayCategory':"Kerakli bo'limni tanlang 👇",
    'requestPhone':"📞 Raqamni yuborish",
    'inputPhoneText':"📱 Hisobni to'ldirmoqchi bo'lgan telefon raqamini kiriting yoki 📞 Raqam yuborishni bosing.\n\nKiritish uchun na'muna: 991234567 yoki 998991234567",
    'wrongInputPhone':"📱 Kiritilgan raqam noto'g'ri iltimos e'tiborli bo'ling.\n\nNa'muna: 998991234567",
    'inputSumText':"💵 To'lov summasini kiriting.\n\n" + mobileMinSum + " dan " + mobileMaxSum + " gacha.",
    'mobileMinSumText':"‼️ Eng kam miqdor " + mobileMinSum + " so'm iltimos e'tiborli bo'ling.",
    'mobileMaxSumText':"‼️ Eng ko'p miqdor " + mobileMaxSum + " so'm iltimos e'tiborli bo'ling.",
    'wrongInputSum':"⚠️ Summani kiriting (" + mobileMinSum + " dan " + mobileMaxSum + " gacha):",
    'inputCardText':"💳 Karta raqamingizni kiriting...\nUzCard, HUMO va barcha Kobeydjing kartalarini kiritishingiz mumkin.",   
    'wrongInputCard':"‼️ Kartangiz raqamini kiriting.",
    'inputCardExpireText':"📅 Kartangiz amal qilish muddatini kiriting.",
    'wrongInputCardExpire':"‼️ Kartangiz amal qilish muddatini kiriting.",
    'inputSmsCodePayMobile': " raqamiga SMSda kelgan tasdiqlash kodini kiriting.",
    'wrongInputSmsCodePayMobile': "❌ Tasdiqlash kodini xato kiritdingiz.",
    'manyWrongInputSmsCode': "❌ Kod kiritishga urinishlar tugadi.",
    'viewCheckText':"🧾 Chekni olish 👈",
    'toCancelCheque':"❎ To'lovni bekor qilish",
    'cancelledCheque':"✅ To'lovni bekor qilish uchun ariza yuborildi!\nJarayon 60 daqiqagacha vaqt olishi mumkin.\n\nP.S: <i>Mijoz hisobida mablag' yetarli bo'lmasa yoki boshqa hollarda to'lov bekor qilinmaydi!</i>",
    'repeatCheque':"🔄 To'lovni takrorlash",

    'cancel':{
        "❌ Bekor qilish":"cancel"
    },
    'keyboardPayCategory':{
        "📱 Mobil operatorlar":'inputMobilePhone',
        "🏡 Kommunal to'lovlar":'payUtilityPayments',
        "🛰 Internet provayderlar":'payInternetProviders',
        "🛂 Transport":'payTransport',
        "❌ Bekor qilish":"cancel"
    },
    'homeMenuKeyboard':{
        "💸 To'lov":"btnPay",
        "🏘 Mening uyim":"myHomeWallet",
        "⚙️ Sozlamalar":"btnSettings",
    },

    'walletsNotFound':"🤷‍♂️ Sizda saqlangan hisob raqamlar mavjud emas!",
    'walletsAddText':"Ma'lumot qo'shish uchun pastdagi tugmalardan keraklisini bosing!",
    'walletAdded':"☑️ Hisob raqam muvaffaqiyatli qo'shildi!",


    'selectCommunalPayText':"Kommunal xizmatni tanlang.",
    'selectArea':"📍 Hududni tanlang",
    'selectBranch':"📍 Tumanni tanlang",
    'inputAccountElectricity':"Hisob raqamni kiriting: 👇",
    'wrongAccountElectricity':"🚫 Hisob raqamni kiritishda xatolik",
    'inputSumElectricity':"💵 To'lov summasini kiriting yoki tanlang\n\n" + communalMinSum + " dan " + communalMaxSum + " so'm gacha! 👇",
    'communalMinSumText':"‼️ Eng kam miqdor " + communalMinSum + " so'm iltimos e'tiborli bo'ling.",
    'communalMaxSumText':"‼️ Eng ko'p miqdor " + communalMaxSum + " so'm iltimos e'tiborli bo'ling.",
    'wrongSumElectricity':"🚫 To'lov summasi xato kiritildi.",

    'sumOptions':[ 5000, 10000, 30000, 50000, 100000],

    'communalInfo':{
        'infoText':"🔌 Hisob raqam ma'lumotlari",
        'area':"📍 Hudud",
        'branch':"📍 Tuman",
        'account':"🆔 Hisob raqam",
        'account_owner':"👤 F.I.Sh",
        'address':"📍 Manzil",
        'balance':"💰 Hozirgi hisob holati",
        'tarif':"⚖️ Hozirgi energiya tarifi",
        'lastPayDate':"📅 Ohirgi to'lov vaqti",
        'lastPayAmount':"💰 Ohirgi to'lov summasi",
        'lastPoint':"🔄 Hisoblagich holati",
        'payAmount':"💴 To'lov summasi",
        'card':"💳 Karta",
        'cardExpire':"📅 Amal qilish",
        'errorLoadData':"🔗 Balans tekshirishda xatolik yuz berdi",
        'electricity':"⚡️ Elektr energiya ma'lumotlari",
        'gas':"🔥 Gaz ma'lumotlari",
        'update_timestamp':"🔄 Ma'lumot olingan vaqt",
    },

    'apiErrorCode':{
        '-10000':"🚫 Server javob bermayapti! Keyinroq urinib ko'ring",
        '-31700':"🚫 Foydalanuvchi topilmadi, qaytadan hisobni tekshirib kiriting!",
        '-31512':"🚫 Foydalanuvchi topilmadi, qaytadan hisobni tekshirib kiriting!",
        '-31623':"🚫 Xizmat ko`rsatuvchi provayder mavjud emas yoki noto`g`ri ishlamoqda! Iltimos keyinroq urinib ko'ring",
        '-32602':"🚫 Ma'lumotlar noto'g'ri kiritildi"
    },

    'selectInternetProviderText':"📡 Internet provayderni tanlang",
    'selectTransportText':"🛂 Transport turini tanlang",

    'inlineKeyboardCommunal':{
        "⚡️ Elektr energiya":"electricity",
        "🔥 Gaz":"gas",
        // "💧 Ichimlik suvi":"water",
        // "♻️ Chiqindi":"musor"
    },

    'requestAdminPass':"🏧 Parolni kiriting!",
    'wrongAdminPass':"🏧 Parol xato!",
    'successAdminPass':"🏧 Xush kelibsiz!",

    'adminPanel':{
        '➕ Internet provayder qo\'shish': 'addInternetMerchant',
        '➖ Internet provayder o\'chirish': 'deleteInternetMerchant',
        '➕ Transport qo\'shish': 'addTransportMerchant',
        '➖ Transport o\'chirish': 'deleteTransportMerchant',
        '📊 Statistika': 'viewStatistic',
        '🔴 Botni o\'chirish': 'disableBot',
        '🟢 Botni yoqish': 'enableBot',
        '📬 Umumiy xabar yuborish': 'sendMessageAllUsers'
    },

    'addInternetMerchantText': "Internet provayder nomini yuboring!",
    'wrongInternetMerchantName': "Internet provayder nomi keragidan uzun yoki qisqa!",
    'existsInternetMerchantName': "Internet provayder allaqachon mavjud, boshqa nom kiriting!",
    'successInternetMerchantName': "Internet provayder muvaffaqiyatli qo'shildi!",

    'inputInternetMerchantID': "Internet provayderni Paycom ID sini kiriting!",
    'wrongInternetMerchantID': "Internet provayderni Paycom ID si xato kiritildi!",
    'deleteInternetMerchantID': "O'chirish uchun Internet provayderni tanlang!",
    'successInternetMerchantID': "Internet provayder o'chirildi !",
    'deleteWrongInternetMerchantID': "Internet provayder o'chirishda xatolik !",

    'addTransportMerchantText': "Transport nomini yuboring!",
    'wrongTransportMerchantName': "Transport nomi keragidan uzun yoki qisqa!",
    'existsTransportMerchantName': "Transport allaqachon mavjud, boshqa nom kiriting!",
    'successTransportMerchantName': "Transport muvaffaqiyatli qo'shildi!",

    'inputTransportMerchantID': "Transport Paycom ID sini kiriting!",
    'wrongTransportMerchantID': "Transport Paycom ID si xato kiritildi!",
    'deleteTransportMerchantID': "O'chirish uchun Transport tanlang!",
    'successTransportMerchantID': "Transport o'chirildi !",
    'deleteWrongTransportMerchantID': "Transport o'chirishda xatolik !",

    'statisticViewText':"📊 Botning foydalanuvchilar va to'lovlari haqida",
    'allUsersText':"🔄 Botning umumiy foydalanuvchilari",
    'allOrdersText':"🧾 Botning umumiy to'lovlari",
    'allSuccessOrder':"✅ Samarali bajarilgan to'lovlar",
    'allFailOrder':"❌ Samarali tugatilmagan to'lovlar",
    'allPendingOrder':"🔐 Amalga oshirilayotgan to'lovlar",
    'allCancelOrder':"🚫 Bekor qilingan to'lovlar",
    'allUndeterminedOrder':"⚠️ Server xatosi bilan bajarilmagan",

    'disabledBotText':"📴 Bot faoliyati to'htatildi",
    'enabledBotText':"🔂 Bot faoliyati tiklandi",
    'statusBotText':"⚠️ Tizim ta'mirlanmoqda, keyinroq urinib ko'ring",
    'errorBotText':"⚠️ Tizim noto'g'ri ishlamoqda",

    'sendMessageAllUsersText': "📬 Foydalanuvchilarga yuboriladigon xabarni yuboring!",
    'sendBroadcast': "📬 Yuborish!",
    'cancelBroadcast':"❌ Bekor qilish",
    'startBroadcasr':"🏌️‍♂️ Yuborish boshlandi",
    'finishBroadcast':"🏌️‍♂️ Yuborish tugadi",
    'errorBroadcast':"🚫 Yuborish to'htatildi",
    'statBroadcast':{
        'allUsers':"🔄 Barcha foydalanuvchilar",
        'activeUsers':"✅ Faol foydalanuvchilar",
        'blockUsers':"⬅️ Botni tark etgan foydalanuvchilar"
    },

    'inputAccountCommon':"🆔 Hisob (ID, Karta) raqamni kiriting",
    'inputWrongAccountCommon':"🆔 Hisob (ID, Karta) raqami xato kiritildi",
    'inputSumCommon':"💵 To'lov summasini kiriting yoki tanlang\n\n" + commonMinSum + " dan " + commonMaxSum + " so'm gacha! 👇",
    'inputMinSumCommon':"‼️ Eng kam miqdor " + commonMinSum + " so'm iltimos e'tiborli bo'ling.",
    'inputMaxSumCommon':"‼️ Eng ko'p miqdor " + commonMaxSum + " so'm iltimos e'tiborli bo'ling.",
    'inputWrongSumCommon':"🚫 To'lov summasi xato kiritildi.",
    
    'settingsText':"⚙️ Bot sozlamalari",
    'successChangeLanguage':"Foydalanish tili muvaffaqiyatli o'zgartirildi",
    'selectLanguageText':"Kerakli tilni tanlang",

    'settingsMenuKeyboard':{
        "🇺🇿 Tilni o'zgartirish":"changeLanguage"
    },

    
}