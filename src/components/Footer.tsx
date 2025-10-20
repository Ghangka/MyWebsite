import { Link } from "react-router-dom";
import linkedInIcon from "../assets/linkedInIcon.png";
import githubIcon from "../assets/githubIcon.png";

export default function Footer() {
  return (
    <>
      <nav className="bg-[#A9C4E2] text-[#525252] p-3 px-8 md:px-16 lg:px-24">
        <div className="container p-2 flex justify-center md:justify-between items-center">
          <Link to="/" className="hover:text-[#598CBE]">
            <div className="text-[#4878A7] text-2xl font-bold hidden md:inline">
              Ghangka S.
            </div>
            <p className="text-sm pt-2 dark:text-[#525252]">
              © {new Date().getFullYear()} Ghangka. Built with React &
              TypeScript.
            </p>
          </Link>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/ghangka/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img src={linkedInIcon} alt="LinkedIn" className="h-7 w-7" />
            </a>
            <a
              href="https://github.com/Ghangka"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img src={githubIcon} alt="GitHub" className="h-7 w-7" />
            </a>
          </div>
          {/* <button
            className="bg-[#598CBE] text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Contact Me
          </button> */}
        </div>
      </nav>
    </>
  );
}
