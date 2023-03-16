import React, { useState } from "react";
import { FoodApi } from "../FoodApi/FoodApi";

const Food = () => {
  const [foods, setFoods] = useState(FoodApi);
  // Filter Foods
  const filterType = (category) => {
    setFoods(
      foods.filter((item) => {
        return item.category === category;
      })
    );
  };

  // Filter By Price
  const filterPrice = (price) => {
    setFoods(
      foods.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className="max-w-[1640px] m-auto px-4">
      <h1 className="text-orange-800 font-bold text-center text-4xl">
        Top Khanas From Our Side.
      </h1>
      {/* Filter Row  */}
      <div className="flex flex-col lg:flex-row justify-between pb-12">
        {/* Filter Type  */}
        <div>
          <p className="font-bold text-gray-700">Khanas Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(foods)}
              className="button text-orange-400 border-orange-600 hover:bg-orange-400 hover:text-white m-1 border rounded-xl px-2 "
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="button text-orange-400 border-orange-600 hover:bg-orange-400 hover:text-white m-1 border rounded-xl px-2 "
            >
              Burger
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="button text-orange-400 border-orange-600 hover:bg-orange-400 hover:text-white m-1 border rounded-xl px-2 "
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="button text-orange-400 border-orange-600 hover:bg-orange-400 hover:text-white m-1 border rounded-xl px-2 "
            >
              Salad
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="button text-orange-400 border-orange-600 hover:bg-orange-400 hover:text-white m-1 border rounded-xl px-2 "
            >
              Chickens
            </button>
          </div>
        </div>
        {/* Filter Price  */}
        <div>
          <p className="font-bold text-gray-700">Khanas Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("$")}
              className="button text-orange-400 border-orange-600 hover:bg-orange-400 hover:text-white m-1 border rounded-xl px-2 "
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="button text-orange-400 border-orange-600 hover:bg-orange-400 hover:text-white m-1 border rounded-xl px-2 "
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="button text-orange-400 border-orange-600 hover:bg-orange-400 hover:text-white m-1 border rounded-xl px-2 "
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="button text-orange-400 border-orange-600 hover:bg-orange-400 hover:text-white m-1 border rounded-xl px-2 "
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display Foods  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-lg hover:scale-110 duration-150 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-md rounded-b-sm"
            />
            <div className="flex justify-between px-2 py-4 items-center">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-black text-white rounded-full px-2">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
