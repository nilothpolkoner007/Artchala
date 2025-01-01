import React from 'react';
import { Heart } from 'lucide-react';

export function StoryCard({ story }) {
  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]'>
      <div className='relative h-64'>
        <img src={story.imageUrl} alt={story.title} className='w-full h-full object-cover' />
        <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
        <div className='absolute bottom-0 left-0 right-0 p-4'>
          <h3 className='text-white font-semibold text-lg'>{story.title}</h3>
        </div>
      </div>
      <div className='p-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <img
              src={story.artist.avatarUrl}
              alt={story.artist.name}
              className='w-8 h-8 rounded-full object-cover'
            />
            <span className='font-medium text-gray-800'>{story.artist.name}</span>
          </div>
          <div className='flex items-center space-x-1 text-gray-600'>
            <Heart className='w-5 h-5' />
            <span>{story.likes}</span>
          </div>
        </div>
        <div className='mt-2'>
          <span className='inline-block px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded-full'>
            {story.category}
          </span>
        </div>
      </div>
    </div>
  );
}
