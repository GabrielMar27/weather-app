import React from "react";

const WeatherCard = (props) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let zi = new Date();
  return (
    <>
      {props.weatherData ? (
        <>
          <img
            src={`https://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}.png`}
            alt="weather icon"
          ></img>
          <h2>
            {props.weatherData.name} , {days[zi.getDay()]}
          </h2>

          <p>Temperature: {props.weatherData.main.temp}°C</p>
          <p>Description: {props.weatherData.weather[0].description}</p>
          <p>Feels Like: {props.weatherData.main.feels_like}°C</p>
          <p>Humidity: {props.weatherData.main.humidity}%</p>
          <p>Pressure: {props.weatherData.main.pressure}</p>
          <p>Wind Speed: {props.weatherData.wind.speed}m/s</p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </>
  );
};

export default WeatherCard;
