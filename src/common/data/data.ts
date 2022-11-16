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

export type GoodsItemType = {
  id: number;
  image: string;
  priceNow: number;
  priceLast: number;
  brand: string;
  description: string;
  amount: number;
};

export const goodsData: GoodsItemType[] = [
  {
    id: 1,
    image: phone,
    priceNow: 239.11,
    priceLast: 362.3,
    brand: 'Xiaomi',
    description: 'Смартфон Redmi 9A 2GB + 32GB',
    amount: 1,
  },
  {
    id: 2,
    image: gloves,
    priceNow: 56.37,
    priceLast: 313.21,
    brand: 'ASPOLIFE',
    description: 'Тактические перчатки военные Перчатки спортивные мужские',
    amount: 1,
  },
  {
    id: 3,
    image: hoodie,
    priceNow: 40.92,
    priceLast: 99.82,
    brand: 'Bossa Nova',
    description: 'Худи',
    amount: 1,
  },
  {
    id: 4,
    image: jacket,
    priceNow: 51.22,
    priceLast: 134.8,
    brand: 'Снолики',
    description: 'Куртка для новорожденного меховая',
    amount: 1,
  },
  {
    id: 5,
    image: gloves2,
    priceNow: 58.51,
    priceLast: 106.39,
    brand: 'Tanvolt',
    description: 'Перчатки рабочие утепленные зимние для работы',
    amount: 1,
  },
  {
    id: 6,
    image: gloves3,
    priceNow: 45.07,
    priceLast: 65.33,
    brand: 'GARSING',
    description: 'Перчатки мужские Перчатки женские Перчатки зимние. GSG-75',
    amount: 1,
  },
  {
    id: 7,
    image: underwear,
    priceNow: 26.18,
    priceLast: 58.19,
    brand: 'ТяпА',
    description: 'Комплект белья нательный для новорожденных малышей',
    amount: 1,
  },
  {
    id: 8,
    image: showerGel,
    priceNow: 16.35,
    priceLast: 21.8,
    brand: 'Nivea',
    description: 'Гель для душа "Крем и Абрикос" 750 мл',
    amount: 1,
  },
  {
    id: 9,
    image: spray,
    priceNow: 19.9,
    priceLast: 30.63,
    brand: 'Constant Delight',
    description: 'Эликсир многофункциональный 12в1 Эксперт-уход, 200 мл',
    amount: 1,
  },
  {
    id: 10,
    image: phone2,
    priceNow: 4505.22,
    priceLast: 5238.64,
    brand: 'Apple',
    description: 'iPhone 13 Pro Max 256GB (СНГ)',
    amount: 1,
  },
  {
    id: 11,
    image: washingGel,
    priceNow: 24.59,
    priceLast: 37.84,
    brand: 'EcoLand',
    description: 'Гель для стирки "ЭКОНОМ", канистра ПЭ 5 л 5 литров',
    amount: 1,
  },
  {
    id: 12,
    image: bar,
    priceNow: 12.28,
    priceLast: 20.47,
    brand: 'Nivea',
    description: 'Твердое средство для умывания WonderBAR Sensitive базовое еж…',
    amount: 1,
  },
  {
    id: 13,
    image: skirt,
    priceNow: 29.49,
    priceLast: 118.0,
    brand: 'corner_more',
    description: 'Чёрная мини-юбка плиссе со складками',
    amount: 1,
  },
  {
    id: 14,
    image: jumpsuit,
    priceNow: 39.49,
    priceLast: 119.69,
    brand: 'Снолики',
    description: 'Зоопарк Комбинезон для новорождённых комбинезон детский комп…',
    amount: 1,
  },
];
