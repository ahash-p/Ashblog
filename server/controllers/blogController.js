const Blog = require("../models/Blog");

// Get all blogs
const getBlogs = async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
};

// Get single blog
const getBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  res.json(blog);
};

// Create blog
const createBlog = async (req, res) => {
  const { title, author, description } = req.body;

  const blog = await Blog.create({
    title,
    author,
    description,
  });

  res.status(201).json(blog);
};

// Update blog
const updateBlog = async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(blog);
};

// Delete blog
const deleteBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);

  res.json({ message: "Blog deleted successfully" });
};

module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};