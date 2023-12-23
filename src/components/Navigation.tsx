import React from "react";
import { FaHome, FaCar, FaMotorcycle, FaRegUserCircle } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white py-2  text-black">
      <div className="flex justify-around">
        <a href="#" className="hover:text-green-800">
          <div className="flex flex-col items-center">
            <FaHome color="green" size="25"></FaHome>
            <span className="text-xs py-1">Home</span>
          </div>
        </a>
        <a href="#" className="hover:text-gray-400">
          <div className="flex flex-col items-center">
            <FaCar color="green" size="25"></FaCar>
            <span className="text-xs py-1">Car</span>
          </div>
        </a>
        <a href="#" className="hover:text-gray-400">
          <div className="flex flex-col items-center">
            <FaMotorcycle color="green" size="25"></FaMotorcycle>
            <span className="text-xs py-1">Bike</span>
          </div>
        </a>
        <a href="#" className="hover:text-gray-400">
          <div className="flex flex-col items-center">
            <FaRegUserCircle color="green" size="25"></FaRegUserCircle>
            <span className="text-xs py-1">Profile</span>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;