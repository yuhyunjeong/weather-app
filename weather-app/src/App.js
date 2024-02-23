import "./App.css";
import getWeatherData from "./api/weatherAPI";
import Background from "./components/Background";

function App() {
  const fetchWeather = async () => {
    const data = await getWeatherData("weather", { q: "seoul" });
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
