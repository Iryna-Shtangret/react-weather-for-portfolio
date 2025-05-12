export default function CorrectDate(props) {
  let nowDate = new Date(props.date * 1000);
  let day = nowDate.getDay();
  let hours = nowDate.getHours();
  let minutes = nowDate.getMinutes();
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${week[day]}, ${hours}:${minutes}`;
}
