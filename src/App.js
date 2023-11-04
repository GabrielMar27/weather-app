// app.js
import React, { useState } from "react";
import Container from "./components/container"; // Importăm componenta Container corect
import Weather from "./components/api";
import SearchBar from "./components/form";
import WeatherCard from "./components/renderData";

import HoldData from "./components/storedData";
// Stiluri CSS
import "./style/general-style.css"; // Importul pentru stilurile CSS
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
    <div className="MainContainer">
      <div className="titleSearchBar">
        <h1>Weather Forecast App</h1>

        <SearchBar onSubmit={handleSubmit} />
      </div>
      <Grid
        className="mainContainer"
        container
        spacing={3}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 3 }}
      >
        <Container>
          {" "}
          <Grid item xs={4}>
            last Search
            <Item>
              <WeatherCard weatherData={weatherData} />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <>
              Search History
              <Item>
                <Paper style={{ maxHeight: 307, overflow: "auto" }}>
                  <List>
                    <HoldData weatherData={weatherData} />
                  </List>
                </Paper>
              </Item>
            </>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
};

export default App;
