import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#F5F2EC] text-[#525252] px-8 md:px-16 lg:px-24">
        <div className="container py-2 flex justify-center md:justify-between items-center">
          <div className="text-2xl font-bold hidden md:inline">Ghangka</div>
          <div className="space-x-6 text-[#525252]">
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-400">
              About Me
            </Link>
            <Link to="/project" className="hover:text-gray-400">
              Projects
            </Link>
            <Link to="/contact" className="hover:text-gray-400">
              Contact
            </Link>
            <Link to="/travel" className="hover:text-gray-400">
              Travel
            </Link>
          </div>
          <button
            className="bg-[#525252] text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-xs"
          >
            Contact Me
          </button>
        </div>
      </nav>
    </>
  );
}
