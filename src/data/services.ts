export type ServiceType = 'hotel' | 'restaurant' | 'place';
export type Region = 'Tashkent' | 'Samarkand' | 'Bukhara' | 'Khiva' | 'Fergana' | 'Namangan' | 'Andijan';

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

export const REGIONS: Region[] = ['Tashkent', 'Samarkand', 'Bukhara', 'Khiva', 'Fergana', 'Namangan', 'Andijan'];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: { ru: 'Hyatt Regency Tashkent', en: 'Hyatt Regency Tashkent', uz: 'Hyatt Regency Tashkent' },
    region: 'Tashkent',
    type: 'hotel',
    price: 250,
    rating: 4.9,
    image: 'https://wyndhamtashkent.com/img/6ef580c662559e4b.webp',
    description: {
      ru: 'Роскошный отель в самом сердце Ташкента с первоклассным сервисом.',
      en: 'Luxury hotel in the heart of Tashkent with world-class service.',
      uz: 'Toshkent markazidagi jahon darajasidagi xizmat koʻrsatuvchi hashamatli mehmonxona.'
    },
    location: 'Tashkent, Navoi St 1A',
    phone: '+998 71 207 12 34',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: '2',
    title: { ru: 'Регистан', en: 'Registan', uz: 'Registon' },
    region: 'Samarkand',
    type: 'place',
    rating: 5.0,
    image: 'https://uzbekistan.travel/storage/app/media/uploaded-files/samarkand-uzbekistan-kupol-mechet-ploshchad.png',
    description: {
      ru: 'Сердце древнего Самарканда, ансамбль из трех медресе.',
      en: 'The heart of ancient Samarkand, an ensemble of three madrasahs.',
      uz: 'Qadimiy Samarqandning yuragi, uchta madrasadan iborat ansambl.'
    },
    location: 'Samarkand, Registan Square',
    phone: 'N/A',
    gallery: [
      'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1623851502447-19076046e7f8?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: '3',
    title: { ru: 'Ресторан Old City', en: 'Old City Restaurant', uz: 'Old City Restorani' },
    region: 'Bukhara',
    type: 'restaurant',
    price: 30,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000',
    description: {
      ru: 'Традиционная бухарская кухня в аутентичной атмосфере.',
      en: 'Traditional Bukhara cuisine in an authentic atmosphere.',
      uz: 'Haqiqiy atmosferada anʼanaviy Buxoro taomlari.'
    },
    location: 'Bukhara, Old City center',
    phone: '+998 90 123 45 67',
    gallery: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000'
    ]
  },
  {
    id: '4',
    title: { ru: 'Ичан-Кала', en: 'Itchan Kala', uz: 'Ichan-Qala' },
    region: 'Khiva',
    type: 'place',
    rating: 4.9,
    image: 'https://ychef.files.bbci.co.uk/1280x720/p0h8l984.jpg',
    description: {
      ru: 'Внутренний город Хивы, объект Всемирного наследия ЮНЕСКО.',
      en: 'The inner city of Khiva, a UNESCO World Heritage site.',
      uz: 'Xivaning ichki shahri, YUNESKOning Butunjahon merosi obyekti.'
    },
    location: 'Khiva, Itchan Kala',
    phone: 'N/A',
    gallery: ['https://images.unsplash.com/photo-1580637250188-062e17707f45?auto=format&fit=crop&q=80&w=1000']
  },
  {
    id: '5',
    title: { ru: 'Hotel Samarkand Safar', en: 'Hotel Samarkand Safar', uz: 'Hotel Samarkand Safar' },
    region: 'Samarkand',
    type: 'hotel',
    price: 80,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000',
    description: {
      ru: 'Уютный отель с видом на древние памятники.',
      en: 'Cozy hotel with a view of ancient monuments.',
      uz: 'Qadimiy yodgorliklar manzarali shinam mehmonxona.'
    },
    location: 'Samarkand, University Blvd',
    phone: '+998 66 233 00 00',
    gallery: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000']
  }
];
