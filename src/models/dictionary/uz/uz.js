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
    'speed':"โณ Vou qanday tezkor odam ๐ค\n1 soniyada 1 ta buyruq yuboring โน๏ธ",
    'loading':"Yuklanmoqda... ",
    'successPay':"โ To'lov muvaffaqiyatli bajarildi!",
    'home':"๐ Bosh sahifa",
    'selectPayCategory':"Kerakli bo'limni tanlang ๐",
    'requestPhone':"๐ Raqamni yuborish",
    'inputPhoneText':"๐ฑ Hisobni to'ldirmoqchi bo'lgan telefon raqamini kiriting yoki ๐ Raqam yuborishni bosing.\n\nKiritish uchun na'muna: 991234567 yoki 998991234567",
    'wrongInputPhone':"๐ฑ Kiritilgan raqam noto'g'ri iltimos e'tiborli bo'ling.\n\nNa'muna: 998991234567",
    'inputSumText':"๐ต To'lov summasini kiriting.\n\n" + mobileMinSum + " dan " + mobileMaxSum + " gacha.",
    'mobileMinSumText':"โผ๏ธ Eng kam miqdor " + mobileMinSum + " so'm iltimos e'tiborli bo'ling.",
    'mobileMaxSumText':"โผ๏ธ Eng ko'p miqdor " + mobileMaxSum + " so'm iltimos e'tiborli bo'ling.",
    'wrongInputSum':"โ ๏ธ Summani kiriting (" + mobileMinSum + " dan " + mobileMaxSum + " gacha):",
    'inputCardText':"๐ณ Karta raqamingizni kiriting...\nUzCard, HUMO va barcha Kobeydjing kartalarini kiritishingiz mumkin.",   
    'wrongInputCard':"โผ๏ธ Kartangiz raqamini kiriting.",
    'inputCardExpireText':"๐ Kartangiz amal qilish muddatini kiriting.",
    'wrongInputCardExpire':"โผ๏ธ Kartangiz amal qilish muddatini kiriting.",
    'inputSmsCodePayMobile': " raqamiga SMSda kelgan tasdiqlash kodini kiriting.",
    'wrongInputSmsCodePayMobile': "โ Tasdiqlash kodini xato kiritdingiz.",
    'manyWrongInputSmsCode': "โ Kod kiritishga urinishlar tugadi.",
    'viewCheckText':"๐งพ Chekni olish ๐",
    'toCancelCheque':"โ To'lovni bekor qilish",
    'cancelledCheque':"โ To'lovni bekor qilish uchun ariza yuborildi!\nJarayon 60 daqiqagacha vaqt olishi mumkin.\n\nP.S: <i>Mijoz hisobida mablag' yetarli bo'lmasa yoki boshqa hollarda to'lov bekor qilinmaydi!</i>",
    'repeatCheque':"๐ To'lovni takrorlash",

    'cancel':{
        "โ Bekor qilish":"cancel"
    },
    'keyboardPayCategory':{
        "๐ฑ Mobil operatorlar":'inputMobilePhone',
        "๐ก Kommunal to'lovlar":'payUtilityPayments',
        "๐ฐ Internet provayderlar":'payInternetProviders',
        "๐ Transport":'payTransport',
        "โ Bekor qilish":"cancel"
    },
    'homeMenuKeyboard':{
        "๐ธ To'lov":"btnPay",
        "๐ Mening uyim":"myHomeWallet",
        "โ๏ธ Sozlamalar":"btnSettings",
    },

    'walletsNotFound':"๐คทโโ๏ธ Sizda saqlangan hisob raqamlar mavjud emas!",
    'walletsAddText':"Ma'lumot qo'shish uchun pastdagi tugmalardan keraklisini bosing!",
    'walletAdded':"โ๏ธ Hisob raqam muvaffaqiyatli qo'shildi!",


    'selectCommunalPayText':"Kommunal xizmatni tanlang.",
    'selectArea':"๐ Hududni tanlang",
    'selectBranch':"๐ Tumanni tanlang",
    'inputAccountElectricity':"Hisob raqamni kiriting: ๐",
    'wrongAccountElectricity':"๐ซ Hisob raqamni kiritishda xatolik",
    'inputSumElectricity':"๐ต To'lov summasini kiriting yoki tanlang\n\n" + communalMinSum + " dan " + communalMaxSum + " so'm gacha! ๐",
    'communalMinSumText':"โผ๏ธ Eng kam miqdor " + communalMinSum + " so'm iltimos e'tiborli bo'ling.",
    'communalMaxSumText':"โผ๏ธ Eng ko'p miqdor " + communalMaxSum + " so'm iltimos e'tiborli bo'ling.",
    'wrongSumElectricity':"๐ซ To'lov summasi xato kiritildi.",

    'sumOptions':[ 5000, 10000, 30000, 50000, 100000],

    'communalInfo':{
        'infoText':"๐ Hisob raqam ma'lumotlari",
        'area':"๐ Hudud",
        'branch':"๐ Tuman",
        'account':"๐ Hisob raqam",
        'account_owner':"๐ค F.I.Sh",
        'address':"๐ Manzil",
        'balance':"๐ฐ Hozirgi hisob holati",
        'tarif':"โ๏ธ Hozirgi energiya tarifi",
        'lastPayDate':"๐ Ohirgi to'lov vaqti",
        'lastPayAmount':"๐ฐ Ohirgi to'lov summasi",
        'lastPoint':"๐ Hisoblagich holati",
        'payAmount':"๐ด To'lov summasi",
        'card':"๐ณ Karta",
        'cardExpire':"๐ Amal qilish",
        'errorLoadData':"๐ Balans tekshirishda xatolik yuz berdi",
        'electricity':"โก๏ธ Elektr energiya ma'lumotlari",
        'gas':"๐ฅ Gaz ma'lumotlari",
        'update_timestamp':"๐ Ma'lumot olingan vaqt",
    },

    'apiErrorCode':{
        '-10000':"๐ซ Server javob bermayapti! Keyinroq urinib ko'ring",
        '-31700':"๐ซ Foydalanuvchi topilmadi, qaytadan hisobni tekshirib kiriting!",
        '-31512':"๐ซ Foydalanuvchi topilmadi, qaytadan hisobni tekshirib kiriting!",
        '-31623':"๐ซ Xizmat ko`rsatuvchi provayder mavjud emas yoki noto`g`ri ishlamoqda! Iltimos keyinroq urinib ko'ring",
        '-32602':"๐ซ Ma'lumotlar noto'g'ri kiritildi"
    },

    'selectInternetProviderText':"๐ก Internet provayderni tanlang",
    'selectTransportText':"๐ Transport turini tanlang",

    'inlineKeyboardCommunal':{
        "โก๏ธ Elektr energiya":"electricity",
        "๐ฅ Gaz":"gas",
        // "๐ง Ichimlik suvi":"water",
        // "โป๏ธ Chiqindi":"musor"
    },

    'requestAdminPass':"๐ง Parolni kiriting!",
    'wrongAdminPass':"๐ง Parol xato!",
    'successAdminPass':"๐ง Xush kelibsiz!",

    'adminPanel':{
        'โ Internet provayder qo\'shish': 'addInternetMerchant',
        'โ Internet provayder o\'chirish': 'deleteInternetMerchant',
        'โ Transport qo\'shish': 'addTransportMerchant',
        'โ Transport o\'chirish': 'deleteTransportMerchant',
        '๐ Statistika': 'viewStatistic',
        '๐ด Botni o\'chirish': 'disableBot',
        '๐ข Botni yoqish': 'enableBot',
        '๐ฌ Umumiy xabar yuborish': 'sendMessageAllUsers'
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

    'statisticViewText':"๐ Botning foydalanuvchilar va to'lovlari haqida",
    'allUsersText':"๐ Botning umumiy foydalanuvchilari",
    'allOrdersText':"๐งพ Botning umumiy to'lovlari",
    'allSuccessOrder':"โ Samarali bajarilgan to'lovlar",
    'allFailOrder':"โ Samarali tugatilmagan to'lovlar",
    'allPendingOrder':"๐ Amalga oshirilayotgan to'lovlar",
    'allCancelOrder':"๐ซ Bekor qilingan to'lovlar",
    'allUndeterminedOrder':"โ ๏ธ Server xatosi bilan bajarilmagan",

    'disabledBotText':"๐ด Bot faoliyati to'htatildi",
    'enabledBotText':"๐ Bot faoliyati tiklandi",
    'statusBotText':"โ ๏ธ Tizim ta'mirlanmoqda, keyinroq urinib ko'ring",
    'errorBotText':"โ ๏ธ Tizim noto'g'ri ishlamoqda",

    'sendMessageAllUsersText': "๐ฌ Foydalanuvchilarga yuboriladigon xabarni yuboring!",
    'sendBroadcast': "๐ฌ Yuborish!",
    'cancelBroadcast':"โ Bekor qilish",
    'startBroadcasr':"๐๏ธโโ๏ธ Yuborish boshlandi",
    'finishBroadcast':"๐๏ธโโ๏ธ Yuborish tugadi",
    'errorBroadcast':"๐ซ Yuborish to'htatildi",
    'statBroadcast':{
        'allUsers':"๐ Barcha foydalanuvchilar",
        'activeUsers':"โ Faol foydalanuvchilar",
        'blockUsers':"โฌ๏ธ Botni tark etgan foydalanuvchilar"
    },

    'inputAccountCommon':"๐ Hisob (ID, Karta) raqamni kiriting",
    'inputWrongAccountCommon':"๐ Hisob (ID, Karta) raqami xato kiritildi",
    'inputSumCommon':"๐ต To'lov summasini kiriting yoki tanlang\n\n" + commonMinSum + " dan " + commonMaxSum + " so'm gacha! ๐",
    'inputMinSumCommon':"โผ๏ธ Eng kam miqdor " + commonMinSum + " so'm iltimos e'tiborli bo'ling.",
    'inputMaxSumCommon':"โผ๏ธ Eng ko'p miqdor " + commonMaxSum + " so'm iltimos e'tiborli bo'ling.",
    'inputWrongSumCommon':"๐ซ To'lov summasi xato kiritildi.",
    
    'settingsText':"โ๏ธ Bot sozlamalari",
    'successChangeLanguage':"Foydalanish tili muvaffaqiyatli o'zgartirildi",
    'selectLanguageText':"Kerakli tilni tanlang",

    'settingsMenuKeyboard':{
        "๐บ๐ฟ Tilni o'zgartirish":"changeLanguage"
    },

    
}