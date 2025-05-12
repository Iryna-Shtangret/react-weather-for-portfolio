import { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  //debugger;

  const [temperature, setTemperature] = useState({ ready: false });
  const [city, setCity] = useState("Kyiv");

  function refreshWeather(response) {
    console.log(response.data.temperature.current);
    setTemperature({ ready: true, temp: response.data.temperature.current });
  }

  function searchWeather() {
    let apikey = "dboef2d023e8b54bffat4b762d81356c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}`;
    axios.get(apiUrl).then(refreshWeather);
  }

  function search(event) {
    event.preventDefault();
    searchWeather();
  }

  if (temperature.ready) {
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

        <h1>LvivLvivLviv</h1>
        <ul>
          <li>Tuesday 10:00</li>
          <li>Fog</li>
        </ul>

        <div className="row">
          <div className="col-7 d-flex">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="icon weather"
            />
            <div className="temperature">{temperature.temp}</div>
            <div className="unit">°C</div>
          </div>
          <div className="col-5">
            <ul>
              <li> Precipitation: 13%</li>
              <li> Humidity: 72%</li>
              <li> Wind: 19 km/h</li>
            </ul>
          </div>
        </div>
        <div className="forecast d-flex justify-content-between">
          <div className="text-center">
            <div>Mon</div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="icon forecast"
            />
            <div>25°C 18°C</div>
          </div>
          <div className="text-center">
            <div>Mon</div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="icon forecast"
            />
            <div>25°C 18°C</div>
          </div>
          <div className="text-center">
            <div>Mon</div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="icon forecast"
            />
            <div>25°C 18°C</div>
          </div>
          <div className="text-center">
            <div>Mon</div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="icon forecast"
            />
            <div>25°C 18°C</div>
          </div>
          <div className="text-center">
            <div>Mon</div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="icon forecast"
            />
            <div>25°C 18°C</div>
          </div>
        </div>
      </div>
    );
  } else {
    searchWeather();
    return "Loading...";
  }
}
