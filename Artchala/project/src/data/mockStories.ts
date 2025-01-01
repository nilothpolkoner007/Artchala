import type { Story } from '../types';

export const MOCK_STORIES: Story[] = [
  {
    id: '1',
    title: 'Urban Landscapes at Sunset',
    imageUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-1.2.1&auto=format&fit=crop&w=2532&q=80',
    artist: {
      id: '1',
      name: 'Sarah Chen',
      avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    likes: 245,
    category: 'Photography',
    createdAt: '2024-03-10'
  },
  {
    id: '2',
    title: 'Abstract Emotions',
    imageUrl: 'https://images.unsplash.com/photo-1482160549825-59d1b23cb208?ixlib=rb-1.2.1&auto=format&fit=crop&w=2532&q=80',
    artist: {
      id: '2',
      name: 'Marcus Rivera',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    likes: 189,
    category: 'Painting',
    createdAt: '2024-03-09'
  },
  {
    id: '3',
    title: 'Digital Dreams',
    imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=2532&q=80',
    artist: {
      id: '3',
      name: 'Elena Smith',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    likes: 324,
    category: 'Digital Art',
    createdAt: '2024-03-08'
  }
];