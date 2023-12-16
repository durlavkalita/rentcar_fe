import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div className="relative flex items-center">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
        <FaSearch color="green" />
      </div>

      {/* Input Element */}
      <input
        type="text"
        className="pl-8 pr-12 py-2 border rounded-xl w-full focus:outline-none focus:border-blue-500"
        placeholder="Search cars or bikes"
      />

      {/* Filter Button */}
      <button className="absolute inset-y-0 right-0 px-4 py-2 bg-gray-500 text-white rounded-xl">
        <div className="flex items-center">
          <FaFilter />
          <span className="ml-2">Filter</span>
        </div>
      </button>
    </div>
  );
};

export default SearchBox;
