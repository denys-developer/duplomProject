// Our product database.
const sampleProducts = [
  {
    id: 1,
    name: "APPLE iPhone 11 64GB Black",
    category: "Айфони",
    price: 25499,
    description:
      "Диагональ дисплея\n" +
        "6.1 \"\n" +
        "\n" +
        " Матрица\n" +
        "IPS\n" +
        "\n" +
        " Оперативная память\n" +
        "4096 Мб\n" +
        "\n" +
        " Встроенная память\n" +
        "64 Гб",
    popular: true,
    imageUrls: [
      "https://i1.foxtrot.com.ua/product/MediumImages/6510857_0.jpg",
      "https://i1.foxtrot.com.ua/product/MediumImages/6510857_1.jpg"
    ]
  },
  {
    id: 2,
    name: "APPLE iPhone 7 Plus 32Gb Black",
    category: "Айфони",
    price: 13499,
    description:
     "Диагональ дисплея\n" +
        "5.5 \"\n" +
        "\n" +
        " Матрица\n" +
        "IPS\n" +
        "\n" +
        " Оперативная память\n" +
        "3072 Мб\n" +
        "\n" +
        " Встроенная память\n" +
        "32 Гб",
    popular: false,
    imageUrls: [
      "https://i1.foxtrot.com.ua/product/MediumImages/6307829_0.jpg",
      "https://i1.foxtrot.com.ua/product/MediumImages/6307829_1.jpg"
    ]
  },
  {
    id: 3,
    name: "MacBook Pro A2141 Space Grey",
    category: "Макбуки",
    price: 81999,
    description:
        "Диагональ дисплея\n" +
        "16 \"\n" +
        "\n" +
        " Разрешение дисплея\n" +
        "3072 x 1920\n" +
        "\n" +
        " Тип матрицы\n" +
        "IPS\n" +
        "\n" +
        " Базовая частота процессора\n" +
        "2.6 ГГц",
    popular: true,
    imageUrls: [
      "https://i1.foxtrot.com.ua/product/MediumImages/6531684_0.jpg",
      "https://i1.foxtrot.com.ua/product/MediumImages/6531684_0.jpg"
    ]
  },
  {
    id: 3,
    name: "APPLE A1466 MacBook Air",
    category: "Макбуки",
    price: 70000,
    description:
        "Диагональ дисплея\n" +
        "16 \"\n" +
        "\n" +
        " Разрешение дисплея\n" +
        "3072 x 1920\n" +
        "\n" +
        " Тип матрицы\n" +
        "IPS\n" +
        "\n" +
        " Базовая частота процессора\n" +
        "2.6 ГГц",
    popular: true,
    imageUrls: [
      "https://i1.foxtrot.com.ua/product/MediumImages/6441482_0.jpg",
      "https://i1.foxtrot.com.ua/product/MediumImages/6441482_2.jpg"
    ]
  },
  {
    id: 4,
    name: "Apple iPad (2019) 10.2\" Wi-Fi 32GB Space Gray",
    category: "Айпади",
    price: 10999,
    description:"Екран 10.2\" IPS (2160x1620) ємнісний Multi-Touch / Apple A10 Fusion / RAM 3 ГБ / 32 ГБ вбудованої пам'яті / Wi-Fi / Bluetooth 4.2 / основна камера 8 Мп, фронтальна — 1.2 Мп / iPadOS / 483 г / сірий космос",
    popular: true,
    imageUrls: [
      "https://i1.foxtrot.com.ua/product/MediumImages/6510901_0.jpg",
      "https://i1.foxtrot.com.ua/product/MediumImages/6510901_2.jpg"
    ]
  },
  {
    id: 5,
    name: "APPLE iPadPro 12.9\" 2020 Wi-Fi 128GB Space Grey ",
    category: "Айпади",
    price: 35900,
    description:"Екран 10.2\" IPS (2160x1620) ємнісний Multi-Touch / Apple A10 Fusion / RAM 3 ГБ / 32 ГБ вбудованої пам'яті / Wi-Fi / Bluetooth 4.2 / основна камера 8 Мп, фронтальна — 1.2 Мп / iPadOS / 483 г / сірий космос",
    popular: true,
    imageUrls: [
      "https://i1.foxtrot.com.ua/product/MediumImages/6561221_0.jpg",
      "https://i1.foxtrot.com.ua/product/MediumImages/6561221_2.jpg"
    ]
  },
  {
    id: 6,
    name:  "Apple iMac 21.5",
    category: "Макентоші",
    price: 36999,
    description:"Диагональ экрана21.5\" Модель процессораIntel Core i5 Тип внутреннего накопителяHDD Предустановленная ОСMacOS Sierra\n",
    popular: true,
    imageUrls: [
      "https://static.vodafone.ua/catalog/product/cache/e96373d1c57081d0b326a3dfa1f55e67/1/0/104241-apple-imac-21-5-a1418-mmqa2ua-a.jpg",
      "https://static.vodafone.ua/catalog/product/cache/e96373d1c57081d0b326a3dfa1f55e67/1/0/104241-apple-imac-21-5-a1418-mmqa2ua-a-3.jpg"
    ]
  },
  {
    id: 7,
    name:  " iPhone Xs 64GB Gold",
    category: "Айфони",
    price: 21999,
    description:"Диагональ дисплея\n" +
        "5.8 \"\n" +
        "\n" +
        " Матрица\n" +
        "OLED\n" +
        "\n" +
        " Встроенная память\n" +
        "64 Гб\n" +
        "\n" +
        " Основная камера\n" +
        "12 Мп",
    popular: false,
    imageUrls: [
      "https://i1.foxtrot.com.ua/product/MediumImages/6423075_0.jpg",
      "https://i1.foxtrot.com.ua/product/MediumImages/6423075_2.jpg"
    ]
  },
  {
    id: 8,
    name:  " iPad mini 5 Wi-Fi 256GB Silver",
    category: "Айпади",
    price: 21999,
    description:"Встроенная память, Гб\n" +
        "256\n" +
        "\n" +
        " Дисплей\n" +
        "7.9 \"\n" +
        "\n" +
        " Тип матрицы\n" +
        "IPS\n" +
        "\n" +
        " Разрешение, пикс\n" +
        "2048x1536",
    popular: false,
    imageUrls: [
      "https://i1.foxtrot.com.ua/product/MediumImages/6472207_0.jpg",
      "https://i1.foxtrot.com.ua/product/MediumImages/6472207_3.jpg"
    ]
  },
  {
    id: 9,
    name:  "  Apple MacBook Air 13.3'' MQD32",
    category: "Макбуки",
    price: 23999,
    description:"Диагональ дисплея\n" +
        "13.3 \"\n" +
        "\n" +
        " Разрешение дисплея\n" +
        "1400 х 900\n" +
        "\n" +
        " Тип матрицы\n" +
        "TN+film\n" +
        "\n" +
        " Базовая частота процессора\n" +
        "1.8 ГГц",
    popular: false,
    imageUrls: [
      "https://i1.foxtrot.com.ua/product/MediumImages/6515233_0.jpg",
      "https://i1.foxtrot.com.ua/product/MediumImages/6515233_1.jpg"
    ]
  },
  {
    id: 10,
    name:  " iMac Apple iMac 21.5",
    category: "Макентоші",
    price: 36999,
    description:"Виробник процесора\n" +
        "Intel\n" +
        "Модель центрального процесора\n" +
        "Core i5\n" +
        "Кількість ядер\n" +
        "2 ядра\n" +
        "Частота центрального процесора\n" +
        "2,3 (3,6) ГГц",
    popular: false,
    imageUrls: [
      "https://cdn.comfy.ua/media/catalog/product/cache/5/thumbnail/395x554/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_imac_apple_imac_21.5_mmqa2uaa.jpg",
      "https://cdn.comfy.ua/media/catalog/product/cache/5/thumbnail/395x554/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_imac_apple_imac_21.5_mmqa2uaa_3.jpg"
    ]
  },
  {
    id: 11,
    name:  " iMac Apple NEW iMac 21.5\" Retina 4K ",
    category: "Макентоші",
    price: 57999,
    description:"Виробник процесора\n" +
        "Intel\n" +
        "Модель центрального процесора\n" +
        "Core i5\n" +
        "Кількість ядер\n" +
        "6 ядер\n" +
        "Частота центрального процесора\n" +
        "3,0 (4,1) ГГц",
    popular: false,
    imageUrls: [
      "https://cdn.comfy.ua/media/catalog/product/cache/5/thumbnail/395x554/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_new_imac_retina_4k_01_01_1.jpg",
      "https://cdn.comfy.ua/media/catalog/product/cache/5/thumbnail/395x554/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_new_imac_retina_4k_01_03_1.jpg"
    ]
  },
  {
    id: 12,
    name:  "  iPhone 8 64GB Space Gray ",
    category: "Айфони",
    price: 14299,
    description:"Диагональ дисплея\n" +
        "4.7 \"\n" +
        "\n" +
        " Матрица\n" +
        "IPS\n" +
        "\n" +
        " Оперативная память\n" +
        "2048 Мб\n" +
        "\n" +
        " Встроенная память\n" +
        "64 Гб",
    popular: false,
    imageUrls: [
      "https://i1.foxtrot.com.ua/product/MediumImages/6363117_0.jpg",
      "https://i1.foxtrot.com.ua/product/MediumImages/6363117_3.jpg"
    ]
  },
  {
    id: 13,
    name:  "  iPad 10.2\" 2019 32GB Wi-Fi + Cellular Space gray",
    category: "Айпади",
    price: 15999,
    description:"Оперативная память, Мб\n" +
        "3072\n" +
        "\n" +
        " Встроенная память, Гб\n" +
        "32\n" +
        "\n" +
        " Дисплей\n" +
        "10.2 \"\n" +
        "\n" +
        " Тип матрицы\n" +
        "IPS",
    popular: false,
    imageUrls: [
      "https://i1.foxtrot.com.ua/product/MediumImages/6510906_0.jpg",
      "https://i1.foxtrot.com.ua/product/MediumImages/6510906_2.jpg"
    ]
  },
  {
    id: 14,
    name:  "Satechi USB-C Multi-Port MX, Space Gray (ST-UCMXAM)",
    category: "Аксессуары для MAC",
    price: 5799,
    description: `Розкрийте весь потенціал вашої установки M1 із багато портовим адаптером MX Satechi USB-C. Потужний, але водночас ультратонкий, адаптер має два роз'єми 4K HDMI, Gigabit Ethernet, зарядку USB-C PD, дані USB-C, дані USB-A, пристрої читання SD-карт та порт аудіо роз'єму – і все це з використанням лише одного USB-C. порт. Завдяки можливостям роботи з двома дисплеями, безлічі портів даних та сучасному алюмінієвому дизайну M1 нарешті зустрів гідного суперника.`,
    popular: true,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/usb-c-multiport-mx-adapter-multi-ports-hubs-adapters-satechi-111822_1024x.500x500.jpg.pagespeed.ce.k2j_Djyefv.jpg",
      "https://www.ipeople.in.ua/files/products/usb-c-multiport-mx-adapter-multi-ports-hubs-adapters-satechi-598717_1024x.800x600w.jpg"
    ]
  },
  {
    id: 15,
    name:  "Кабель FuseChicken Cable USB-C to USB-C Armour 2m (SCC2)",
    category: "Аксессуары для MAC",
    price: 1558 ,
    description: `Як же набридли недовговічні кабелі для телефонів. Неймовірна кількість коштів, часу та нервів йде на підбір більш-менш довговічного перехідника. Але з придбанням FuseChicken USB-C Cable to USB-C Armour 2m (C2) ця проблема забудеться на все життя. Це останній кабель, який ти купуєш.`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/1053485.500x500.jpeg.pagespeed.ce.KyfjPb25Xw.jpg",
      "https://www.ipeople.in.ua/files/products/663268.800x600w.jpeg"
    ]
  },
  {
    id: 16,
    name:  "Рюкзак Incase Compass BackPack for MacBook, Black",
    category: "Аксессуары для MAC",
    price: 2799 ,
    description: `Incase Compass Backpack Flight Nylon – універсальний міський рюкзак, який зможе супроводжувати вас і у повсякденних справах, і під час відпочинку на природі. Великий основний відсік вміщує та зручно організує ваші документи, техніку та інші предмети першої необхідності за допомогою спеціальних кишеньок-органайзерів для аксесуарів. Спеціальне відділення з підкладкою з м'якої тканини підійде для перенесення MacBook Pro 15" або другого ноутбука з аналогічною діагоналлю екрана. Також рюкзак має фронтальну кишеню для швидкого доступу до дрібниць.`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/Screenshot_1_36.500x500.jpg.pagespeed.ce.KElZfWS8Yv.jpg",
      "https://www.ipeople.in.ua/files/products/Screenshot_6_13.800x600w.jpg"
    ]
  },
  {
    id: 17,
    name:  "Satechi Aluminum Type-C Multimedia Adapter Silver",
    category: "Аксессуары для MAC",
    price: 4199 ,
    description: `Адаптер Satechi Aluminum Type-C Multimedia Adapter додає безліч підключень до ноутбука або настільного комп'ютера, просто використовуючи один порт Type-C. Додайте 4K HDMI, 4K mini DisplayPort, наскрізну зарядку, Ethernet, три порти USB 3.0 та слоти для SD та Micro SD карт.`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/SATECHI_Multiport_V2_silver_6.500x500.jpg.pagespeed.ce.xoSprzzarV.jpg",
      "https://www.ipeople.in.ua/files/products/SATECHI_Multiport_V2_silver_1_2.800x600w.jpg"
    ]
  },
  {
    id: 18,
    name:  "Sony WF-1000XM4 Wireless Noise Cancelling Headphones, Black",
    category: "Акустика",
    price: 11133 ,
    description: `Sony WF-1000XM4 – фірмові TWS-наушники в стильному дизайні, орієнтовані на повседневне використання в умовах шумного мегаполісу або продовження подорожі. Для ANS-шумоподавлення Sony WF-1000XM4 відповідає інтегрований процесор V1, за якістю звучання – 6-міліметрові драйвери з кодеком LDAC і технологією DSEE Extreme. 7,3-грамова вакуумна конструкція з внутрішньоканальним кріпленням і закритим акустичним оформленням наділеної водонепроникністю за стандартом IPX4, а також здатна забезпечити сумарно до 24 годин автономної роботи.`,
    popular: true,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/Sluchawki-dokanalowe-SONY-WF-1000XM4-Czarny-front.500x500.jpeg.pagespeed.ce.ro17cp08Iv.jpg",
      "https://www.ipeople.in.ua/files/products/%20i-sony-wf-1000xm4-czarny.800x600w.jpg"
    ]
  },
  {
    id: 19,
    name:  "BL Tune 710BT, White",
    category: "Акустика",
    price: 1999 ,
    description: `Звукова технологія JBL Pure Bass забезпечує ідеальний звук для бездротових навушників JBL TUNE 710BT. Легка конструкція корпусу забезпечує максимальний комфорт і дозволяє повністю зануритися у світ звуку. Потужні навушники, які можна скласти до компактного розміру і взяти з собою в будь-яку пригоду. Приймайте дзвінки та керуйте навушниками без допомоги рук за допомогою зручної кнопки на чашці навушника, яка також активує голосових помічників, щоб допомогти у подорожі`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/51sGrckGxEL._AC_SX679_.500x500.jpg",
      "https://www.ipeople.in.ua/files/products/51mMQZhxoYL._AC_SX679_.800x600w.jpg"
    ]
  },
  {
    id: 20,
    name:  "Beats Studio 3 Black Red Ten Years Edition",
    category: "Акустика",
    price: 8760 ,
    description: `Безпровідні наушники Beats Studio3 забезпечують чудову якість прослуховування завдяки технології Pure Active Noise Canceling (Pure ANC). Pure ANC від Beats активно блокує зовнішні шуми та використовує калібрівку звуку в реальному часі для збереження четкости, діапазону та емоцій. Вони постійно визначають зовнішні звуки для блокування, автоматично реагують на індивідуальну підгонку в режимі реального часу, оптимізують вихід звуку, щоб зберегти чудове якість прослуховування, як задумали виконавців.`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/MX422.500x500.jpeg.pagespeed.ce.IOaLoLQxXh.jpg",
      "https://www.ipeople.in.ua/files/products/MX422_AV3.800x600w.jpeg",
        "https://www.ipeople.in.ua/files/products/MX422_AV2.800x600w.jpeg"
    ]
  },
  {
    id: 21,
    name:  "OnePlus Buds Z2 Pearl White EU",
    category: "Акустика",
    price: 2999  ,
    description: `До 38 годин від одного повного заряду
Довгоочікувана подія – вихід на ринок нових повністю бездротових навушників OnePlus Buds Z2. Їхній головний плюс - загальний час роботи при використанні зарядного футляра становить 38 годин. 10-хвилинної зарядки вистачить на 5 годин роботи.`,
    popular: true,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/1-m00-52-17-rbpb6mgpuyeab3qvaae0ng9zpwm659.500x500.png",
      "https://www.ipeople.in.ua/files/products/1-m00-52-17-rbpb6mgpuymasqciaahbpsrqf7g030.800x600w.png",
      "https://www.ipeople.in.ua/files/products/1-m00-52-79-rbpbumgpuyiadqixaahpeqz6aze840.800x600w.png"
    ]
  },
  {
    id: 22,
    name:  "Водостійка наклейка  (Waterproof sticker) iPhone 4",
    category: "Запчастини",
    price: 18  ,
    description: `Водонепроникна наклейка iPhone 4 - це виріб, який клеїться під кришкою смартфона та захищає його від попадання всередину вологи та пилу.`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/stuff-certified-screen-repair-tape-waterproof-seal.500x500.jpg",
    ]
  },
  {
    id: 23,
    name:  "Роз'єм Сім карти (Sim-Card Holder Inside)",
    category: "Запчастини",
    price: 73  ,
    description: `Роз'єм сім карти iPhone 4 - це оригінальний довговічний роз'єм, який використовується для встановлення в нього стартового пакета.`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/sim-card-holder-inside-iphone-4-4s-kupit-v-ukraine-foto,P20,P282,P29-500x500.500x500.jpg.pagespeed.ce.sebV77Y9Ou.jpg",
    ]
  },
  {
    id: 24,
    name:   "Роз'єм тачскріна (Connector on Board for Touchscreen)",
    category: "Запчастини",
    price: 53,
    description: `Роз'єм тачскріна iPhone 4 - це оригінальний високоякісний конектор сенсорного екрана до смартфона.`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/4e0207d94b1b4.500x500.jpg",
    ]
  },
  {
    id: 25,
    name: "Компоненти для iPhone 4/4S",
    category: "Запчастини",
    price: 110,
    description: `Компоненти середньої частини для iPhone 4/4S - це набір різних елементів кріплення.Набір компонентів складається із 8 елементів різного призначення.`,
    popular: true,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/7893_enl.500x500.JPG.pagespeed.ce.r4ZZFjSGvV.jpg",
    ]
  },
  {
    id: 26,
    name: "Baseus Bipow Digital Display 15W 10000mAh, Black",
    category: "Зовнішні акумулятори (POWER BANK)",
    price: 986 ,
    description: `Bipow Digital Diplay – це нове покоління акумуляторів Bipow Power Bank. Компактний і, перш за все, ефективний - стане в нагоді, коли потрібна додаткова енергія. Підтримує швидку зарядку у стандарті Power Delivery 15W.`,
    popular: true,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/1-powerbank-baseus-bipow-15w-digital-display-10000mah-czarny-front.500x500.jpeg.pagespeed.ce.wSlKxfY03o.jpg",
      "https://www.ipeople.in.ua/files/products/2-powerbank-baseus-bipow-15w-digital-display-10000mah-czarny-lewy-bok.800x600w.jpeg",
      "https://www.ipeople.in.ua/files/products/BASEUS-BIPOW-15W-DIGITAL-DISPLAY-POWER-BANK-10000MAH-BLACK_%5B234497%5D_1200.800x600w.jpeg"
    ]
  },
  {
    id: 26,
    name: "YOYO 20000mAh with Type-C | Lightning | Micro-USB",
    category: "Зовнішні акумулятори (POWER BANK)",
    price: 1149 ,
    description: `При виборі портативної батареї слід звернути увагу на YoYo. Це компактний павербанк з невеликою вагою та ємністю 20000 mAh. Аксесуар здатний заряджати одночасно два і більше пристроїв. Завдяки своїй компактності можна розмістити у сумці чи кишені.

особливості:

Компактний розмір зручний для повсякденного користування.
Вбудовані 4 кабелі: USB - для зарядки PowerBank; Type-C, Micro-USB, Lightning – для заряджання Ваших пристроїв.
Вбудований ліхтарик.
`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/79085962108630.500x500.jpeg.pagespeed.ce.J_YjplK9G8.jpg"
    ]
  },
  {
    id: 27,
    name: "YOYO 20000mAh with Type-C | Lightning | Micro-USB",
    category: "Зовнішні акумулятори (POWER BANK)",
    price: 1549 ,
    description: `Мобільний акумулятор емкостью 20000 мАч призначений для живлення або зарядки мобільних пристроїв. Имеет порт USB, в комплекті є кабель micro USB, що дозволяє заряжати мобільний телефон. Состояние заряду PowerBank контролюється світлодіодами.

Додаткова батарея Blow Power Bank - пристрій, яке гарантує постійне перевантаження під час тривалих подорожей, відпочинок та ситуації, коли поруч з вами немає розетки.`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/81-116-1.500x500.jpg.pagespeed.ce.FGz44r_1jt.jpg"
    ]
  },
  {
    id: 28,
    name: "Griffin PowerBank 20000mAh",
    category: "Зовнішні акумулятори (POWER BANK)",
    price: 1799  ,
    description: `Griffin GP-149 - це павербанк здатний зарядити ваш смартфон до трьох разів, а завдяки силі зарядки до 15 Вт зробити це ще й дуже швидко. Заряджайте будь-які 3 пристрої за допомогою USB роз'єму Тип-А та Тип-С, які можуть працювати одночасно. Чотири лід індикатора сповіщають Вас про те, скільки заряду залишилося і коли настав час оновити рівень заряду, що можна зробити за допомогою USB роз'єму комп'ютера або пристрою виведення 5V. Якщо PowerBank не використовується протягом 32 секунд, тоді він автоматично вимкнеться/перейде в режим сну.`,
    popular: true,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%20%20%D0%BE%2016.39.15.500x500.png",
      "https://www.ipeople.in.ua/files/products/%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%20%20%D0%BE%2016.39.21.800x600w.png",
      "https://www.ipeople.in.ua/files/products/2022-05-09%2016.19.36.800x600w.jpg"
    ]
  },
  {
    id: 29,
    name: "LAUT Shield Enduro for iPad Air 10.9” / iPad Pro 11” (2021/2020/2018)",
    category: "Чехли для IPAD",
    price: 1509  ,
    description: `SHIELD ENDURO має удароміцну силіконову зовнішню оболонку, яка розсіює удари від вашого пристрою, та міцний полікарбонатний передній та задній внутрішній сердечник. Якщо є щось, що цей кейс вміє робити, то це виживати!`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/LAUT-SHIELD-ENDURO-iPad-Air-4-iPad-Pro-11-2018-2020-2021-Blue-1-1000x1000.500x500.jpeg.pagespeed.ce.fhhuiXemgX.jpg",
        "https://www.ipeople.in.ua/files/products/LAUT-SHIELD-ENDURO-iPad-Air-4-iPad-Pro-11-2018-2020-2021-Blue-2-1000x1000.800x600w.png",
        "https://www.ipeople.in.ua/files/products/LAUT-SHIELD-ENDURO-iPad-Air-4-iPad-Pro-11-2018-2020-2021-Blue-3-1000x1000.800x600w.png"
    ]
  },
  {
    id: 30,
    name: "Apple Smart Folio for iPad Pro 12.9 5th Gen, English Lavender",
    category: "Чехли для IPAD",
    price: 780  ,
    description: `Apple Smart Folio - це співвідношення елегантного мінімалізму та посиленого захисту. Практичний дизайн чохла забезпечує надійний захист задньої панелі планшета та його дисплея. Виготовлений у формі фоліо, цей чохол захищає корпус iPad Pro 12.9" від затертостей, подряпин та різних зовнішніх впливів, що дозволить надовго зберегти його первісний вигляд.`,
    popular: true,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/MM6P3-1000x1000.500x500.jpeg",
      "https://www.ipeople.in.ua/files/products/MNA63_AV2.800x600w.jpeg"
    ]
  },
  {
    id: 31,
    name: "Wiwu Waltz Rotative Case for iPad 10.2, Dark Green\n",
    category: "Чехли для IPAD",
    price: 1200  ,
    description: `WiWU Waltz Rotative iPad Case – зручний варіант для транспортування, захисту та використання Вашого iPad 10.2. Чохол WiWU Waltz з кількома кутами огляду забезпечує свободу, необхідну для читання, перегляду фільмів, набору тексту або здійснення відеодзвінків.`,
    popular: true,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/apple-ipad-102-2021-9nesil-kilif-nayn-donebilen-standli-kilif-ipad-102-2021-9nesil-zore-196703-19-B.500x500.jpeg",
      "https://www.ipeople.in.ua/files/products/%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%20%20%D0%BE%2012.49.25.800x600w.png"
    ]
  },
  {
    id: 32,
    name: "Armorstandart Smart Case для iPad Mini 6, White (ARM60283)",
    category: "Чехли для IPAD",
    price: 767  ,
    description: `ArmorStandart Smart Case забезпечує надійний захист вашого планшета від будь-яких видів пошкоджень. Основною перевагою чохлів цього типу є захист дисплея пристрою. Саме на цій частині планшета подряпини та сколи створюють негативне враження від використання.

Функція Wake/Sleep, реалізована за допомогою магнітів, дозволяє значно продовжити використання планшета на одному заряді батареї за рахунок зниження використання екрану.

М'яка мікрофібра, з якої складається внутрішня оболонка чохла ArmorStandart, забезпечує додатковий захист від попадання пилу та сміття, а відповідно і від утворення нових дрібних подряпин на пристрої.`,
    popular: false,
    imageUrls: [
     "https://www.ipeople.in.ua/files/products/Screenshot_4_131.500x500.jpg.pagespeed.ce.f_W9lqlCh3.jpg"
    ]
  },
  {
    id: 33,
    name: "Baseus GaN 2 Pro Quick Charger 100W (2Type C + 2USB), White",
    category: "Зараядні пристрої",
    price: 2099 ,
    description: `Універсальні роз'єми Type-C та USB дають можливість підключати до живлення продукти Apple, Samsung, Xiaomi, Huawei, а також іншу мобільну електроніку – просто підключіть відповідний кабель. Порти Type-C розвивають потужність до 100 Вт, тому підключивши лише один шнур, Ви швидко зарядите ноутбук. При підключенні до 4 пристроїв одночасно отримавши сумарний вихід потужності 95-98 Вт.
Підтримує різні протоколи швидкого заряджання, таких як PD 3.0 і QC 3.0, що дозволить відновити заряд батареї в 3 рази швидше, ніж зі стандартним ЗУ. Наприклад, iPhone 12 заряджається на 50% лише за 30 хвилин.`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/baseus-gan2-pro-quick-charger-2c-2u-100w-eu-white.500x500.jpeg.pagespeed.ce.LXxZa-g2bZ.jpg",
      "https://www.ipeople.in.ua/files/products/1baseus-gan2-pro-quick-charger-2c-2u-100w-eu-white.800x600w.jpeg"
    ]
  },
  {
    id: 34,
    name: "Power Adapter Apple 67W (MKU63ZM/A)\n",
    category: "Зараядні пристрої",
    price: 2799 ,
    description: `Адаптер живлення Apple USB-C потужністю 96 Вт дозволяє швидко та ефективно підзарядити пристрій вдома, в офісі або у дорозі. Його можна використовувати з будь-яким пристроєм, важливо відзначити, що у деяких гаджетів може трохи прискориться знос батареї. Найбільш сумісний з MacBook: MacBook Air (M1, 2020); MacBook Air (Retina, 13-inch, 2020); MacBook Air (Retina, 13-inch, 2018 – 2019); MacBook Pro (14-inch, 2021); MacBook Pro (13-inch, M1, 2020); MacBook Pro (13-inch, 2020); MacBook Pro (13-inch, 2016 – 2019); MacBook (Retina, 12-inch, Early 2015 – 2017)`,
    popular: true,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/96_4000.500x500.jpeg.pagespeed.ce.-Tc-PfFz1d.jpg",
      "https://www.ipeople.in.ua/files/products/813513_zoom.800x600w.jpeg"
    ]
  },
  {
    id: 35,
    name: "Baseus Compact Quick Charger 20W QC+PD(Type C+USB), White\n",
    category: "Зараядні пристрої",
    price: 450 ,
    description:`Baseus Compact Quick Charger 20W - швидкий зарядний пристрій з двома портами: USB-A + Type C і підтримкою Apple Power Delivery. Простий, недорогий та потужний адаптер, який повноцінно замінить оригінальну зарядку смартфона або стане додатковим, запасним зарядним пристроєм для дому, роботи та подорожей`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/eng_pl_Baseus-Compact-Quick-Charger-USB-USB-C-20W-white-21020_7.800x600.jpeg",
      "https://www.ipeople.in.ua/files/products/eng_pl_Baseus-Compact-Quick-Charger-USB-USB-C-20W-white-21020_6.800x600w.jpeg"
    ]
  },
  {
    id: 36,
    name: "Baseus Compact Quick Charger 20W QC+PD(Type C+USB), Black\n",
    category: "Зараядні пристрої",
    price: 300 ,
    description:`Baseus Compact Quick Charger 20W - швидкий зарядний пристрій з двома портами: USB-A + Type C і підтримкою Apple Power Delivery. Простий, недорогий та потужний адаптер, який повноцінно замінить оригінальну зарядку смартфона або стане додатковим, запасним зарядним пристроєм для дому, роботи та подорожей`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/eng_pl_Baseus-Compact-Quick-Charger-USB-USB-C-20W-black-21019_7.500x500.jpeg.pagespeed.ce.p4cFznBO9Z.jpg",
      "https://www.ipeople.in.ua/files/products/eng_pl_Baseus-Compact-Quick-Charger-USB-USB-C-20W-black-21019_7.500x500.jpeg.pagespeed.ce.p4cFznBO9Z.jpg"
    ]
  },
  {
    id: 37,
    name: "Baseus Tungsten Gold Type C to Type C 100W 1m Cable, Black\n",
    category: "Кабелі і перехідники",
    price: 395 ,
    description:`Кабель підтримує протоколи швидкого заряджання та підходить для різних типів пристроїв: смартфонів, ноутбуків, ігрової консолі тощо. Вихідна потужність може досягати 100 Вт, що дозволяє зарядити MacBook приблизно за 2 години.`,
    popular: true,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%20%20%D0%BE%2012.59.35.500x500.png",
      "https://www.ipeople.in.ua/files/products/%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%20%20%D0%BE%2013.00.01.800x600w.png"
    ]
  },
  {
    id: 38,
    name: "Apple Lightning to USB 1m Cable (MXLY2) (UA UCRF)",
    category: "Кабелі і перехідники",
    price: 799 ,
    description:`Використовуйте Lightning USB кабель для заряджання та синхронізації Вашого iPhone, iPod або iPad з новим Lightning роз'ємом підключивши до Mac OS або Windows PC.`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/60_4000.500x500.jpeg.pagespeed.ce.2tKHQptJJp.jpg",
    ]
  },
  {
    id: 39,
    name: "Baseus Multiport Superlative USB-C to 3xUSB3.0+HDMI-4K+SD/TF Card Reader+USB-C, Grey\n",
    category: "Кабелі і перехідники",
    price: 999 ,
    description: `Підключайте Baseus Multiport Superlative через вхід USB Type C до 6 пристроїв. Хаб має 3 універсальні високоефективні порти USB 3.0 5 Гбіт/с, 1 відеоінтерфейс HDMI 4K HD, зарядку PD потужністю 60 Вт і порти для карток SD/TF. Підключайте та працюйте без потреб у драйверах або програмному забезпеченні. Ідеально підходить для Macbook Air/Pro або інших гаджетів, де є порт USB-C.`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%20%20%D0%BE%2018.49.32.500x500.png",
    ]
  },
  {
    id: 40,
    name: "McDodo OT-8730 USB C to USB 3.0, Deep Grey\n",
    category: "Кабелі і перехідники",
    price: 189  ,
    description: `З компактним і простим адаптером McDodo (OT-8730) сумісність різних девайсів і різних роз'ємів більше вас не хвилюватиме. Він дозволяє підключати кабелі з USB 3.0 портом до пристроїв з інтерфейсом USB Type-C та швидко передавати великі обсяги даних. Також виконує роль адаптера OTG для мобільних пристроїв. Тому цей аксесуар стане в нагоді будь-якому власнику сучасних смартфонів та інших гаджетів.`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/Screenshot_1_228.500x500.jpg.pagespeed.ce.9Y5zRm2N7D.jpg",
    ]
  },
  {
    id: 41,
    name: "Doberman Premium Anti Peel Screen Protector 5D for iPhone 13 Pro Max\n",
    category: "Захисні плівки і стікло",
    price: 749   ,
    description: `Прозорість - близька до 100%, забезпечує кристально чисте зображення і не має жодного впливу на зображення, що передається. Забезпечує бездоганну чутливість сенсорного екрана. Супер захист екрану, твердий поверхневий шар може запобігати появі тріщин, відколів, попадання вологи та інші пошкодження, при цьому зберігаючи ваш екран абсолютно новим.`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/6041588986.500x500.jpg.pagespeed.ce.jQ_nDc-Uqi.jpg",
    ]
  },
  {
    id: 42,
    name: "Armor Glass for iPad Mini 6\n",
    category: "Захисні плівки і стікло",
    price: 550 ,
    description: `Надміцне, ультратонке та абсолютно прозоре захисне скло забезпечить збереження екрану вашого планшета. Протектор із загартованого скла принципово відрізняється від традиційних захисних плівок і перевершує їх за цілим рядом ключових характеристик:

Захисний екран виготовлений з надміцного загартованого скла, надтонкий, не впливає на чутливість сенсора.`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/Screenshot_4_135.500x500.jpg.pagespeed.ce.s2yOwXfBb4.jpg",
    ]
  },
  {
    id: 43,
    name: "iLera DeLuxe Incognito FullCover Glass for iPhone 13/13 Pro\n",
    category: "Захисні плівки і стікло",
    price: 1150 ,
    description: ``,
    popular: true,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/photo_2021-10-21_19-25-36.500x500.jpg.pagespeed.ce.lhMIY1z8HM.jpg",
    ]
  },
  {
    id: 44,
    name: "ZK Protection Glass for iPhone 13 Pro Max Full Silk Screen 0.26mm + Back Film, Black\n",
    category: "Захисні плівки і стікло",
    price: 800 ,
    description: ``,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/photo_2021-10-12_15-45-21_1.500x500.jpg.pagespeed.ce.nlbyvTo9xx.jpg",
    ]
  },
  {
    id: 45,
    name: "Bombata Evolution Bag for MacBook 13/14, Black (E00829 4)\n",
    category: "Аксессуары для MAC",
    price: 2109 ,
    description: `Сумка серії Bombata Evolution це стильна сумка з преміальної італійської PU шкіри для ноутбуків з діагоналлю екрану до 14”. Сумка має досить великий об'єм та безліч відділень для зберігання ноутбука, планшета, телефону, документів та аксесуарів. Модель має три великі внутрішні відділення і внутрішню кишеню, що закривається на замок-блискавку.`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/Bombata-Evolution-Black-1-1000x1000.500x500.jpeg",
    ]
  },
  {
    id: 46,
    name: "Satechi Type-C to 4K HDMI Cable Space Gray (ST-CHDMIM)\n",
    category: "Аксессуары для MAC",
    price: 1649  ,
    description: `Кабель Satechi Type-C до 4K HDMI Cable був розроблений з урахуванням прямого підключення до монітора або проектора без додаткових перехідників. Переносьте зображення вашого пристрою з високою роздільною здатністю до 4K 60 Гц. Якість збирання забезпечує надійне з'єднання.`,
    popular: true,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%20%20%D0%BE%2011.36.03.500x500.png",
    ]
  },
  {
    id: 47,
    name: "Beats Solo Pro Wireless Headphones Red\n",
    category: "Акустика",
    price: 8760  ,
    description: `Приймайте дзвінки, перемикайте композиції та регулюйте гучність прямо з навушників. Акселерометр з функцією розпізнавання мови та два спрямованих мікрофони розпізнають ваш голос і відфільтровують зовнішні шуми, забезпечуючи неперевершену якість звуку під час телефонних розмов. Технологія Bluetooth Class 1 забезпечує збільшену зону сигналу та надійність підключення.`,
    popular: true,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/1022931_zoom.800x600w.jpeg",
    ]
  },
  {
    id: 48,
    name: "Beats Studio 3 Wireless Over-Ear Headphones, Forest Green\n",
    category: "Акустика",
    price: 5200   ,
    description: `Чудовий звук

Бездротові навушники Beats Studio3 забезпечують чудову якість прослуховування завдяки технології Pure Active Noise Canceling (Pure ANC). Pure ANC від Beats активно блокує зовнішні шуми та використовує калібрування звуку в реальному часі для збереження чіткості, діапазону та емоцій. Вони постійно визначають зовнішні звуки для блокування, автоматично реагуючи на індивідуальне підганяння в режимі реального часу, оптимізуючи виведення звуку, щоб зберегти чудову якість прослуховування, як задумали виконавці.`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/511jROXAeyL._AC_SL1000_.500x500.jpg.pagespeed.ce.Xu6T2fGBlv.jpg",
    ]
  },
  {
    id: 49,
    name: "Beats Studio 3 Wireless Over-Ear Headphones, Forest Green\n",
    category: "Акустика",
    price: 3650 ,
    description: `Відкрийте для себе Samsung Galaxy Buds Live з активним шумом придушення і надтривалим часом автономної роботи до 29 годин. На додаток до кришталево чистого звуку та тривалого часу автономної роботи, за допомогою Samsung Galaxy Buds Live також можна здійснювати дзвінки. Мікрофон фокусується на вашому голосі, тому вас завжди чути де б ви не знаходилися. При використанні швидкого заряджання Samsung Galaxy Buds Live можна зарядити за 3 хвилини.`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%20%20%D0%BE%2014.48.30.500x500.png",
    ]
  },
  {
    id: 50,
    name: "Аккумулятор (Battery) iPhone 5S (Original)\n",
    category: "Запчастини",
    price: 292 ,
    description: `Якщо Ваша батарея стала частіше розряджатися, Вам стало не вистачати часу роботи Вашого iPhone 5S або телефон взагалі перестав тримати заряд, тоді Вам необхідна заміна акумулятора.

В інтернет магазині iPeople Ви можете придбати якісну комплектуючу деталь та замінити її самостійно, за умови, що Ви маєте необхідний досвід.

Також Ви можете скористатися послугами наших сервісних центрів і наші фахівці проведуть надійну заміну або ремонт у найкоротші терміни.`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/18f6e2cee13662331004058f9e638951.800x600.JPG",
    ]
  },
  {
    id: 51,
    name: "LCD for iPhone 7 (Слойка)",
    category: "Запчастини",
    price: 1643  ,
    description: `Дисплей LCD+Touchscreen для iPhone 7 – це хороший контрастний дисплей, діагональ якого становить 4.7 дюйма. У комплекті постачання – міцне сенсорне скло.`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/iphone-7-lcd-touch-screen-assembly-black-factory-ultra-premium-24.500x500.gif.pagespeed.ce.ZT-5we6OR_.gif",
    ]
  },
  {
    id: 52,
    name: "Корпус (Housing) iPhone SE Gold\n",
    category: "Запчастини",
    price: 548  ,
    description: `Корпус iPhone SE використовується для прикраси смартфона та для його захисту.

При тривалій роботі зі смартфоном трапляється, що корпус iPhone SE може зашкодити. Так, через удари або падіння на ньому з'являються подряпини і сколи, тріщини і потертості. Корпус у такому стані зовсім не виглядає ефектно, та й не може добре захистити айфон.

Ми допоможемо повернути Вашому смартфону колишній лоск: для цього потрібна заміна корпусу iPhone SE.

Представлений корпус не люфтит, має чудову збірку, відрізняється стійким покриттям.`,
    popular: true,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/zadnyaya_kryshka_korpus_iphone_6_zolotaya.500x500.jpg.pagespeed.ce.yB2lETJnqT.jpg",
    ]
  },
  {
    id: 53,
    name: "Momax iPower GO Mini 8400 mAh",
    category: "Зовнішні акумулятори (POWER BANK)",
    price: 1241,
    description: `Momax iPower GO Mini 8400 mAh - це чудовий помічник для любителів подорожувати. Завдяки цьому аксесуару Ви більше не залежатимете від електричної розетки. Солідної ємності в 8400мАч достатньо для кількох повноцінних зарядок мобільного телефону або смартфона. Сили струму в 2.4А достатньо навіть для того, щоб запитати планшетний комп'ютер. Індикація рівня заряду iPower Go mini реалізована у вигляді декількох точок, що світяться в корпусі, які можна побачити, якщо струсити пристрій.`,
    popular: false,
    imageUrls: [
        "https://www.ipeople.in.ua/files/products/light-blue2.800x600.800x600w.jpg"
    ]
  },
  {
    id: 54,
    name: "Momax iPower GO Mini 8400 mAh",
    category: "Зовнішні акумулятори (POWER BANK)",
    price: 2399,
    description: `Moshi IonGo 5K Portable Battery – ця стильна портативна батарея оснащена вбудованими кабелями Lightning та USB-C, тому вам більше не доведеться турбуватися про те, щоб брати із собою додаткові кабелі. Місткість 5000 мАг дозволяє заряджати ваш смартфон протягом усього дня, а магнітна кришка з веганів шкіри акуратно ховає кабелі, коли вони не використовуються.`,
    popular: true,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/2592053865.500x500.jpg.pagespeed.ce.-ZU0tACU0O.jpg"
    ]
  },
  {
    id: 55,
    name: "Apple MagSafe Battery Pack (MJWY3)",
    category: "Зовнішні акумулятори (POWER BANK)",
    price: 3103,
    description: `Компанія Apple представила зовнішній акумулятор MagSafe, який кріпиться до iPhone одним дотиком. Аксесуар MagSafe Battery Pack розроблений для iPhone 12, iPhone 12 mini, iPhone 12 Pro та iPhone 12 Pro Max. Ідеально вирівняні магніти утримують його на iPhone, забезпечуючи безпечну та надійну бездротову зарядку.

 

Вбудовані магніти фіксують акумулятор на задній панелі смартфона та виконується бездротова зарядка. Apple рекомендує використовувати для заряджання MagSafe Battery Pack адаптер живлення USB-C потужністю 20 Вт або вище та кабель USB-C/Lightning, які продаються окремо.`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/Screenshot_5_37.500x500.jpg.pagespeed.ce.JqaPN2tvnL.jpg"
    ]
  },
  {
    id: 56,
    name: "Armorstandart Smart Case для iPad Mini 6, Red (ARM60279)\n",
    category: "Чехли для IPAD",
    price: 599  ,
    description: `ArmorStandart Smart Case забезпечує надійний захист вашого планшета від будь-яких видів пошкоджень. Основною перевагою чохлів цього типу є захист дисплея пристрою. Саме на цій частині планшета подряпини та сколи створюють негативне враження від використання.

Функція Wake/Sleep, реалізована за допомогою магнітів, дозволяє значно продовжити використання планшета на одному заряді батареї за рахунок зниження використання екрану.

М'яка мікрофібра, з якої складається внутрішня оболонка чохла ArmorStandart, забезпечує додатковий захист від попадання пилу та сміття, а відповідно і від утворення нових дрібних подряпин на пристрої.`,
    popular: true,
    imageUrls: [
        "https://www.ipeople.in.ua/files/products/Screenshot_2_195.500x500.jpg.pagespeed.ce.o6DmCWU5yX.jpg"
    ]
  },
  {
    id: 57,
    name: "Armorstandart Smart Case для iPad Mini 6, Red (ARM60279)\n",
    category: "Чехли для IPAD",
    price: 1129 ,
    description: ``,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/Screenshot_7_42.500x500.jpg.pagespeed.ce.BMYzyZm4FA.jpg"
    ]
  },
  {
    id: 58,
    name: "LAUT Prestige Folio for iPad Pro 12.9 (2021/2020/2018)with Pencil Slot, Brown",
    category: "Чехли для IPAD",
    price: 1409  ,
    description: `Протиударний чохол-книжка LAUT PRESTIGE FOLIO подарує вашому iPad Air (4th generation) / iPad Pro 11” (2018 /

2020/2021) найнадійніший захист при падіннях або ударах. LAUT PRESTIGE FOLIO - це один з найнадійніших захисних чохлів.`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/LAUT-PRESTIGE-FOLIO-iPad-Pro-12-9-Tan-Brown-,P28L_IPP21L_PR_BR,P29-1-1000x1000.500x500.jpg.pagespeed.ce.UZogIYgpsW.jpg"
    ]
  },
  {
    id: 59,
    name: "Satechi 100W USB-C PD Compact Gan Charger, Space Gray (ST-TC100GM-EU)\n",
    category: "Зараядні пристрої",
    price: 2999  ,
    description: `Перейдіть на зарядку наступного покоління за допомогою компактного зарядного пристрою GaN Satechi USB-C PD потужністю 100 Вт із потужною технологією нітриду галію (GaN) для помітно більш швидкої та ефективної зарядки. Оснащений двома портами USB-C PD та портом USB-A, зарядний пристрій об'єднує три адаптери та інтелектуально регулює вихідну потужність залежно від підключених пристроїв – до 100 Вт.`,
    popular: false,
    imageUrls: [
        "https://www.ipeople.in.ua/files/products/%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%20%20%D0%BE%2012.24.04.500x500.png"
    ]
  },
  {
    id: 60,
    name: "Zens Single Aluminium Wireless Charger with 18W USB-C PD Wall Charger, Black (ZESC14B/00)\n",
    category: "Зараядні пристрої",
    price: 1499  ,
    description: `Компактний бездротовий зарядний пристрій є чудовим варіантом для того, щоб не залежати від кабелів. Заряджайте кілька гаджетів одночасно, не використовуючи багато шнурів для кожного пристрою. Невеликий розмір Zens Single Aluminium Wireless Charger чудово впишеться в будь-який інтер'єр, при цьому виконає свою головну функцію.`,
    popular: true,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%20%20%D0%BE%2017.23.42.500x500.png"
    ]
  },
  {
    id: 61,
    name: "Pitaka MagEZ Juice 2, Twill Black/Blue (MJ2005)\n",
    category: "Зараядні пристрої",
    price: 2999  ,
    description: `Акумулятор MagEZ Juice 2 швидко заряджає телефон. Більше не доведеться носити з собою великий та незручний блок живлення та кабель від нього. Пристрій працює дуже просто. Перебуваючи вдома або на роботі, закріпіть смартфон до магнітного зарядника. Ваш мобільник і портативний акумулятор будуть заряджатися, поки ви зайняті важливими справами. Зарядка смартфона в дорозі теж не проблема. Не треба йти додому: просто витягніть магнітний блок живлення. Для зручності використання акумулятора є чохол MagEZ.`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/13278-876juice2-blue-1_1024x1024.1800x1800.500x500.png.pagespeed.ce.lxjGBjDNeG.png"
    ]
  },
  {
    id: 62,
    name: "Pitaka MagEZ Juice 2, Twill Black/Blue (MJ2005)\n",
    category: "Камери",
    price: 14600  ,
    description: `Неперевершена швидкість і неперевершена простота тепер у найпотужнішій GoPro. Завдяки новому революційному процесору GP2 камера HERO10 Black знімає відео 5,3K з подвоєною частотою кадрів, фотографії з роздільною здатністю 23 МП, покращену продуктивність при слабкому освітленні та революційну стабілізацію відео HyperSmooth 4.0 у всіх режимах. Крім того, HERO10 підключається до хмари, тому в той момент, коли ви її заряджаєте, знятий матеріал автоматично завантажується в хмару.`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/20_4000.500x500.jpeg.pagespeed.ce.Vu0Xkt2IK_.jpg"
    ]
  },
  {
    id: 63,
    name: "GoPro HERO9 Black (CHDHX-901-RW)",
    category: "Камери",
    price: 12410   ,
    description: `Зустрічайте нову екшн-камеру GoPro HERO 9 Black, яка стала кращою у всьому, щоб ви змогли легко запам'ятати свої найзапашніші моменти та поділитися ними з рештою. Вона оснащена покращеною матрицею 23,6 Мп для зйомки чудових відео в 5K та чітких фото. А також новим переднім екраном! Крім того, дев'яте покоління GoPro HERO пропонує новий набір інтелектуальних функцій, підтримує прямі трансляції та режим веб-камери. Просто робіть те, що вам подобається, а HERO 9 подбає, щоб все було знято у кращому вигляді.`,
    popular: true,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/hero9__3_.500x500.jpg.pagespeed.ce.uSOeXrdsLu.jpg"
    ]
  },
  {
    id: 64,
    name: "GoPro Fusion (CHDHZ-103)",
    category: "Камери",
    price: 13104 ,
    description: `Нова екшн-камера GoPro – це не просто розвиток лінійки екшн-камер, це новий гаджет з колосальними можливостями!`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/1524677509000_IMG_975900.500x500.jpg.pagespeed.ce.kJL5b59WnA.jpg"
    ]
  },
  {
    id: 65,
    name: "WIWU iPaper Paper-Like Screen Protector for iPad Pro 12.9",
    category: "Захисні плівки і стікло",
    price: 548 ,
    description:  ``,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/plenka-wiwu-ipaper-paper-like-for-ipad-12.9-2018-2020.html-92499316546792.500x500.jpg.pagespeed.ce.vN-ICylrkh.jpg"
    ]
  },
  {
    id: 66,
    name: "Doberman Premium Screen Protector 5D for iPhone 12 Pro Max",
    category: "Захисні плівки і стікло",
    price: 649 ,
    description:  ``,
    popular: true,
    imageUrls: [
        "https://www.ipeople.in.ua/files/products/woodcessories-curved-tempered-glass-3d-iphone-1212-pro-kupit_1.1000x.500x500.jpg.pagespeed.ce.tcDeISTi-y.jpg"
    ]
  },
  {
    id: 66,
    name: "Doberman Premium Anti Peep Screen Protector 5D for iPhone 11 Pro Max/Xs Max",
    category: "Захисні плівки і стікло",
    price: 599 ,
    description:  ``,
    popular: false,
    imageUrls: [
        "https://www.ipeople.in.ua/files/products/2020-11-23,P2016.02.09.500x500.jpg.pagespeed.ce.rUJvW4ZmrT.jpg"
    ]
  },
  {
    id: 67,
    name: "BASEUS OTG Type-C to USB black",
    category: "Кабелі і перехідники",
    price: 160 ,
    description:  `Даний адаптер стане чудовим рішенням для заряджання сучасних смартфонів та планшетів від пристроїв, у яких відсутній роз'єм MicroUSB. Baseus MicroUSB/USB-C Adapter має мініатюрні розміри, що забезпечує не тільки зручність зберігання, але й гарантує підвищену міцність завдяки відсутності дротів. Корпус адаптера виконаний з алюмінію, а розміри хоч і невеликі, але не викликають труднощів у підключенні до комп'ютера або ноутбука. Baseus MicroUSB/USB-C Adapter дає можливість підключати пристрої з роз'єм MicroUSB до ноутбука, ПК або зарядного пристрою з інтерфейсом USB-C.`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/Screenshot_1_159.500x500.jpg.pagespeed.ce.sLzcIZeeQ4.jpg"
    ]
  },
  {
    id: 68,
    name: "Apple USB C to MagSafe 3 Cable 2m (MLYV3)\n",
    category: "Кабелі і перехідники",
    price: 2373  ,
    description: `Цей кабель довжиною 2 метри з магнітним роз'ємом MagSafe 3 легко підключається до живлення MacBook Pro. У поєднанні із сумісним адаптером USB-C він дозволяє зручно заряджати MacBook Pro від настінної розетки та підтримує функцію швидкого заряджання. Кабель примагнічується досить міцно і не від'єднується, коли його випадково зачіпають. Але якщо хтось зачепиться за нього, кабель легко вискочить з роз'єму і не потягне ваш MacBook Pro за собою. Під час заряджання світлодіодний індикатор горить оранжевим світлом, а після його завершення стає зеленим. Він виготовлений з плетеного текстилю, тому відрізняється довгим терміном служби.`,
    popular: true,
    imageUrls: [
        "https://www.ipeople.in.ua/files/products/MLYV3_AV1-1000x1000.500x500.jpeg.pagespeed.ce.KjNwYvW-Oz.jpg"
    ]
  },
  {
    id: 69,
    name: "Satechi USB-C Clamp Hub for 24\" iMac, Silver (ST-UCICHS)\n",
    category: "Кабелі і перехідники",
    price: 2399  ,
    description: `Спеціально розроблений для моделей iMac 2021 (24 дюйми) для розширення USB-портів для швидкої передачі даних та легкого доступу до периферійних пристроїв - і все це з гладкою алюмінієвою обробкою, що доповнює ваш iMac.`,
    popular: false,
    imageUrls: [
      "https://www.ipeople.in.ua/files/products/usb-c-clamp-hub-for-24-inch-imac-hubs-satechi-981051_1024x.500x500.jpg.pagespeed.ce.dVQVrS1ggD.jpg"
    ]
  },
];

