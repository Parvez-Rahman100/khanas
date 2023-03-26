import React from "react";
import foods from "../imgs/foods.jpg";

const Hero = () => {
  return (
    <div className="px-2 lg:px-12 max-w-[1640px] mx-auto py-12">
      <div className=" max-h-[500px] relative">
        {/* Overlay Here  */}
        <div className=" w-full h-full absolute text-gray-200 max-h-[500px] flex flex-col justify-center bg-black/40">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Find <span className=" text-orange-700">Your</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Best <span className=" text-orange-700">Khanas </span>
          </h1>
        </div>
        <img
          className=" w-full max-h-[500px] object-cover"
          src={foods}
          alt="foods"
        />
      </div>
    </div>
  );
};

export default Hero;
