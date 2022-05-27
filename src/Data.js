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
    icon: "desktop_mac"
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
  }
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