// List of item categories.
const categories = [
  {
    name: "Всі категорії",
    icon: "list"
  },
  {
    name: "Айфони",
    icon: "stay_primary_portrait"
  },
  {
    name: "Айпади",
    icon: "tablet_mac"
  },
  {
    name: "Макбуки",
    icon: "laptop_mac"
  },
  {
    name: "Макентоші",
    icon: "desktop_mac"
  },
  {
    name: "Аксессуары для MAC",
    icon: "apple"
  },
  {
    name: "Акустика",
    icon: "headset"
  },
  {
    name: "Запчастини",
    icon: "devices"
  },
  {
    name: "Зовнішні акумулятори (POWER BANK)",
    icon: "power"
  },
  {
    name: "Чехли для IPAD",
    icon: "devices_other"
  },
  {
    name: "Зараядні пристрої",
    icon: "electrical_services"
  },
  {
    name: "Кабелі і перехідники",
    icon: "settings_input_hdmi"
  },
  {
    name: "Захисні плівки і стікло",
    icon: "crop_portrait"
  },
  {
    name: "Камери",
    icon: "photo_camera"
  },
];

// Data for rendering menu.
const dataForTheMenu = [
  { name: "Домашня сторінка", url: "/", icon: "home", id: 0 },
  {
    name: "Категорії продуктів",
    id: 2,
    children: categories.map((x, i) => {
      return {
        name: x.name,
        id: i,
        url: "/?category=" + x.name,
        icon: x.icon
      };
    })
  },
];

