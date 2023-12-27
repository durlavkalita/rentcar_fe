import React from "react";
import { FaHome, FaCar, FaMotorcycle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white py-2  text-black z-10">
      <div className="flex justify-around">
        <Link to={"/"} className="hover:text-green-800">
          <div className="flex flex-col items-center">
            <FaHome color="green" size="25"></FaHome>
            <span className="text-xs py-1">Home</span>
          </div>
        </Link>
        <Link to={"/car"} className="hover:text-gray-400">
          <div className="flex flex-col items-center">
            <FaCar color="green" size="25"></FaCar>
            <span className="text-xs py-1">Car</span>
          </div>
        </Link>
        <Link to={"/bike"} className="hover:text-gray-400">
          <div className="flex flex-col items-center">
            <FaMotorcycle color="green" size="25"></FaMotorcycle>
            <span className="text-xs py-1">Bike</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
