import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6">

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-7xl font-extrabold"
      >
        Welcome to{" "}
        <span className="text-cyan-400">AshBlog</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-400 text-xl mt-6 max-w-2xl"
      >
        A modern place to write, explore and share your ideas with the world.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10"
      >
        <Link
          to="/create"
          className="bg-cyan-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-300 transition"
        >
          Start Writing →
        </Link>
      </motion.div>

    </section>
  );
}

export default Hero;