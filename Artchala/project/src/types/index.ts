export interface Story {
  id: string;
  title: string;
  imageUrl: string;
  artist: {
    id: string;
    name: string;
    avatarUrl: string;
  };
  likes: number;
  category: string;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  bio?: string;
}