import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  return (
    <div className="search">
      <input
        type="text"
        className="input"
        onChange={(e) => setCity(e.currentTarget.value)}
      />
      <IoSearch size={25} className="search-icon" onClick={handleSearchClick} />
      <FaLocationDot size={25} className="location-icon" />
    </div>
  );
};

export default Inputs;
