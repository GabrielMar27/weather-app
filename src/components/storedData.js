import React, { useEffect, useState } from "react";

const HoldData = (props) => {
  const storagedData = JSON.parse(localStorage.getItem("searchHistory"));
  const [data, setData] = useState(storagedData || []);

  useEffect(() => {
    if (props.weatherData) {
      const isDuplicate = data.some(
        (item) => item.name === props.weatherData.name
      );

      if (!isDuplicate) {
        setData([...data, props.weatherData]);
      }
    }
  }, [props.weatherData]);

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(data));
  }, [data]);

  return (
    <>
      {data.map((weatherData, index) => (
        <div key={index}>
          <h2>{weatherData.name}</h2>
          <p>Temperatură: {weatherData.main.temp} °C</p>
          <p>Descriere: {weatherData.weather[0].description}</p>
          <p>Simte-te ca: {weatherData.main.feels_like} °C</p>
          <p>Umiditate: {weatherData.main.humidity}%</p>
          <p>Presiune: {weatherData.main.pressure}</p>
          <p>Viteză vânt: {weatherData.wind.speed} m/s</p>
        </div>
      ))}
    </>
  );
};

export default HoldData;
