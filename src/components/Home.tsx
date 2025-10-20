import About from "./About";
// import Footer from "./Footer";
import Projects from "./Projects";

export default function Home() {
  return (
    <div>
      <div className="bg-[#F5F2EC] text-[#525252] text-center pt-30">
        <div className="container mx-auto px-8 pb-5 md:px-16 lg:px-24">
          <h1 className="text-4xl mb-8 font-bold">
            Hi! I'm Ghangka, a Front-End Software Developer!
          </h1>
          {/* <p className="mt-4 text-lg text-center text-gray-700"> */}
          <p className="text-lg mx-auto text-left max-w-3xl text-gray-700">
            I'm a recent Computer Engineering graduate from the University of
            Waterloo with a passion for building impactful, user-focused
            software. I combine technical depth with a keen eye for design to
            craft responsive, high-quality web applications using React,
            TypeScript, and Node.js. My goal is to create digital experiences
            that are intuitive, accessible, and engaging.
          </p>
        </div>

        {/* <div className="mt-8 space-x-4"> */}
        {/* <button
          className="bg-[#598CBE] text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Contact Me
        </button> */}
        {/* <button
          className="bg-[#598CBE] text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Resume
        </button> */}
        {/* </div> */}
      </div>
      <About></About>
      <Projects></Projects>
    </div>
  );
}
