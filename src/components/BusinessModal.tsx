import React from "react";
import { FaRegClock, FaStar } from "react-icons/fa";

type Business = {
  name: string;
  imageUrl: string | null;
  location: string;
  rating: string;
  distance: string;
  price: string;
  cars: string[];
};

function BusinessModal({ business }: { business: Business }) {
  const { name, imageUrl, location, rating, distance, price, cars } = business;
  return (
    <div className="">
      <div className="relative border rounded-xl">
        <img
          src={imageUrl ? imageUrl : "/mercedes.jpg"}
          alt={name}
          className="w-full rounded-xl"
        />

        <div className="absolute bottom-0 right-0 p-2 bg-white bg-opacity-50 rounded-md">
          <div className="flex items-center">
            <FaRegClock></FaRegClock> <span className="ml-1">{distance}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div>
          <p className="text-xl font-bold py-1">{name}</p>
        </div>
        <div className="flex bg-green-600 items-center py-1 px-2 rounded-md">
          <span className="mr-1 text-md font-semibold">{rating}</span>
          <FaStar color="yellow"></FaStar>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-md">{location}</p>
        </div>
        <div>
          <p className="font-semibold">Price range: {price}</p>
        </div>
      </div>
      <div className="mt-2">
        <span>Cars Available: {cars.join(", ")}</span>
      </div>
    </div>
  );
}

export default BusinessModal;
