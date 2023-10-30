//key:aea33a73ff77a9b2029fac06a50a7a88
import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = async (city, scale) => {
  const apiKey = "aea33a73ff77a9b2029fac06a50a7a88";
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${scale}&appid=aea33a73ff77a9b2029fac06a50a7a88`
    );

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default Weather;
