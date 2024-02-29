import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { SlDrop } from "react-icons/sl";
import { SiWindicss } from "react-icons/si";
import { iconUrlFromCode } from "../api/weatherAPI";

const TemperatureAndDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) => {
  return (
    <div>
      <div className="temperature">
        <p className="degree">{`${temp.toFixed()}º`}</p>
        <p className="icon">
          <img alt="" src={iconUrlFromCode(icon)} />
        </p>
        <p className="temp">{details}</p>
        <div className="details">
          <div className="real">
            <FaTemperatureThreeQuarters size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}º`}</span>
          </div>
          <div className="humidity">
            <SlDrop size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="wind">
            <SiWindicss size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()}km/h`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
