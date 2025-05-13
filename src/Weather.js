import { useState } from "react";
import "./Weather.css";
import axios from "axios";
import CorrectDate from "./CorrectDate";
import ForecastWeather from "./ForecastWeather";

export default function Weather(props) {
  //debugger;

  const [weatherData, setWeatherData] = useState({ ready: false });
  const [newCity, setNewCity] = useState(props.city);

  function refreshWeather(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temp: response.data.temperature.current,
      city: response.data.city,
      date: response.data.time,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
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

        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <CorrectDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>

        <div className="row mt-3">
          <div className="col-7 d-flex">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="icon weather"
            />
            <div className="temperature">{Math.round(weatherData.temp)}</div>
            <div className="unit">°C</div>
          </div>
          <div className="col-5">
            <ul>
              <li> Humidity: {weatherData.humidity}%</li>
              <li> Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
        <ForecastWeather />
      </div>
    );
  } else {
    searchWeather();
    return "Loading...";
  }
}
