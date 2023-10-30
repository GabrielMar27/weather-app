import React from "react";
const WeatherCard = (props) => {
  return (
    <>
      {" "}
      {props.weatherData ? (
        <>
          <h2>{props.weatherData.name}</h2>
          <p>
            Temperature: {props.weatherData.main.temp}
            {props.scale === "metric" ? <>°C</> : <>°F</>}
          </p>
          <p>Description: {props.weatherData.weather[0].description}</p>
          <p>
            Feels like : {props.weatherData.main.feels_like}{" "}
            {props.scale === "metric" ? <>°C</> : <>°F</>}
          </p>
          <p>Humidity : {props.weatherData.main.humidity}%</p>
          <p>Pressure : {props.weatherData.main.pressure}</p>
          <p>Wind Speed : {props.weatherData.wind.speed}m/s</p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </>
  );
};
export default WeatherCard;
