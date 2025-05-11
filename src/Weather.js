import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  function refreshWeather(response) {
    console.log(response.data);
    alert(response.data.temperature.current);
  }

  function searchSity(city) {
    let apikey = "dboef2d023e8b54bffat4b762d81356c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}`;
    axios.get(apiUrl).then(refreshWeather);
  }

  function requestWeather(event) {
    event.preventDefault();
    searchSity(props.city);
  }

  return (
    <div className="Weather">
      <form onSubmit={requestWeather}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a sity.."
              className="inputSearch w-100"
              autoFocus
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="inputSubmit btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
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
          <div className="temperature">21</div>
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
}
