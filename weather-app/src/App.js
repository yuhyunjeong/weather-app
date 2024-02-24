import "./App.css";
import getFormattedWeatherData from "./api/weatherAPI";
import Background from "./components/Background";

function App() {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData("weather", { q: "seoul" });
    console.log(data);
  };
  fetchWeather();

  return (
    <div className="App">
      <Background />
    </div>
  );
}

export default App;
