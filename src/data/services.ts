export type ServiceType = 'hotel' | 'restaurant' | 'place';
export type Region = 'Termiz' | 'Moynaq' | 'Khiva' | 'Kokand' | 'Namangan' | 'Zaamin' | 'Samarkand' | 'Shahrisabz' | 'Bukhara' | 'Tashkent';
import chimyon from "../Img/unnamed.jpg";
import amirsoy from '../Img/amirsoy-gondola.jpg';
import balandchaqir from '../Img/Balandchaqir.jpg';
import zomin from '../Img/zomin.webp';
import achchiqKol from '../Img/images.jpg';
import sangardak from '../Img/Sangardak_sharsharasi_-_30.jpg';
import baxmal from '../Img/baxmal.jpg';
import suvtushar from '../Img/Suvtushar_sharsharasi_Shahrisabz.jpg';
import aydarkol from '../Img/aydarko`l.jpg';
import xojamayxona from '../Img/xo`jamayxona.jpg';
import albarsoy from '../Img/albarsoy.webp';
import xojamushkent from '../Img/f1bb905744cc466c61ef3a5b570ea81e.jpg'


export interface Service {
  id: string;
  title: { ru: string; en: string; uz: string };
  region: Region;
  type: ServiceType;
  price?: number;
  rating: number;
  image: string;
  description: { ru: string; en: string; uz: string };
  location: string;
  phone: string;
  gallery: string[];
}

