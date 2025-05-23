import { useState, useEffect } from "react";
import ForecastWeatherDay from "./ForecastWeatherDay";
import axios from "axios";

export default function ForecastWeather(props) {
  const [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function refreshForecast(response) {
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
        <div className="forecast d-flex justify-content-between mt-0">
          {forecast.map(function (dayForecast, index) {
            if (index < 5) {
              return (
                <div className="text-center" key={index}>
                  <ForecastWeatherDay infoForecast={forecast[index]} />
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
