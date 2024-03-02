import React from "react";
import { formatToLocalTime } from "../api/weatherAPI";

const TimeAndLocation = ({ weather: { dt, timezone, name, country } }) => {
  return (
    <div className="time">
      <div className="location">{`${name}, ${country}`}</div>
      {/*<div className="localTime">{formatToLocalTime(dt, timezone)}</div>*/}
    </div>
  );
};

export default TimeAndLocation;
