export default function Home() {
  return (
    <div className="bg-white text-black text-center py-16">
      <h1 className="text-4xl font-bold">
        Hi! I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Ghangka Shanmugeswaran
        </span>
        ,
      </h1>
      <h1 className="text-4xl font-bold">Front End Software Developer</h1>
      <p className="mt-4 text-lg text-gray-500">
        I specialize in responsive web development as well as UI/UX designs. I'm
        currently seeking new grad roles.
      </p>
      <div className="mt-8 space-x-4">
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Contact Me
        </button>
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Resume
        </button>
      </div>
    </div>
  );
}
