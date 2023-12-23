import React from "react";
import { FaSearch, FaBell, FaArrowLeft } from "react-icons/fa";

const CarSearchBox = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <FaArrowLeft />
      </div>
      <div className="relative flex items-center">
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
          <FaSearch color="green" />
        </div>

        {/* Input Element */}
        <input
          type="text"
          className="pl-8 pr-12 py-1 border rounded-full w-full focus:outline-none focus:border-blue-500"
          placeholder="Search cars"
        />
      </div>
      <div>
        <FaBell />
      </div>
    </div>
  );
};

export default CarSearchBox;
