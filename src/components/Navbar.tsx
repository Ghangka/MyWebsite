import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#A9C4E2] text-[#525252] p-3 px-8 md:px-16 lg:px-24">
        <div className="container py-2 flex justify-center md:justify-between items-center">
          <div className="text-[#4878A7] text-2xl font-bold hidden md:inline">
            Ghangka S.
          </div>
          <div className="space-x-6 text-[#525252]">
            <Link to="/" className="hover:text-[#598CBE]">
              Home
            </Link>
            {/* <Link to="#about" className="hover:text-[#598CBE]">
              About Me
            </Link> */}
            <Link to="/project" className="hover:text-[#598CBE]">
              Projects
            </Link>
            {/* <Link to="/contact" className="hover:text-[#598CBE]">
              Contact
            </Link> */}
            <Link to="/travel" className="hover:text-[#598CBE]">
              Travel
            </Link>
          </div>
          <button
            className="bg-[#598CBE] text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Contact Me
          </button>
        </div>
      </nav>
    </>
  );
}
