import bigWaterfall from "../assets/Iceland/bigWaterfall.jpg";
import castleRocks from "../assets/Iceland/castleRocks.jpg";
import mountain from "../assets/Iceland/mountain.jpg";
import mountainReflection from "../assets/Iceland/mountainReflection.jpg";
import waterfall from "../assets/Iceland/waterfall.jpg";
import waterfallRocks from "../assets/Iceland/waterfallRocks.jpg";

import canoe from "../assets/Banff/canoe.jpg";
import lakeMorraine from "../assets/Banff/lakeMorraine.jpg";
import lakeMorraineCanoes from "../assets/Banff/lakeMorraineCanoes.jpg";
import mountRobson from "../assets/Banff/mountRobson.jpg";
import peytoLake from "../assets/Banff/peytoLake.jpg";
import waterfallJasper from "../assets/Banff/waterfallJasper.jpg";
import woods from "../assets/Banff/woods.jpg";

const images = [
  {
    id: 1,
    // caption: "pHPerfect",
    image: bigWaterfall,
  },
  {
    id: 2,
    // caption: "To Do App",
    image: castleRocks,
  },
  {
    id: 3,
    // caption: "TicTacToe Game",
    image: mountain,
  },
  {
    id: 4,
    image: mountainReflection,
  },
  {
    id: 5,
    image: waterfall,
  },
  {
    id: 6,
    image: waterfallRocks,
  },
  {
    id: 7,
    image: canoe,
  },
  {
    id: 8,
    image: lakeMorraine,
  },
  {
    id: 9,
    image: lakeMorraineCanoes,
  },
  {
    id: 10,
    image: mountRobson,
  },
  {
    id: 11,
    image: peytoLake,
  },
  {
    id: 12,
    image: waterfallJasper,
  },
  {
    id: 13,
    image: woods,
  },
];

export default function Travel() {
  return (
    <div className="bg-[#F5F2EC] text-[#525252] py-20" id="travel">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
        <h1 className="text-1xl  text-center mb-12">
          This is a gallery of some photos I took during my travels. Currently
          displayed are pictures from Banff National Park, Canada and Iceland.
        </h1>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={image.image}
                // alt={image.caption}
                className="
              w-full h-48 object-cover"
              />
              {/* <h3 className="text-1xl pr-4 text-white font-bold mb-2">
                {image.caption}
              </h3> */}
        {/* </div> */}
        {/* ))} */}
        {/* </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images
            .sort((a, b) => b.id - a.id)
            .map((photo, index) => (
              <div
                key={index}
                // className="aspect-[3/4] overflow-hidden rounded-2xl"
                className=" aspect-[3/4] overflow-hidden rounded-md hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105"
              >
                <a href={photo.image} target="_blank" rel="noopener noreferrer">
                  <img
                    src={photo.image}
                    // alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
