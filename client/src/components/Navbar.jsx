import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black/60 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <Link
          to="/"
          className="text-3xl font-bold text-cyan-400 tracking-wide"
        >
          Ashblog
        </Link>

        <div className="flex gap-8 text-lg">

          <Link
            to="/"
            className="hover:text-cyan-400 duration-300"
          >
            Home
          </Link>

          <Link
            to="/create"
            className="bg-cyan-500 px-5 py-2 rounded-full hover:bg-cyan-400 duration-300 text-black font-semibold"
          >
            Create Blog
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;