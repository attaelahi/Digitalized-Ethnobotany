import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard"; 

const Blog = () => {
  const { category } = useParams(); // Get the category from the URL
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      
      // Filter posts based on the category
      const filteredPosts = data.posts.filter(post => post.category.toLowerCase() === category.toLowerCase());
      setPosts(filteredPosts);
    };
    fetchPosts();
  }, [category]); // Refetch posts when category changes

  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        {/* <p className="text-lg text-blue-500 mb-4">Recent Added Posts</p> */}
        <h2 className="text-4xl font-bold mb-12">Read About Recent Added {category} Posts</h2>

        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <p>No posts available for {category}</p>
        )}
      </div>
    </section>
  );
};

export default Blog;
