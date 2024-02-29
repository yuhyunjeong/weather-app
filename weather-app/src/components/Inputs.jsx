import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Inputs = () => {
  return (
    <div className="search">
      <input type="text" className="input" />
      <IoSearch size={25} className="search-icon" />
      <FaLocationDot size={25} className="location-icon" />
    </div>
  );
};

export default Inputs;
