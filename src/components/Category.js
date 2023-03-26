import React from "react";
import { categories } from "../FoodApi/FoodApi";

const Category = () => {
  return (
    <div className="px-2 lg:px-12 max-w-[1640px] py-12 m-auto">
      <h1 className="text-orange-400 font-bold text-4xl text-center pb-12">
        Top Rated Category
      </h1>
      {/* Categories  */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg p-4 flex justify-between items-center cursor-pointer"
          >
            <h2 className="font-bold sm:text-xl">{cat.name}</h2>
            <img className="w-20" src={cat.image} alt={cat.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
