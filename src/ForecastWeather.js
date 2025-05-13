export default function ForecastWeather() {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //const apiKey = "b1a8336ff1e05b64da5625e4158fbea3";
  //let city = "Dnipro";
  //let apiUrl =``;

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
                <div>25°C 18°C</div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
