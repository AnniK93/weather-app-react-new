import React, { useState } from "react";

import "./Search.css";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function showWeather(response) {
    let cityName = response.data.name;
    setMessage(`${cityName}`);
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "6697611895f9d8bb5ac23403332f6cdd";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(url).then(showWeather);

    if (city.length > 0) {
      setMessage(`${city}`);
    } else {
      alert(`Please type the name of a city`);
    }
  }

  function handlePosition(position) {
    console.log(position);
    let lat = `${position.coords.latitude}`;
    let lon = `${position.coords.longitude}`;
    let apiKey = "6697611895f9d8bb5ac23403332f6cdd";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showWeather);
  }

  function searchCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(handlePosition);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function searchMoscow(event) {
    event.preventDefault();
    let apiKey = "6697611895f9d8bb5ac23403332f6cdd";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=moscow&appid=${apiKey}&units=${units}`;
    setMessage(`Moscow`);

    axios.get(apiUrl).then(showWeather);
  }
  function searchBerlin(event) {
    event.preventDefault();
    let apiKey = "6697611895f9d8bb5ac23403332f6cdd";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=${apiKey}&units=${units}`;
    setMessage(`Berlin`);

    axios.get(apiUrl).then(showWeather);
  }
  function searchLondon(event) {
    event.preventDefault();
    let apiKey = "6697611895f9d8bb5ac23403332f6cdd";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}&units=${units}`;
    setMessage(`London`);

    axios.get(apiUrl).then(showWeather);
  }
  function searchNewYork(event) {
    event.preventDefault();
    let apiKey = "6697611895f9d8bb5ac23403332f6cdd";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=new+york&appid=${apiKey}&units=${units}`;
    setMessage(`New York`);

    axios.get(apiUrl).then(showWeather);
  }

  let cityArray = [
    "Hongkong",
    "Kuala Lumpur",
    "Pune",
    "Berlin",
    "Paris",
    "Rome",
    "Bangkok",
    "Antananarivo",
    "Cairo",
    "Madrid",
    "Lima",
    "Beijing",
    "Tokyo",
    "Sydney",
    "Wellington",
    "Cardiff",
    "Delhi",
    "Caracas",
    "Vilnius",
    "Minsk",
    "Lomé",
    "Ouagadougou",
    "Kaunas",
    "Montreal",
    "Sherbrooke",
    "Calgary",
    "Louisiana",
    "Chicago",
    "Brasilia",
    "Lisbon",
    "Riga",
    "Stockholm",
    "Helsinki",
    "Singapore",
    "New York",
    "Los Angeles",
    "San Francisco",
    "Mexico City",
    "Taipeh",
    "Adelaide",
    "Brighton",
    "Dortmund",
    "Dijon",
    "Montpellier",
    "Barcelona",
    "Canberra",
    "Kabul",
    "Tirana",
    "Dhaka",
    "Brussels",
    "Vienna",
    "Munich",
    "Buenos Aires",
    "Baku",
    "Sarajevo",
    "Sofia",
    "Yaoundé",
    "Kinshasa",
    "Ottawa",
    "Phnom Penh",
    "Havana",
    "Quito",
    "Tallinn",
    "Addis Ababa",
    "Libreville",
    "Tbilisi",
    "Accra",
    "Athens",
    "Budapest",
    "Reykjavik",
    "Jakarta",
    "Nairobi",
    "Bishkek",
    "Tripoli",
    "Valletta",
    "Monaco",
    "Windhoek",
    "Cape Town",
    "Pyongyang",
    "Belfast",
    "Oslo",
    "Muscat",
    "Islamabad",
    "Doha",
    "Riyadh",
    "Mogadishu",
    "Seoul",
    "Nuuk",
    "Bern",
    "Zurich",
    "Damascus",
    "Jerusalem",
    "Ankara",
    "Montevideo",
    "Vatican City",
    "Hanoi",
    "Lusaka",
  ];

  function searchRandomLocation(event) {
    event.preventDefault();
    let randomCity = cityArray[Math.floor(Math.random() * cityArray.length)];
    let apiKey = "6697611895f9d8bb5ac23403332f6cdd";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${randomCity}&appid=${apiKey}&units=${units}`;
    setMessage(`${randomCity}`);

    axios.get(apiUrl).then(showWeather);
  }

  let now = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // let day = now.getDay();
  let currentDay = days[now.getDay()];
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let currentTime = `${hours}:${minutes}`;

  let header = (
    <header>
      <div className="citynames">
        <div className="row">
          <div className="col cityname">
            <p>
              <a href="link" onClick={searchMoscow}>
                Moscow
              </a>
            </p>
          </div>
          <div className="col cityname">
            <p>
              <a href="link" onClick={searchBerlin}>
                Berlin
              </a>
            </p>
          </div>
          <div className="col cityname">
            <p>
              <a href="link" onClick={searchLondon}>
                London
              </a>
            </p>
          </div>
          <div className="col cityname">
            <p>
              <a href="link" onClick={searchNewYork}>
                New York
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
  let forecast = <h3>Forecast for next 6 days goes here eventually</h3>;
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <button type="Submit">Search</button>
      <button type="Submit" onClick={searchCurrentLocation}>
        📍 Current location
      </button>
      <button type="Submit" onClick={searchRandomLocation}>
        🗺 Random location
      </button>
    </form>
  );

  if (loaded) {
    return (
      <body>
        <div className="container">
          {header}
          {form}
          <h2 className="message">{message}</h2>

          <div className="row">
            <h5 className="lastUpdate">Last update:</h5>
          </div>
          <div className="row">
            <div className="col">
              <h4>
                {currentDay} {currentTime}
              </h4>
              <h4 className="description">{weather.description}</h4>
              <h2>
                <img src={weather.icon} alt={weather.description} />
                <span className="currentDegrees">
                  {Math.round(weather.temperature)}
                </span>
                <span className="unit">°C</span>
              </h2>
            </div>
            <div className="col">
              <h4>Humidity: {weather.humidity}%</h4>
              <h4>Wind: {weather.wind}m/sec</h4>
            </div>
          </div>
          <footer>
            <p>
              <a href="https://github.com/AnniK93/weather-app-react-new">
                Open source code
              </a>{" "}
              by Anni
            </p>
          </footer>
        </div>
      </body>
    );
  } else {
    return (
      <body>
        <div className="container">
          {header}
          {form}
          <footer>
            <p>
              <a href="https://github.com/AnniK93/weather-app-react-new">
                Open source code
              </a>{" "}
              by Anni
            </p>
          </footer>
        </div>
      </body>
    );
  }
}
