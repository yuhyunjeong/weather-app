import React from "react";
import City from "./City";
import Inputs from "./Inputs";
import TimeAndLocation from "./TimeAndLocation";
import TemperatureAndDetails from "./TemperatureAndDetails";
import Forecast from "./Forecast";

const Background = ({ weather }) => {
  console.log("weather:", weather);

  return (
    <div className="container">
      <div className="display">
        <City />
        <Inputs />
        <TimeAndLocation weather={weather} />
        <TemperatureAndDetails weather={weather} />
      </div>
    </div>
  );
};

export default Background;
