import React from "react";
import { FaMapMarkerAlt, FaAngleDown, FaRegUser } from "react-icons/fa";

function UserInfo() {
  return (
    <div className="flex justify-between items-center">
      <div className="bg-green-600 rounded-full p-2">
        <FaMapMarkerAlt size="25" color="white" />
      </div>
      <div className="flex flex-col grow px-4">
        <div className="flex items-center">
          <span className="font-bold text-xl">Home</span> <FaAngleDown />
        </div>
        <div>
          <span className="text-sm">Karol Bagh, New Delhi</span>
        </div>
      </div>
      <div>
        <div className="bg-green-400 rounded-full p-2">
          <FaRegUser size="25" />
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
