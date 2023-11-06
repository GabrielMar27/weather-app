import React from "react";
import "../style/weatherCard.css";
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
    <div className="weatherCard">
      {props.weatherData ? (
        <>
          <div className="title">
            {" "}
            <h2>
              {props.weatherData.name} ,{props.weatherData.sys.country}
              <br /> {days[zi.getDay()]}
            </h2>
            <div className="weatherIcon">
              <img
                src={`https://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`}
                alt="weather icon"
              ></img>
            </div>
          </div>
          <div className="Data">
            <h1>Details</h1>
            <p>Temperature: {props.weatherData.main.temp}°C</p>
            <p>Description: {props.weatherData.weather[0].description}</p>
            <p>Feels Like: {props.weatherData.main.feels_like}°C</p>
          </div>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherCard;
