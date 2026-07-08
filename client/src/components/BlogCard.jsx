import { Link } from "react-router-dom";
import API from "../api/blogApi";

function BlogCard({ id, title, author, description }) {

  const handleDelete = async (id) => {
    try {
      await API.delete(`/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-[#1e293b] rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition duration-300 border border-gray-700">

      <h2 className="text-2xl font-bold text-cyan-400">
        {title}
      </h2>

      <p className="text-gray-400 mt-3">
        {description}
      </p>

      <div className="mt-6 flex justify-between items-center">
        <span className="text-sm text-gray-500">
          By {author}
        </span>

        <div className="flex items-center gap-4">
          <Link
            to={`/blog/${id}`}
            className="text-cyan-400 hover:text-cyan-300"
          >
            Read More →
          </Link>

          <Link
            to={`/edit/${id}`}
            className="text-yellow-400 hover:text-yellow-300"
          >
            Edit
          </Link>

          <button
            onClick={() => handleDelete(id)}
            className="text-red-500 hover:text-red-400"
          >
            Delete
          </button>
        </div>
      </div>

    </div>
  );
}

export default BlogCard;