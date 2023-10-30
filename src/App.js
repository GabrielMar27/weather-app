import React, { useState } from "react";
import Weather from "./components/api";
import SearchBar from "./components/form";
import WeatherCard from "./components/renderData";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [scale, setScale] = useState("metric");

  const handleSubmit = async (city, scale) => {
    const result = await Weather(city, scale);
    setScale(scale);
    setWeatherData(result);
  };

  return (
    <div>
      <h1>Weather Forecast App</h1>
      <SearchBar onSubmit={handleSubmit} />
      <WeatherCard weatherData={weatherData} scale={scale} />
    </div>
  );
};

export default App;
