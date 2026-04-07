export interface Tour {
  id: string;
  title: string;
  location: string;
  price: number;
  duration: string;
  image: string;
  description: string;
  category: 'Ocean' | 'Mountains' | 'City' | 'Desert';
  rating: number;
  featured?: boolean;
}

export const TOURS: Tour[] = [
  {
    id: '1',
    title: 'Maldives Private Island Escape',
    location: 'Maldives',
    price: 4500,
    duration: '7 Days',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1000',
    description: 'Experience ultimate luxury in a private overwater villa. Crystal clear waters, personalized service, and breathtaking sunsets await.',
    category: 'Ocean',
    rating: 4.9,
    featured: true
  },
  {
    id: '2',
    title: 'Swiss Alps Luxury Chalet',
    location: 'Switzerland',
    price: 3800,
    duration: '5 Days',
    image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=1000',
    description: 'A cozy yet sophisticated retreat in the heart of the Alps. Enjoy world-class skiing and gourmet dining with mountain views.',
    category: 'Mountains',
    rating: 4.8,
    featured: true
  },
  {
    id: '3',
    title: 'Tokyo Modern Zen Experience',
    location: 'Japan',
    price: 2900,
    duration: '6 Days',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1000',
    description: 'Discover the perfect blend of tradition and technology. Stay in premium hotels and explore the vibrant culture of Tokyo.',
    category: 'City',
    rating: 4.7,
    featured: true
  },
  {
    id: '4',
    title: 'Santorini Sunset Villa',
    location: 'Greece',
    price: 3200,
    duration: '7 Days',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=1000',
    description: 'Iconic white-washed architecture and the most famous sunsets in the world. A romantic getaway like no other.',
    category: 'Ocean',
    rating: 4.9
  },
  {
    id: '5',
    title: 'Dubai Desert Oasis',
    location: 'UAE',
    price: 2500,
    duration: '4 Days',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
    description: 'Luxury camping under the stars with modern amenities. Experience the majestic desert dunes in style.',
    category: 'Desert',
    rating: 4.6
  },
  {
    id: '6',
    title: 'Amalfi Coast Grand Tour',
    location: 'Italy',
    price: 4100,
    duration: '8 Days',
    image: 'https://images.unsplash.com/photo-1633321088392-892fa248d28e?auto=format&fit=crop&q=80&w=1000',
    description: 'Drive along the stunning coastline, visit Positano and Ravello, and indulge in the finest Italian cuisine.',
    category: 'Ocean',
    rating: 4.8
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Alexander Wright',
    role: 'Business Traveler',
    content: 'The attention to detail was incredible. Every aspect of our Maldives trip was handled with absolute professionalism.',
    avatar: 'https://i.pravatar.cc/150?u=alex'
  },
  {
    id: 2,
    name: 'Elena Rodriguez',
    role: 'Luxury Explorer',
    content: 'I have traveled with many agencies, but LuxeVoyage truly understands what "premium" means. Highly recommended.',
    avatar: 'https://i.pravatar.cc/150?u=elena'
  },
  {
    id: 3,
    name: 'James Chen',
    role: 'Adventure Enthusiast',
    content: 'The Swiss Alps chalet was beyond my expectations. The concierge service was available 24/7 for all our needs.',
    avatar: 'https://i.pravatar.cc/150?u=james'
  }
];
