import CorrectDate from "./CorrectDate";
import "./ToodayWeather.css";

export default function ToodayWeather(props) {
  return (
    <div className="ToodayWeather">
      <h1>{props.infoWeather.city}</h1>
      <ul>
        <li>
          <CorrectDate date={props.infoWeather.date} />
        </li>
        <li className="text-capitalize">{props.infoWeather.description}</li>
      </ul>
      <div className="row">
        <div className="col-7 d-flex">
          <img
            src={props.infoWeather.icon}
            alt={props.infoWeather.description}
          />

          <div className="temperature">
            {Math.round(props.infoWeather.temp)}
          </div>
          <div className="unit">°C</div>
        </div>
        <div className="col-5">
          <ul className="descriptionWeather">
            <li> Humidity: {props.infoWeather.humidity}%</li>
            <li> Wind: {props.infoWeather.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
