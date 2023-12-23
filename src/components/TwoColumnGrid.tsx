import React from "react";

const TwoColumnGrid = ({
  data,
}: {
  data: { photo: string | null; text: string }[];
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center shadow-md rounded-lg"
        >
          <img
            src={item.photo ? item.photo : "/mercedes.jpg"}
            alt={`Item ${index}`}
            className="w-full h-32 object-cover mb-2 rounded-lg"
          />
          <p className="text-center">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default TwoColumnGrid;
