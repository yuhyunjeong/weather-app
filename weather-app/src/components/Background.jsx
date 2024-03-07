import React from "react";
import City from "./City";
import Inputs from "./Inputs";
import TimeAndLocation from "./TimeAndLocation";
import TemperatureAndDetails from "./TemperatureAndDetails";

const Background = ({ weather, setQuery, units, setUnits }) => {
  console.log("weather:", weather);

  return (
    <div className="container">
      <div className="display">
        <City setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        <TimeAndLocation weather={weather} />
        <TemperatureAndDetails weather={weather} />
      </div>
    </div>
  );
};

export default Background;
