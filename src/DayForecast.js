export default function DayForecast(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let date = new Date(props.info * 1000);
  let day = date.getDay();
  return `${days[day]}`;
}