export const REGIONS: Region[] = ['Termiz', 'Moynaq', 'Khiva', 'Kokand', 'Namangan', 'Zaamin', 'Samarkand', 'Shahrisabz', 'Bukhara', 'Tashkent'];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: { ru: 'Чимган', en: 'Chimgan', uz: 'Chimyon' },
    region: 'Tashkent',
    type: 'place',
    rating: 4.8,
    image: chimyon,
    description: {
      ru: 'Прекрасный горный курорт недалеко от Ташкента, идеален для зимнего и летнего отдыха.',
      en: 'A beautiful mountain resort near Tashkent, ideal for winter and summer holidays.',
      uz: 'Toshkent yaqinidagi goʻzal togʻ kurorti, qishki va yozgi dam olish uchun ajoyib joy.'
    },
    location: 'Tashkent Region, Chimgan',
    phone: 'N/A',
    gallery: [
      'https://images.unsplash.com/photo-1549487563-fb651e604f37?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: '2',
    title: { ru: 'Амирсой', en: 'Amirsoy', uz: 'Amirsoy' },
    region: 'Tashkent',
    type: 'place',
    rating: 4.9,
    image: amirsoy,
    description: {
      ru: 'Современный горнолыжный курорт мирового уровня.',
      en: 'Modern world-class ski resort.',
      uz: 'Jahon standartlariga javob beradigan zamonaviy togʻ-changʻi kurorti.'
    },
    location: 'Tashkent Region',
    phone: 'N/A',
    gallery: [
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: '3',
    title: { ru: 'Ходжамушкент', en: 'Hojamushkent', uz: 'Xo\'jamushkent' },
    region: 'Namangan',
    type: 'place',
    rating: 4.7,
    image: xojamushkent,
    description: {
      ru: 'Историческое и святое место, окруженное красивой природой.',
      en: 'Historical and sacred place surrounded by beautiful nature.',
      uz: 'Goʻzal tabiat bilan oʻralgan tarixiy va muqaddas joy.'
    },
    location: 'Namangan Region',
    phone: 'N/A',
    gallery: [
      'https://images.unsplash.com/photo-1580637250188-062e17707f45?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: '4',
    title: { ru: 'Баландчакир', en: 'Balanchaqir', uz: 'Balandchaqir' },
    region: 'Zaamin',
    type: 'place',
    rating: 4.6,
    image: balandchaqir,
    description: {
      ru: 'Красивое природное место.',
      en: 'Beautiful natural spot.',
      uz: 'Ajoyib tabiat maskani.'
    },
    location: 'Zaamin',
    phone: 'N/A',
    gallery: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: '5',
    title: { ru: 'Зомин', en: 'Zaamin', uz: 'Zomin' },
    region: 'Zaamin',
    type: 'place',
    rating: 4.9,
    image: zomin,
    description: {
      ru: 'Узбекская Швейцария с хвойными лесами и чистейшим воздухом.',
      en: 'Uzbek Switzerland with coniferous forests and purest air.',
      uz: 'Oʻzbekiston Shveytsariyasi, archazorlar va musaffo havo maskani.'
    },
    location: 'Zaamin National Park',
    phone: 'N/A',
    gallery: [
      'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: '6',
    title: { ru: 'Озеро Ачиқкўл', en: 'Achiqkol', uz: 'Achiqko\'l' },
    region: 'Khiva',
    type: 'place',
    rating: 4.5,
    image: achchiqKol,
    description: {
      ru: 'Живописное озеро, идеальное для отдыха.',
      en: 'Picturesque lake, ideal for relaxation.',
      uz: 'Dam olish uchun ajoyib boʻlgan goʻzal koʻl.'
    },
    location: 'Uzbekistan',
    phone: 'N/A',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: '7',
    title: { ru: 'Водопад Сангардак', en: 'Sangardak Waterfall', uz: 'Sangardak sharsharasi' },
    region: 'Termiz',
    type: 'place',
    rating: 4.8,
    image: sangardak,
    description: {
      ru: 'Один из самых красивых водопадов Узбекистана.',
      en: 'One of the most beautiful waterfalls in Uzbekistan.',
      uz: 'Oʻzbekistondagi eng goʻzal sharsharalardan biri.'
    },
    location: 'Surkhandarya Region',
    phone: 'N/A',
    gallery: [
      'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: '8',
    title: { ru: 'Бахмал', en: 'Baxmal', uz: 'Baxmal' },
    region: 'Zaamin',
    type: 'place',
    rating: 4.7,
    image: baxmal,
    description: {
      ru: 'Горный район с уникальной природой и яблоневыми садами.',
      en: 'Mountainous area with unique nature and apple orchards.',
      uz: 'Noyob tabiat va olma bogʻlariga ega togʻli hudud.'
    },
    location: 'Jizzakh Region',
    phone: 'N/A',
    gallery: [
      'https://images.unsplash.com/photo-1623851502447-19076046e7f8?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: '9',
    title: { ru: 'Сувтушар', en: 'Suvtushar', uz: 'Suvtushar' },
    region: 'Shahrisabz',
    type: 'place',
    rating: 4.6,
    image: suvtushar,
    description: {
      ru: 'Красивый водный источник в горах.',
      en: 'Beautiful water spring in the mountains.',
      uz: 'Togʻlardagi goʻzal suv manbai.'
    },
    location: 'Kashkadarya Region',
    phone: 'N/A',
    gallery: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: '10',
    title: { ru: 'Озеро Айдаркуль', en: 'Aydarkul Lake', uz: 'Aydarkal' },
    region: 'Zaamin',
    type: 'place',
    rating: 4.8,
    image: aydarkol,
    description: {
      ru: 'Огромное озеро посреди пустыни, прекрасное место для рыбалки и отдыха.',
      en: 'A huge lake in the middle of the desert, a beautiful place for fishing and recreation.',
      uz: 'Choʻl oʻrtasidagi ulkan koʻl, baliq ovlash va dam olish uchun ajoyib joy.'
    },
    location: 'Jizzakh / Navoi Region',
    phone: 'N/A',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: '11',
    title: { ru: 'Ходжамайхана', en: 'Xojamayxona', uz: 'Xojamayxona' },
    region: 'Termiz',
    type: 'place',
    rating: 4.7,
    image: xojamayxona,
    description: {
      ru: 'Целебный источник в живописном ущелье.',
      en: 'Healing spring in a picturesque gorge.',
      uz: 'Goʻzal daradagi shifobaxsh buloq.'
    },
    location: 'Surkhandarya Region',
    phone: 'N/A',
    gallery: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: '12',
    title: { ru: 'Албарсой', en: 'Albarsoy', uz: 'Albarsoy' },
    region: 'Tashkent',
    type: 'place',
    rating: 4.6,
    image: albarsoy,
    description: {
      ru: 'Горная река с красивыми видами.',
      en: 'Mountain river with beautiful views.',
      uz: 'Goʻzal manzarali togʻ daryosi.'
    },
    location: 'Tashkent Region',
    phone: 'N/A',
    gallery: [
      'https://images.unsplash.com/photo-1580637250188-062e17707f45?auto=format&fit=crop&q=80&w=1000'
    ]
  }
];
