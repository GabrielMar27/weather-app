import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [scale, setScale] = useState("metric");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(city, scale);
    console.log(scale);
  };

  const handleChange = (event) => {
    if (event.target.name === "city") {
      setCity(event.target.value);
    } else if (event.target.name === "scale") {
      setScale(event.target.value);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="city"
          value={city}
          onChange={handleChange}
          placeholder="Enter a city"
        />
        <div>
          <input
            type="radio"
            name="scale"
            value="metric"
            checked={scale === "metric"}
            onChange={handleChange}
          />{" "}
          Metric
          <input
            type="radio"
            name="scale"
            value="imperial"
            checked={scale === "imperial"}
            onChange={handleChange}
          />{" "}
          Imperial
        </div>
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};

export default SearchBar;
