import { BMWModel } from '../types';

export const bmwModels: BMWModel[] = [
  {
    id: '1',
    name: 'BMW 3 Series',
    series: '3 Series',
    year: 2024,
    bodyType: 'Седан',
    engineType: 'Бензиновый',
    price: 'от 3 200 000 сом',
    image: 'https://www.bmw.ru/content/dam/bmw/common/all-models/3-series/sedan/2021/highlights/bmw-3-series-3er-sedan-mediumteaser-technical.jpg',
    gallery: [
      'https://www.netcarshow.com/BMW-3-Series_Sedan-2025-Front.b4a8dfb8.jpg',
      'https://avatars.mds.yandex.net/get-verba/216201/2a0000018fdd102cac3a2ed68eafcc934c78/456x342',
      'https://s0.rbk.ru/v6_top_pics/media/img/8/47/347169890341478.jpeg',
      
    ],
    specifications: {
      engine: '2.0L TwinPower Turbo',
      power: '184 л.с.',
      torque: '300 Нм',
      acceleration: '7.1 сек (0-100 км/ч)',
      topSpeed: '230 км/ч',
      consumption: '6.8 л/100км',
      transmission: '8-ступенчатая автоматическая',
      drivetrain: 'Задний привод'
    },
    description: 'BMW 3 Series — воплощение спортивной элегантности и инновационных технологий. Этот автомобиль сочетает в себе динамичные характеристики и роскошный комфорт.',
    history: 'BMW 3 Series впервые появился в 1975 году и с тех пор стал эталоном спортивных седанов премиум-класса.'
  },
  {
    id: '2',
    name: 'BMW X5',
    series: 'X Series',
    year: 2024,
    bodyType: 'Внедорожник',
    engineType: 'Бензиновый',
    price: 'от 5 800 000 сом',
    image: 'https://apiweb.rolf.ru/storage/thumbnails/large/vehicles/new/323887/714e068f5a0032f01c4529f17e460057.jpg',
    gallery: [
      'https://apiweb.rolf.ru/storage/thumbnails/large/vehicles/new/323887/717afbcc7269624fbdf826b4dd0b2153.jpg',
      'https://avatars.mds.yandex.net/get-autoru-vos/6358557/b9481a8972799a4de0c723d4cb7be397/320x240',
      'https://avatars.mds.yandex.net/get-autoru-vos/4887817/923df295000e82ab7cd510ebc7a8e112/456x342'
    ],
    specifications: {
      engine: '3.0L TwinPower Turbo',
      power: '340 л.с.',
      torque: '450 Нм',
      acceleration: '5.5 сек (0-100 км/ч)',
      topSpeed: '250 км/ч',
      consumption: '9.2 л/100км',
      transmission: '8-ступенчатая автоматическая',
      drivetrain: 'Полный привод xDrive'
    },
    description: 'BMW X5 предлагает идеальное сочетание роскоши, производительности и универсальности для любых дорожных условий.',
    history: 'BMW X5 революционизировал сегмент SAV (Sports Activity Vehicle) с момента своего дебюта в 1999 году.'
  },
  {
    id: '3',
    name: 'BMW i4',
    series: 'i Series',
    year: 2024,
    bodyType: 'Седан',
    engineType: 'Электрический',
    price: 'от 4 200 000 сом',
    image: 'https://greencarscompare.ru/upload/resize_cache/iblock/f90/560_315_2/c0ceu7vpro405ih4pj4wikdo5de7up8y.jpg',
    gallery: [
      'https://greencarscompare.ru/upload/resize_cache/iblock/aaa/1100_618_2/uloqby26n3q8b5al0f0ntjrsms0xplv1.png',
      'https://greencarscompare.ru/upload/resize_cache/iblock/b1a/1100_618_2/6qgaf8at1y0ir9v8gr0weq9bw5nw1qiq.png',
      'https://greencarscompare.ru/upload/resize_cache/iblock/800/1100_618_2/2wksv64gzcva196b2i9ffaioq8norgri.jpg'
    ],
    specifications: {
      engine: 'Электрический мотор',
      power: '340 л.с.',
      torque: '430 Нм',
      acceleration: '5.7 сек (0-100 км/ч)',
      topSpeed: '190 км/ч',
      consumption: '18.1 кВт·ч/100км',
      transmission: 'Одноступенчатая',
      drivetrain: 'Задний привод'
    },
    description: 'BMW i4 — это будущее электромобильности BMW, сочетающее нулевые выбросы с характерными для BMW динамикой и роскошью.',
    history: 'BMW i4 представляет новую эру электромобильности BMW, основанную на десятилетиях инноваций в серии BMW i.'
  },
  {
    id: '4',
    name: 'BMW 5 Series',
    series: '5 Series',
    year: 2024,
    bodyType: 'Седан',
    engineType: 'Гибридный',
    price: 'от 4 500 000 сом',
    image: 'https://vehicle-images.dealerinspire.com/5bcd-18003823/WBA53FJ07RCR49360/5d1e245d9f4d22f7d0054b9e1ef4579a.jpg',
    gallery: [
      'https://apiweb.rolf.ru/storage/thumbnails/large/vehicles/new/323135/185fac54664d8b811883d32d9ebafbf7.jpg',
      'https://avatars.mds.yandex.net/get-autoru-vos/11368337/8a6f492d51e3932d1989c36e707874aa/456x342',
      'https://i.ytimg.com/vi/4buQqExw1yg/maxresdefault.jpg'
    ],
    specifications: {
      engine: '2.0L Hybrid TwinPower Turbo',
      power: '245 л.с.',
      torque: '365 Нм',
      acceleration: '6.8 сек (0-100 км/ч)',
      topSpeed: '235 км/ч',
      consumption: '5.4 л/100км',
      transmission: '8-ступенчатая автоматическая',
      drivetrain: 'Задний привод'
    },
    description: 'BMW 5 Series устанавливает новые стандарты в сегменте бизнес-седанов, предлагая передовые технологии и исключительный комфорт.',
    history: 'BMW 5 Series с 1972 года является эталоном бизнес-седанов, постоянно устанавливая новые стандарты в своем классе.'
  },
  {
    id: '5',
    name: 'BMW X3',
    series: 'X Series',
    year: 2024,
    bodyType: 'Кроссовер',
    engineType: 'Дизельный',
    price: 'от 4 800 000 сом',
    image: 'https://autoreview.ru/images/gallery/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/2024/June/19/bmw-x3-10.jpg',
    gallery: [
      'https://autoreview.ru/images/gallery/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/2024/June/19/bmw-x3-10.jpg',
      'https://autoreview.ru/images/gallery/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/2024/June/19/bmw-x3-11.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqREfL8QCi79I4Hc4p9Whw0S3QEefAUV6Cag&s'
    ],
    specifications: {
      engine: '2.0L TwinPower Turbo Diesel',
      power: '190 л.с.',
      torque: '400 Нм',
      acceleration: '8.0 сек (0-100 км/ч)',
      topSpeed: '213 км/ч',
      consumption: '5.8 л/100км',
      transmission: '8-ступенчатая автоматическая',
      drivetrain: 'Полный привод xDrive'
    },
    description: 'BMW X3 предлагает идеальный баланс между городским комфортом и внедорожными способностями.',
    history: 'BMW X3 с 2003 года определяет стандарты в сегменте компактных премиальных SAV.'
  },
  {
    id: '6',
    name: 'BMW 7 Series',
    series: '7 Series',
    year: 2024,
    bodyType: 'Седан',
    engineType: 'Бензиновый',
    price: 'от 8 500 000 сом',
    image: 'https://nextcar.ua/images/detailed/549/1_f36s-og.jpg',
    gallery: [
      'https://nextcar.ua/images/detailed/549/1_f36s-og.jpg',
      'https://www.ixbt.com/img/n1/news/2023/11/1/bmw-i7-m70-xdrive-2023%20(1)_large.jpg',
      'https://bmw.scene7.com/is/image/BMW/g70-bev-mp_exterior_highlight_two-tone-paint?wid=3000&hei=3000'
    ],
    specifications: {
      engine: '4.4L V8 TwinPower Turbo',
      power: '530 л.с.',
      torque: '750 Нм',
      acceleration: '4.0 сек (0-100 км/ч)',
      topSpeed: '250 км/ч',
      consumption: '10.8 л/100км',
      transmission: '8-ступенчатая автоматическая',
      drivetrain: 'Полный привод xDrive'
    },
    description: 'BMW 7 Series — флагманский седан, воплощающий высшие достижения BMW в области роскоши, технологий и производительности.',
    history: 'BMW 7 Series с 1977 года является флагманом модельного ряда BMW, представляя передовые технологии и непревзойденную роскошь.'
  }
];