import { useState } from "react";
import "./Weather.css";
import ToodayWeather from "./ToodayWeather";
import ForecastWeather from "./ForecastWeather";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [newCity, setNewCity] = useState(props.city);

  function refreshWeather(response) {
    setWeatherData({
      ready: true,
      temp: response.data.temperature.current,
      city: response.data.city,
      date: response.data.time,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      coord: response.data.coordinates,
      icon: response.data.condition.icon_url,
    });
  }

  function searchWeather() {
    const apiKey = "dboef2d023e8b54bffat4b762d81356c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${newCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
  }

  function search(event) {
    event.preventDefault();
    searchWeather();
  }

  function handleChange(event) {
    setNewCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={search}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a sity.."
                className="inputSearch w-100"
                name="inputFild"
                onChange={handleChange}
                autoFocus
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                name="submitBut"
                className="inputSubmit btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <ToodayWeather infoWeather={weatherData} />
        <ForecastWeather coordinates={weatherData.coord} />
      </div>
    );
  } else {
    searchWeather();
    return "Loading...";
  }
}
