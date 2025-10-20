export default function About() {
  return (
    <div className="bg-[#F5F2EC] text-[#525252] pt-10" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>
        <p className="text-lg mx-auto text-left max-w-3xl mb-6">
          I specialize in building high-quality web applications using modern
          technologies like React, TypeScript, and Node.js. Based in Toronto,
          I’m currently seeking new grad opportunities where I can grow as an
          engineer and contribute to products that make a difference.
        </p>
        <p className="text-lg mx-auto text-left max-w-3xl mb-6">
          With a strong background in computer science and a keen eye for
          design, I enjoy creating solutions that are both functional and
          visually appealing. When I'm not coding, you can find me travelling!
        </p>
        <p className="text-lg mx-auto text-left max-w-3xl">
          Feel free to connect with me on{" "}
          <a
            className="hover:text-[#4878A7] transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ghangka/"
          >
            LinkedIn↗
          </a>
          !
        </p>
        {/* <h2
          className="text-2xl font-bold text-transparent bg-clip-text 
                bg-[#525252]"
        >
          Skills
        </h2>
        <ul>
          <li> * React / TypeScript</li>
          <li> * Node.js / Express</li>
          <li> * HTML / CSS / SASS</li>
          <li> * Git &amp; GitHub</li>
          <li> * REST APIs</li>
        </ul> */}
        {/* <div className="m-12 flex justify-between text-center"> */}
        {/* <div>
            <h3
              className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
            >
              3+
            </h3>
            <p>Years Experience</p>
          </div>
          <div>
            <h3
              className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
            >
              50+
            </h3>
            <p>Projects Completed</p>
          </div>
          <div>
            <h3
              className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
            >
              10+
            </h3>
            <p>Happy Clients</p>
          </div>
        </div> */}
        {/* <h2 className="text-2xl font-bold mb-3">Contact </h2> */}
      </div>
    </div>
  );
}
