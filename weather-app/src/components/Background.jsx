import React from "react";
import City from "./City";
import Inputs from "./Inputs";
import TimeAndLocation from "./TimeAndLocation";
import TemperatureAndDetails from "./TemperatureAndDetails";
import Forecast from "./Forecast";

const Background = () => {
  return (
    <div className="rounded-md mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-amber-200 to-orange-300 h-fit shadow-xl shadow-gray-400">
      <City />
      <Inputs />
      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast title="hourly forecast" />
      <Forecast title="daily forecast" />
    </div>
  );
};

export default Background;
