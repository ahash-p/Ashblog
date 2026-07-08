function ViewBlog() {
  return (
    <div className="min-h-screen px-6 py-12 max-w-4xl mx-auto">

      <h1 className="text-5xl font-bold text-cyan-400">
        Learning React
      </h1>

      <div className="mt-4 text-gray-400">
        By <span className="text-white">Ahash</span> • July 2026
      </div>

      <div className="mt-10 bg-[#1e293b] p-8 rounded-2xl leading-8 text-lg">
        React is a JavaScript library for building user interfaces.
        In this blog, we'll explore components, props, state,
        hooks, and how React works with modern frontend development.
      </div>

    </div>
  );
}

export default ViewBlog;