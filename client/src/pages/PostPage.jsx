import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'flowbite-react';
import { Link, useParams } from 'react-router-dom';
import CommentSection from '../components/CommentSection';
import PostCard from '../components/PostCard';

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (loading)
    return (
      <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <Spinner size='xl' />
      </div>
    );

  if (error)
    return (
      <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <p className='text-red-500 text-xl'>Error loading post</p>
      </div>
    );

  return (
    <main className='p-4 max-w-6xl mx-auto min-h-screen'>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="relative">
          <img
            src={post?.image}
            alt={post?.title}
            className='w-full h-[400px] object-cover'
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4">
            <h1 className='text-3xl font-bold text-white mb-2'>{post?.title}</h1>
            <div className='flex items-center space-x-4 text-white text-sm'>
              <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
              <span>{post && (post.content.length / 1000).toFixed(0)} mins read</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <Link to={`/search?category=${post?.category}`} className='mb-4 inline-block'>
            <Button color='gray' pill size='xs'>
              {post?.category}
            </Button>
          </Link>
          <div className='grid md:grid-cols-2 gap-4'>
            <div>
              <h3 className='text-lg font-semibold mb-2'>Details</h3>
              <ul className='space-y-2'>
                <li><strong>Locality:</strong> {post?.locality}</li>
                <li><strong>Family:</strong> {post?.family}</li>
                <li><strong>Local Name:</strong> {post?.localName}</li>
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-2'>Location</h3>
              <p><strong>Longitude:</strong> {post?.longitude}</p>
              <p><strong>Latitude:</strong> {post?.latitude}</p>
            </div>
          </div>
          <div className='prose max-w-none mt-6' dangerouslySetInnerHTML={{ __html: post?.content }}></div>
          {post?.image2 && (
            <img
              src={post.image2}
              alt={`${post.title} - Additional Image`}
              className='mt-6 w-full h-90 object-cover rounded-lg shadow-md'
            />
          )}
        </div>
      </div>
      
      <CommentSection postId={post?._id} />

      <div className='mt-12'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Recently Added</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
    </main>
  );
}