import axios from "axios";

const API = axios.create({
  baseURL: "https://ashblog-backend.onrender.com/api/blogs",
});

export default API;