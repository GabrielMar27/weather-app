import React, { useEffect, useState } from "react";
import { Button, Card } from "@mui/material";

const HoldData = (props) => {
  const storagedData = JSON.parse(localStorage.getItem("searchHistory"));
  const [data, setData] = useState(storagedData || []);

  const deleteData = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    localStorage.setItem("searchHistory", JSON.stringify(updatedData));
    console.log(`deleted ${index}`);
  };

  const clearAllData = () => {
    if (window.confirm("Are you sure you want to delete all searches?")) {
      localStorage.clear();
      setData([]);
    }
  };

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
      {data.length > 0 ? (
        <Button
          variant="contained"
          onClick={() => {
            clearAllData();
          }}
        >
          Delete all Data
        </Button>
      ) : (
        <>Loading Data...</>
      )}
      {data.map((weatherData, index) => (
        <Card variant="outlined" key={index}>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt="weather icon"
          ></img>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Feels Like: {weatherData.main.feels_like} °C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Pressure: {weatherData.main.pressure}</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <Button
            variant="contained"
            onClick={() => {
              if (
                window.confirm("Are you sure you want to delete this search?")
              )
                deleteData(index);
            }}
          >
            Delete
          </Button>
        </Card>
      ))}
    </>
  );
};

export default HoldData;
