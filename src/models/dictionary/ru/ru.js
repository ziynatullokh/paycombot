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
    'speed':"⏳ Ух ты какой быстрый 🤔\nОтправить 1 команду за 1 секунду ☹️",
    'loading':"Загрузка... ",
    'successPay':"✅ Платеж успешно завершен!",
    'home':"🏘 Главная страница",
    'selectPayCategory':"Выберите нужный раздел 👇",
    'requestPhone':"📞 Отправить номер",
    'inputPhoneText':"📱 Введите номер телефона, который хотите пополнить, или нажмите 📞 Отправить номер.\n\nОбразец ввода: 991234567 или 998991234567",
    'wrongInputPhone':"📱 Введен неверный номер, будьте внимательны.\n\nПример: 998991234567",
    'inputSumText':"💵 Введите сумму платежа.\n\n" + mobileMinSum + " с " + mobileMaxSum + "до.",
    'mobileMinSumText':"‼️ Обратите внимание, что минимальная сумма составляет " + mobileMinSum + " сумма.",
    'mobileMaxSumText':"‼️ Максимальная сумма составляет " + mobileMaxSum + " сумма, будьте внимательны.",
    'wrongInputSum':"⚠️ Введите сумму (от " + mobileMinSum + " до " + mobileMaxSum + "):",
    'inputCardText':"💳 Введите номер своей карты...\nВы можете ввести UzCard, HUMO и все карты Кобейджинг.",   
    'wrongInputCard':"‼️ Введите номер карты.",
    'inputCardExpireText':"📅 Введите срок действия вашей карты.",
    'wrongInputCardExpire':"‼️ Введите срок действия вашей карты.",
    'inputSmsCodePayMobile': " номер, введите код подтверждения, полученный в СМС.",
    'wrongInputSmsCodePayMobile': "❌ Вы неправильно ввели проверочный код.",
    'manyWrongInputSmsCode': "❌ Попытки ввести код прекращены.",
    'viewCheckText':"🧾 Получить чек 👈",
    'toCancelCheque':"❎ Отмена платежа",
    'cancelledCheque':"✅ Запрос на отмену платежа отправлен!\nПроцесс может занять до 60 минут.\n\nP.S: <i>Платеж не будет отменен, если на счету клиента недостаточно средств или по другим причинам!</i>",
    'repeatCheque':"🔄 Повторить платеж",

    'cancel':{
        "❌ Отменить":"cancel"
    },
    'keyboardPayCategory':{
        "📱 Мобильные операторы":'inputMobilePhone',
        "🏡 Коммунальные услуги":'payUtilityPayments',
        "🛰 Интернет-провайдеры":'payInternetProviders',
        "🛂 Транспорт":'payTransport',
        "❌ Отменить":"cancel"
    },
    'homeMenuKeyboard':{
        "💸 Оплата":"btnPay",
        "🏘 Мой дом":"myHomeWallet",
        "⚙️ Настройки":"btnSettings",
    },

    'walletsNotFound':"🤷‍♂️ У вас нет сохраненных аккаунтов!",
    'walletsAddText':"Нажмите на кнопки ниже, чтобы добавить информацию!",
    'walletAdded':"☑️ Аккаунт успешно добавлен!",


    'selectCommunalPayText':"Выберите утилиту.",
    'selectArea':"📍 Выберите область",
    'selectBranch':"📍 Выберите район",
    'inputAccountElectricity':"Введите номер счета: 👇",
    'wrongAccountElectricity':"🚫 Ошибка при вводе номера счета",
    'inputSumElectricity':"💵 Введите или выберите сумму платежа\n\n от " + communalMinSum + " до " + communalMaxSum + " сумма! 👇",
    'communalMinSumText':"‼️ Минимальная сумма " + communalMinSum + " сум, будьте внимательны.",
    'communalMaxSumText':"‼️ Обратите внимание, что максимальная сумма составляет " + communalMaxSum + " сумма.",
    'wrongSumElectricity':"🚫 Сумма платежа введена неверно.",

    'sumOptions':[ 5000, 10000, 30000, 50000, 100000],

    'communalInfo':{
        'infoText':"🔌 Информация о номере счета",
        'area':"📍 Область",
        'branch':"📍 Район",
        'account':"🆔 Номер счета",
        'account_owner':"👤 Ф.И.О",
        'address':"📍 Адрес",
        'balance':"💰 Текущий статус счета",
        'tarif':"⚖️ Текущий тариф на энергию",
        'lastPayDate':"📅 Время последнего платежа",
        'lastPayAmount':"💰 Окончательная сумма платежа",
        'lastPoint':"🔄 Состояние счетчика",
        'payAmount':"💴 Сумма к оплате",
        'card':"💳 Карта",
        'cardExpire':"📅 Срок действия карты",
        'errorLoadData':"🔗 Произошла ошибка при проверке баланса",
        'electricity':"⚡️ Данные об электричестве",
        'gas':"🔥 Данные о газе",
        'update_timestamp':"🔄 Время получения информации",
    },

    'apiErrorCode':{
        '-10000':"🚫 Сервер не отвечает! Попробуйте позже",
        '-31700':"🚫 Пользователь не найден, пожалуйста, счет номер еще раз!",
        '-31512':"🚫 Пользователь не найден, пожалуйста, счет номер еще раз!",
        '-31623':"🚫 Поставщик услуг не существует или не работает! Пожалуйста, попробуйте позже",
        '-32602':"🚫 Данные введены неверно"
    },

    'selectInternetProviderText':"📡 Выберите интернет-провайдера",
    'selectTransportText':"🛂 Выберите вид транспорта",

    'inlineKeyboardCommunal':{
        "⚡️ Электроэнергия":"electricity",
        "🔥 Газ":"gas",
        // "💧 Ichimlik suvi":"water",
        // "♻️ Chiqindi":"musor"
    },

    'requestAdminPass':"🏧 Введите пароль!",
    'wrongAdminPass':"🏧 Пароль неверен!",
    'successAdminPass':"🏧 Добро пожаловать!",

    'adminPanel':{
        '➕ Добавить интернет-провайдера': 'addInternetMerchant',
        '➖ Удалить интернет-провайдера': 'deleteInternetMerchant',
        '➕ Добавить транспорт': 'addTransportMerchant',
        '➖ Удалить транспорт': 'deleteTransportMerchant',
        '📊 Статистика': 'viewStatistic',
        '🔴 Отключить бота': 'disableBot',
        '🟢 Включить бота': 'enableBot',
        '📬 Отправить общее сообщение': 'sendMessageAllUsers'
    },

    'addInternetMerchantText': "Введите название интернет-провайдера!",
    'wrongInternetMerchantName': "Имя интернет-провайдера было введено неправильно!",
    'existsInternetMerchantName': "Интернет-провайдер уже существует, введите другое имя!",
    'successInternetMerchantName': "Интернет-провайдер успешно добавлен!",

    'inputInternetMerchantID': "Введите Paycom ID интернет-провайдера!",
    'wrongInternetMerchantID': "Paycom ID был введен неверно!",
    'deleteInternetMerchantID': "Выберите провайдера для отключения!",
    'successInternetMerchantID': "Интернет-провайдер отключен!",
    'deleteWrongInternetMerchantID': "Ошибка отключения интернет провайдера!",

    'addTransportMerchantText': "Введите название транспорта!",
    'wrongTransportMerchantName': "Имя транспорта было введено неправильно!",
    'existsTransportMerchantName': "Транспорт уже существует, введите другое название!",
    'successTransportMerchantName': "Транспорт успешно добавлен!",

    'inputTransportMerchantID': "Введите Paycom ID Транспорт!",
    'wrongTransportMerchantID': "Транспорт Paycom ID был введен неправильно!",
    'deleteTransportMerchantID': "Выберите Транспорт для удаления!",
    'successTransportMerchantID': "Транспорт отключен !",
    'deleteWrongTransportMerchantID': "Ошибка при ужаление транспорта !",

    'statisticViewText':"📊 О пользователях бота и платежах",
    'allUsersText':"🔄 Общие пользователи бота",
    'allOrdersText':"🧾 Общее количество выплат ботов",
    'allSuccessOrder':"✅ Эффективные платежи",
    'allFailOrder':"❌ Просроченные платежи",
    'allPendingOrder':"🔐 Платежи в процессе",
    'allCancelOrder':"🚫 Отмененные платежи",
    'allUndeterminedOrder':"⚠️ Не удалось из-за ошибки сервера",

    'disabledBotText':"📴 Бот был отключен",
    'enabledBotText':"🔂 Активность ботов восстановлена.",
    'statusBotText':"⚠️ Система находится на ремонте, повторите попытку позже",
    'errorBotText':"⚠️ Система работает со сбоями",

    'sendMessageAllUsersText': "📬 Отправить сообщение пользователям!",
    'sendBroadcast': "📬 Отправка!",
    'cancelBroadcast':"❌ Отменит",
    'startBroadcasr':"🏌️‍♂️ Отправка началась",
    'finishBroadcast':"🏌️‍♂️ Отправка завершена",
    'errorBroadcast':"🚫 Отправка приостановлена",
    'statBroadcast':{
        'allUsers':"🔄 Все пользователи",
        'activeUsers':"✅ Активные пользователи",
        'blockUsers':"⬅️ Пользователи, покинувшие бота"
    },

    'inputAccountCommon':"🆔 Введите номер счета (ID, карты)",
    'inputWrongAccountCommon':"🆔 Неправильно введен номер счета (ID, карты)",
    'inputSumCommon':"💵 Введите или выберите сумму платежа\n\n" + commonMinSum + " до " + commonMaxSum + " сумма! 👇",
    'inputMinSumCommon':"‼️ Обратите внимание, что минимальная сумма составляет " + commonMinSum + " сумма.",
    'inputMaxSumCommon':"‼️ Максимальная сумма " + commonMaxSum + " сумма, будьте внимательны.",
    'inputWrongSumCommon':"🚫 Сумма платежа введена неверно.",
    
    'settingsText':"⚙️ Настройки бота",
    'successChangeLanguage':"Язык использования успешно изменен",
    'selectLanguageText':"Выберите нужный язык",


    'settingsMenuKeyboard':{
        "🇺🇿 Изменить язык":"changeLanguage"
    },

    
}