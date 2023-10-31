import React, { useState } from "react";
//components
import Weather from "./components/api";
import SearchBar from "./components/form";
import WeatherCard from "./components/renderData";
import HoldData from "./components/storedData";
//styles
import "./style/general-style.css";
//mUI styles

import Grid from "@mui/material/Grid";
import Item from "./components/item";
import { List, Paper } from "@mui/material";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = async (city) => {
    const result = await Weather(city);
    setWeatherData(result);
  };

  return (
    <div>
      <h1>Weather Forecast App</h1>

      <SearchBar onSubmit={handleSubmit} />
      <Grid
        container
        spacing={3}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={6}>
          <Item>
            <WeatherCard weatherData={weatherData} />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Paper style={{ maxHeight: 307, overflow: "auto" }}>
              <List>
                {" "}
                <HoldData weatherData={weatherData} />
              </List>
            </Paper>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
