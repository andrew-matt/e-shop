import phone2 from 'assets/goods_images/iPhone 13 Pro Max 256GB (СНГ).jpg';
import showerGel from 'assets/goods_images/Гель для душа Крем и Абрикос 750 мл.jpg';
import washingGel from 'assets/goods_images/Гель для стирки ЭКОНОМ, канистра ПЭ 5 л 5 литров.jpg';
import jumpsuit from 'assets/goods_images/Зоопарк Комбинезон для новорождённых комбинезон детский комп….jpg';
import underwear from 'assets/goods_images/Комплект белья нательный для новорожденных малышей.jpg';
import jacket from 'assets/goods_images/Куртка для новорожденного меховая.jpg';
import gloves3 from 'assets/goods_images/Перчатки мужские Перчатки женские Перчатки зимние. GSG-75.jpg';
import gloves2 from 'assets/goods_images/Перчатки рабочие утепленные зимние для работы.jpg';
import phone from 'assets/goods_images/Смартфон Redmi 9A 2GB+32GB.jpg';
import gloves from 'assets/goods_images/Тактические перчатки военные Перчатки спортивные мужские.jpg';
import bar from 'assets/goods_images/Твердое средство для умывания WonderBAR Sensitive базовое еж….jpg';
import hoodie from 'assets/goods_images/Худи.jpg';
import skirt from 'assets/goods_images/Чёрная мини-юбка плиссе со складками.jpg';
import spray from 'assets/goods_images/Эликсир многофункциональный 12в1 Эксперт-уход, 200 мл.jpg';

type GoodsItemType = {
  id: number;
  image: string;
  priceNow: string;
  priceLast: string;
  brand: string;
  description: string;
};

export const goodsData: GoodsItemType[] = [
  {
    id: 1,
    image: phone,
    priceNow: '239,11 р.',
    priceLast: '362,30 р.',
    brand: 'Xiaomi',
    description: 'Смартфон Redmi 9A 2GB + 32GB',
  },
  {
    id: 2,
    image: gloves,
    priceNow: '56,37 р.',
    priceLast: '313,21 р.',
    brand: 'ASPOLIFE',
    description: 'Тактические перчатки военные Перчатки спортивные мужские',
  },
  {
    id: 3,
    image: hoodie,
    priceNow: '40,92 р.',
    priceLast: '99,82 р.',
    brand: 'Bossa Nova',
    description: 'Худи',
  },
  {
    id: 4,
    image: jacket,
    priceNow: '51,22 р.',
    priceLast: '134,80 р.',
    brand: 'Снолики',
    description: 'Куртка для новорожденного меховая',
  },
  {
    id: 5,
    image: gloves2,
    priceNow: '58,51 р.',
    priceLast: '106,39 р.',
    brand: 'Tanvolt',
    description: 'Перчатки рабочие утепленные зимние для работы',
  },
  {
    id: 6,
    image: gloves3,
    priceNow: '45,07 р.',
    priceLast: '65,33 р.',
    brand: 'GARSING',
    description: 'Перчатки мужские Перчатки женские Перчатки зимние. GSG-75',
  },
  {
    id: 7,
    image: underwear,
    priceNow: '26,18 р.',
    priceLast: '58,19 р.',
    brand: 'ТяпА',
    description: 'Комплект белья нательный для новорожденных малышей',
  },
  {
    id: 8,
    image: showerGel,
    priceNow: '16,35 р.',
    priceLast: '21,80 р.',
    brand: 'Nivea',
    description: 'Гель для душа "Крем и Абрикос" 750 мл',
  },
  {
    id: 9,
    image: spray,
    priceNow: '19,90 р.',
    priceLast: '30,63 р.',
    brand: 'Constant Delight',
    description: 'Эликсир многофункциональный 12в1 Эксперт-уход, 200 мл',
  },
  {
    id: 10,
    image: phone2,
    priceNow: '4 505,22 р.',
    priceLast: '5 238,64 р.',
    brand: 'Apple',
    description: 'iPhone 13 Pro Max 256GB (СНГ)',
  },
  {
    id: 11,
    image: washingGel,
    priceNow: '24,59 р.',
    priceLast: '37,84 р.',
    brand: 'EcoLand',
    description: 'Гель для стирки "ЭКОНОМ", канистра ПЭ 5 л 5 литров',
  },
  {
    id: 12,
    image: bar,
    priceNow: '12,28 р.',
    priceLast: '20,47 р.',
    brand: 'Nivea',
    description: 'Твердое средство для умывания WonderBAR Sensitive базовое еж…',
  },
  {
    id: 13,
    image: skirt,
    priceNow: '29,49 р.',
    priceLast: '118,00 р.',
    brand: 'corner_more',
    description: 'Чёрная мини-юбка плиссе со складками',
  },
  {
    id: 14,
    image: jumpsuit,
    priceNow: '39,49 р.',
    priceLast: '119,69 р.',
    brand: 'Снолики',
    description: 'Зоопарк Комбинезон для новорождённых комбинезон детский комп…',
  },
];
