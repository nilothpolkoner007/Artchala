import React, { useEffect, useState } from 'react';
import { Header } from './components/layout/Header';
import { AuthForm } from './components/auth/AuthForm';
import { CreatePost } from './components/post/CreatePost';
import { PostList } from './components/post/PostList';
import { supabase } from './lib/supabase';

function App() {
  const [session, setSession] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) {
      fetchPosts();
    }
  }, [session]);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select(
          `
          *,
          user:users(name, avatar_url),
          likes:likes(count),
          comments:comments(count)
        `,
        )
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (postId) => {
    try {
      const { error } = await supabase.from('likes').insert({ post_id: postId });

      if (error) throw error;
      fetchPosts();
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  if (!session) {
    return <AuthForm />;
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <main className='max-w-2xl mx-auto px-4 py-8'>
        <CreatePost />
        {loading ? (
          <div className='text-center'>Loading posts...</div>
        ) : (
          <PostList posts={posts} onLike={handleLike} />
        )}
      </main>
    </div>
  );
}

export default App;
