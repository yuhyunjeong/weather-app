import React from "react";

const Forecast = ({ title }) => {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className=" text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="border my-2" />

      <div className="flex flex-row items-center justify-between text-white py-3">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            alt=""
            src="https://openweathermap.org/img/wn/10d@2x.png"
            className="w-12 my-1"
          />
          <p className="font-medium">3º</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            alt=""
            src="https://openweathermap.org/img/wn/10d@2x.png"
            className="w-12 my-1"
          />
          <p className="font-medium">3º</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            alt=""
            src="https://openweathermap.org/img/wn/10d@2x.png"
            className="w-12 my-1"
          />
          <p className="font-medium">3º</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            alt=""
            src="https://openweathermap.org/img/wn/10d@2x.png"
            className="w-12 my-1"
          />
          <p className="font-medium">3º</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            alt=""
            src="https://openweathermap.org/img/wn/10d@2x.png"
            className="w-12 my-1"
          />
          <p className="font-medium">3º</p>
        </div>
      </div>
    </div>
  );
};

export default Forecast;