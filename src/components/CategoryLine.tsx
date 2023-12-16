import React from "react";

const CategoryLine = ({ category }: { category: string }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="border-t border-gray-400 w-16 mr-4"></div>
      <span className="text-lg font-light">{category.toUpperCase()}</span>
      <div className="border-t border-gray-400 w-16 ml-4"></div>
    </div>
  );
};

export default CategoryLine;
