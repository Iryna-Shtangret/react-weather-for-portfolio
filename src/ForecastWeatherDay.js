import "./ForecastWeatherDay.css";

export default function ForecastWeatherDay(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let date = new Date(props.infoForecast.time * 1000);
  let day = date.getDay();
  return (
    <div className="ForecastWeatherDay">
      <div>{days[day]}</div>
      <img
        src={props.infoForecast.condition.icon_url}
        alt={props.infoForecast.condition.description}
      />
      <div>
        {Math.round(props.infoForecast.temperature.maximum)}°{" "}
        {Math.round(props.infoForecast.temperature.minimum)}°
      </div>
    </div>
  );
}
