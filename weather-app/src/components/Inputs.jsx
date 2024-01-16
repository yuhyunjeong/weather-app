import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Inputs = () => {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize"
        />
        <IoSearch size={25} className="text-white cursor-pointer" />
        <FaLocationDot size={25} className="text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default Inputs;
