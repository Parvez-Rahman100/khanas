import React from "react";

const Card = ({ data }) => {
  const { p1, p2, img } = data;

  return (
    <div className="rounde-xl relative">
      {/* Overlay Here  */}
      <div className="px-2 absolute w-full h-full bg-black/50 rounded-xl text-gray-200">
        <p className="font-bold text-2xl pt-4">{p1}</p>
        <p>{p2}</p>
        <button className="button p-3 rounded-xl bg-white text-black font-bold absolute bottom-4">
          Order Now
        </button>
      </div>
      <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        src={img}
        alt="foods"
      />
    </div>
  );
};

export default Card;
