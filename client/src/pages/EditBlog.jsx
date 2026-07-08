import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api/blogApi";

function EditBlog() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
  });

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await API.get(`/${id}`);
      setFormData(res.data);
    };

    fetchBlog();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.put(`/${id}`, formData);

    navigate("/");
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-6">

      <div className="w-full max-w-2xl bg-[#1e293b] p-8 rounded-2xl">

        <h1 className="text-4xl font-bold text-yellow-400 mb-8">
          Edit Blog
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-[#0f172a]"
          />

          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-[#0f172a]"
          />

          <textarea
            rows="8"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-[#0f172a]"
          />

          <button
            type="submit"
            className="bg-yellow-400 text-black px-8 py-3 rounded-xl"
          >
            Update Blog
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditBlog;