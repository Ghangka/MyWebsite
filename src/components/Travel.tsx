// import tictactoe from "../assets/tictactoe.png";
// import phPerfect from "../assets/phPerfect.png";
// import toDo from "../assets/ToDo.png";

// const images = [
//   {
//     id: 1,
//     name: "pHPerfect",
//     technologies: "TypeScript, Python, React Native",
//     image: phPerfect,
//     github: "https://github.com/Riya-Anadkat/pHPerfect",
//   },
//   {
//     id: 2,
//     name: "To Do App",
//     technologies: "TypeScript, HTML, CSS",
//     image: toDo,
//     github: "https://github.com/Ghangka/To-Do-App",
//   },
//   {
//     id: 3,
//     name: "TicTacToe Game",
//     technologies: "JavaScript, HTML, CSS",
//     image: tictactoe,
//     github: "https://github.com/Ghangka/Javascript-Projects",
//   },
// ];

export default function Travel() {
  return (
    <div className="bg-[#F5F2EC] text-[#525252] py-20" id="travel">
      <h1>Hello</h1>
      {/* <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="bg-[#525252] p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={image.image}
                alt={image.name}
                className="rounded-lg mb-4 
              w-full h-48 object-cover"
              />
              <h3 className="text-2xl text-white font-bold mb-2">
                {image.name}
              </h3>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
