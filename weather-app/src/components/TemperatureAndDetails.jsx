import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { SlDrop } from "react-icons/sl";
import { SiWindicss } from "react-icons/si";

const TemperatureAndDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-lg text-yellow-100">
        <p>Cloudy</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          alt=""
          src="https://openweathermap.org/img/wn/10d@2x.png"
          className="w-20"
        />
        <p className="text-5xl">5º</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <FaTemperatureThreeQuarters size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">3º</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <SlDrop size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">65%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <SiWindicss size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">11 km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
