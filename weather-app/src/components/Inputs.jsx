import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import getFormattedWeatherData from "../api/weatherAPI";

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = async () => {
    try {
      if (city !== "") {
        await getFormattedWeatherData({ q: city, units }); // Call the API to retrieve weather data using the city name and units
        setQuery({ q: city }); // Update the query to reflect the retrieved weather data and update the screen
      }
    } catch (error) {
      alert("Please check spelling or space.");
    }
  };

  return (
    <div className="search">
      <label htmlFor="inputField" className="sr-only">
        Input:
      </label>
      <input
        id="inputField"
        type="text"
        className="input"
        onChange={(e) => setCity(e.currentTarget.value)}
      />

      <IoSearch
        size={25}
        className="search-icon"
        onClick={handleSearchClick}
        aria-label="Search Icon"
      />
      {/*<FaLocationDot size={25} className="location-icon" />*/}
    </div>
  );
};

export default Inputs;