export const RepairSetting = [
  {
    tittle:'iPhone 5S/SE',
    changeDisplay :799,
    changeBattery: 340,
    clean: 200,
    changeCamera: 1900,
    changePower: 3000,
    changeWifi: 6000,
    changeHome : 2300,
    img: 'https://i1.foxtrot.com.ua/product/thumb/6423091.jpg'
  },
  {
    tittle: "iPhone X/XS",
    changeDisplay : 1400,
    changeBattery: 530,
    clean: 250,
    changeCamera: 2000,
    changePower: 3200,
    changeWifi: 7000,
    changeHome : 2600,
    img: 'https://i1.foxtrot.com.ua/product/thumb/6510887.jpg'
  },
  {
    tittle: "iPhone XS Max",
    changeDisplay : 700,
    changeBattery: 450,
    clean: 300,
    changeCamera: 2100,
    changePower: 3300,
    changeWifi: 5000,
    changeHome : 2200,
    img: 'https://i1.foxtrot.com.ua/product/thumb/6307815.jpg'
  },
  {
    tittle: "iPhone 5/5 Plus",
    changeDisplay : 600,
    changeBattery: 250,
    clean: 100,
    changeCamera: 1200,
    changePower: 800,
    changeWifi: 6400,
    changeHome : 2100,
    img: 'https://i1.foxtrot.com.ua/product/thumb/6561847.jpg'
  },
  {
    tittle: "iPhone 8/8 Plus",
    changeDisplay : 600,
    changeBattery: 250,
    clean: 100,
    changeCamera: 1200,
    changePower: 800,
    changeWifi: 6700,
    changeHome : 2700,
    img: 'https://i1.foxtrot.com.ua/product/thumb/6423091.jpg'
  },
  {
    tittle: "iPhone 6/6 Plus",
    changeDisplay : 300,
    changeBattery: 350,
    clean: 200,
    changeCamera: 1100,
    changePower: 700,
    changeWifi: 6800,
    changeHome : 3100,
    img: 'https://i1.foxtrot.com.ua/product/thumb/6307817.jpg'
  },
]


export { sampleProducts, categories, dataForTheMenu };
