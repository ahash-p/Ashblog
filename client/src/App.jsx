import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import ViewBlog from "./pages/ViewBlog";
import EditBlog from "./pages/EditBlog";

function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen bg-[#0f172a] text-white">

        <Navbar />

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/create" element={<CreateBlog />} />
  <Route path="/blog/:id" element={<ViewBlog />} />
  <Route path="/edit/:id" element={<EditBlog />} />
</Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;