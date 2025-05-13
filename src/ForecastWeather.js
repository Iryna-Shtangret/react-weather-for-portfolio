import { useState } from "react";
import axios from "axios";

export default function ForecastWeather(props) {
  const [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function refreshForecast(response) {
    console.log(response.data.daily);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function requestForecast() {
    const apiKey = "dboef2d023e8b54bffat4b762d81356c";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
    axios.get(apiUrl).then(refreshForecast);
  }

  if (loaded) {
    return (
      <div className="ForecastWeather">
        <div className="forecast d-flex justify-content-between">
          {days.map(function (day, index) {
            if (index < 5) {
              return (
                <div className="text-center" key={index}>
                  <div>{day}</div>
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="icon forecast"
                  />
                  <div>
                    {Math.round(forecast[index].temperature.maximum)}°{" "}
                    {Math.round(forecast[index].temperature.minimum)}°
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    requestForecast();
    return "Loading..";
  }
}
