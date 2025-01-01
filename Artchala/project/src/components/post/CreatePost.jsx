import React, { useState } from 'react';
import { ImagePlus, Loader } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export function CreatePost() {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    setLoading(true);
    try {
      let imageUrl = null;

      if (image) {
        const fileExt = image.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const { error: uploadError, data } = await supabase.storage
          .from('posts')
          .upload(fileName, image);

        if (uploadError) throw uploadError;
        imageUrl = data.path;
      }

      const { error } = await supabase.from('posts').insert({
        content,
        image_url: imageUrl,
      });

      if (error) throw error;
      setContent('');
      setImage(null);
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='bg-white rounded-lg shadow p-4 mb-6'>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className='w-full p-2 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
        rows={3}
      />

      <div className='mt-4 flex items-center justify-between'>
        <label className='cursor-pointer flex items-center gap-2 text-gray-600 hover:text-gray-800'>
          <ImagePlus className='w-5 h-5' />
          <span>Add Image</span>
          <input
            type='file'
            accept='image/*'
            className='hidden'
            onChange={(e) => setImage(e.target.files?.[0] || null)}
          />
        </label>

        <button
          type='submit'
          disabled={loading || !content.trim()}
          className='px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50'
        >
          {loading ? <Loader className='w-5 h-5 animate-spin' /> : 'Post'}
        </button>
      </div>
    </form>
  );
}
