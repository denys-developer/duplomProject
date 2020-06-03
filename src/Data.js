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
  }
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
