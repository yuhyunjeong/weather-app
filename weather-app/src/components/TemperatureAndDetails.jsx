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
      <div className="flex items-center justify-center py-6 text-lg text-yellow-100">
        <p>{details}</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img alt="" src={iconUrlFromCode(icon)} className="w-20" />
        <p className="text-5xl">{`${temp.toFixed()}º`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <FaTemperatureThreeQuarters size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}º`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <SlDrop size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
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
