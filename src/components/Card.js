import React from "react";

const Card = ({ data }) => {
  const { p1, p2, img } = data;
  console.log(img);
  return (
    <div>
      <div className=" rounde-xl relative ">
        {/* Overlay Here  */}
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-gray-200">
          <p className=" font-bold text-2xl px-2 pt-4">{p1}</p>
          <p className=" px-2">{p2}</p>
          <button className="ml-2 button border-white border p-3 rounded-xl bg-white text-black font-bold absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className=" max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={img}
          alt="burger"
        />
        {console.log(img)}
      </div>
    </div>
  );
};

export default Card;
