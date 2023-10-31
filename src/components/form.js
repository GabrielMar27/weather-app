import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [city, setCity] = useState("Galati");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(city);
  };

  const handleChange = (event) => {
    if (event.target.name === "city") {
      setCity(event.target.value);
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
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};

export default SearchBar;
