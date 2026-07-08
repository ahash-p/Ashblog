import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/blogApi";


function CreateBlog() {
  const navigate = useNavigate();

const [formData, setFormData] = useState({
  title: "",
  author: "",
  description: "",
});
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await API.post("/", formData);
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
  
  
    return (
    <div className="min-h-screen flex justify-center items-center px-6">
      <div className="w-full max-w-2xl bg-[#1e293b] p-8 rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold text-cyan-400 mb-8">
          Create Blog
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
  type="text"
  name="title"
  value={formData.title}
  onChange={handleChange}
  placeholder="Blog Title"
/>
<input
  type="text"
  name="author"
  value={formData.author}
  onChange={handleChange}
  placeholder="Author"
/>

          <textarea
  name="description"
  value={formData.description}
  onChange={handleChange}
  rows="8"
  placeholder="Write your blog..."
></textarea>

          <button
  type="submit"
  className="bg-cyan-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition"
>
  Publish Blog
</button>

</form>

</div>
</div>
  );
}

export default CreateBlog;