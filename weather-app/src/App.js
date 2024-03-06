import "./App.css";
import getFormattedWeatherData from "./api/weatherAPI";
import Background from "./components/Background";
import { useState, useEffect } from "react";
import City from "./components/City";

function App() {
  const [query, setQuery] = useState({ q: "seoul" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className="App">
      {weather && (
        <Background
          weather={weather}
          setQuery={setQuery}
          units={units}
          setUnits={setUnits}
        />
      )}
    </div>
  );
}

export default App;
