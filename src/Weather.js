import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a sity"
              className="w-100"
              autoFocus
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Tuesday 10:00</li>
        <li>Fog</li>
      </ul>

      <div className="row">
        <div className="col-6 d-flex">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="icon weather"
          />
          <div>21°C</div>
        </div>
        <div className="col-6">
          <ul>
            <li> Precipitation: 13%</li>
            <li> Humidity: 72%</li>
            <li> Wind: 19 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
