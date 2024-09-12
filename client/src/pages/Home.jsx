import CallToAction from "../components/CallToAction";
import Features from "../components/Feature";
import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { Spinner } from "flowbite-react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?limit=3`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        setRecentPosts(data.posts);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchRecentPosts();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  return (
    <div>
      <div>
        <Hero />
      </div>

      <div>
        <Features />
      </div>
      <div>
        <CallToAction />
      </div>

      <div className='flex flex-col justify-center items-center mb-5'>
      {/* <p className="text-lg text-blue-500 mb-4 mt-3">Recent Added Posts</p> */}
      <h2 className="text-4xl font-bold mb-12 mt-8">Read About Recent Added Posts</h2>
        <div className='flex flex-wrap gap-5 mt-5 justify-center'>
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
    </div>
  );
}
