import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineCloseCircle,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className=" max-w-[1640px] mx-auto flex justify-between items-center ">
      {/* Left Side  */}
      <div className=" flex items-center">
        <div onClick={() => setMenu(!menu)} className=" cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className=" text-2xl sm:text-3xl lg:text-4xl px-2">
          Best{" "}
          <span className=" font-bold bg-black text-white rounded-xl px-2">
            Khanas
          </span>
        </h1>
        <div className=" hidden lg:flex items-center bg-gray-400 rounded-full p-1 text-[14px]">
          <p className=" bg-black text-white rounded-full p-1">Delivery</p>
          <p className=" p-2">Pickup</p>
        </div>
      </div>
      {/* Search Input  */}
      <div className=" bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className=" bg-transparent p-2 focus:outline-none w-full"
          type="text"
          placeholder="Search Your Foods Here"
        />
      </div>
      {/* Cart button Here  */}
      <button className=" bg-black text-white button md:flex items-center p-3 rounded-full">
        <BsFillCartFill size={20} className=" mr-2" /> Cart
      </button>
      {/* Mobile Menu  */}
      {/* Over lay  */}
      {menu ? (
        <div className=" bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer  */}
      <div
        className={
          menu
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineCloseCircle
          onClick={() => setMenu(!menu)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className=" text-2xl p-4">
          Best{" "}
          <span className="font-bold bg-black text-white rounded-xl px-1">
            Khanas
          </span>
        </h2>
        <nav>
          <ul className=" flex flex-col p-4 bg-black text-white rounded-sm">
            <li className=" text-xl py-4 flex items-center">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className=" text-xl py-4 flex items-center">
              <MdFavorite size={25} className="mr-4" />
              Favourites
            </li>
            <li className=" text-xl py-4 flex items-center">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className=" text-xl py-4 flex items-center">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className=" text-xl py-4 flex items-center">
              <AiFillTag size={25} className="mr-4" />
              Promotions
            </li>
            <li className=" text-xl py-4 flex items-center">
              <BsFillSaveFill size={25} className="mr-4" />
              Best One
            </li>
            <li className=" text-xl py-4 flex items-center">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
