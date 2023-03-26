import React from "react";
import Card from "./Card";

const Cards = () => {
  const data = [
    {
      id: 1,
      p1: "Order your Khana",
      p2: "Before stock out",
      img: require("../imgs/card1.jpg"),
    },
    {
      id: 2,
      p1: "Order your Khana",
      p2: "Before stock out",
      img: require("../imgs/card2.jpg"),
    },
    {
      id: 3,
      p1: "Order your Khana",
      p2: "Before stock out",
      img: require("../imgs/card3.jpg"),
    },
  ];

  return (
    <div className=" max-w-[1640px] mx-auto pb-12 grid md:grid-cols-3 gap-6">
      {/* Cards here  */}
      {data?.map((data) => (
        <Card key={data?.id} data={data} />
      ))}
    </div>
  );
};

export default Cards;
