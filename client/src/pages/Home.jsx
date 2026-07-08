import Hero from "../components/Hero";
import BlogCard from "../components/BlogCard";
import { useEffect, useState } from "react";
import API from "../api/blogApi";
function Home() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const res = await API.get();
      setBlogs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchBlogs();
}, []);

  return (
    <>
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-8">Latest Blogs</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {blogs.map((blog) => (
    <BlogCard
    key={blog._id}
    id={blog._id}
    title={blog.title}
    author={blog.author}
    description={blog.description}
/>
  ))}
</div>
      </section>
    </>
  );
}

export default Home;