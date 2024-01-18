import React from "react";

const TemperatureAndDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-lg text-yellow-100">
        <p>Cloudy</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src="https://openweathermap.org/img/wn/10d@2x.png"
          alt=""
          className="w-20"
        />
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
