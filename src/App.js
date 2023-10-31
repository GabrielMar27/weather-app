import React, { useState } from "react";
import Weather from "./components/api";
import SearchBar from "./components/form";
import WeatherCard from "./components/renderData";
import HoldData from "./components/storedData";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = async (city) => {
    const result = await Weather(city);
    console.log(localStorage);

    setWeatherData(result);
  };

  return (
    <div>
      <h1>Weather Forecast App</h1>
      <SearchBar onSubmit={handleSubmit} />
      <WeatherCard weatherData={weatherData}  />
      <HoldData weatherData={weatherData}  />
    </div>
  );
};

export default App;
