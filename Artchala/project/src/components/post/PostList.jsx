import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

export function PostList({ posts, onLike }) {
  return (
    <div className='space-y-6'>
      {posts.map((post) => (
        <article key={post.id} className='bg-white rounded-lg shadow'>
          <div className='p-4'>
            <div className='flex items-center space-x-3'>
              <img
                src={post.user.avatar_url || 'https://via.placeholder.com/40'}
                alt={post.user.name}
                className='w-10 h-10 rounded-full'
              />
              <div>
                <h3 className='font-semibold text-gray-900'>{post.user.name}</h3>
                <p className='text-sm text-gray-500'>
                  {new Date(post.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>

            <p className='mt-4 text-gray-900'>{post.content}</p>

            {post.image_url && (
              <img
                src={post.image_url}
                alt='Post content'
                className='mt-4 rounded-lg w-full object-cover max-h-96'
              />
            )}

            <div className='mt-4 flex items-center space-x-4 text-gray-500'>
              <button
                onClick={() => onLike(post.id)}
                className='flex items-center space-x-1 hover:text-red-500'
              >
                <Heart className={`w-5 h-5 ${post.liked ? 'fill-red-500 text-red-500' : ''}`} />
                <span>{post.likes_count}</span>
              </button>

              <button className='flex items-center space-x-1 hover:text-indigo-500'>
                <MessageCircle className='w-5 h-5' />
                <span>{post.comments_count}</span>
              </button>

              <button className='flex items-center space-x-1 hover:text-indigo-500'>
                <Share2 className='w-5 h-5' />
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
