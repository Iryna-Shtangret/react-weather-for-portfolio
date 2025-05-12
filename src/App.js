import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Kyiv" />
        <footer>
          This project was created by{" "}
          <a
            href="https://github.com/Iryna-Shtangret"
            target="_blank"
            rel="noreferrer"
          >
            Iryna Mrachkovska
          </a>
          , is open-source on GitHub and hosted on Netfly
        </footer>
      </div>
    </div>
  );
}
