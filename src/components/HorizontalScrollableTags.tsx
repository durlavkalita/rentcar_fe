import React from "react";

const HorizontalScrollableTags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap">
      <div className="inline-block">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="inline-block px-4 py-2 bg-gray-100 text-black rounded-full mr-2 cursor-pointer"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollableTags;
