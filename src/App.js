import React, { useState, useEffect } from "react";
import "./App.css";
// import Container from "react-bootstrap/Container";
import axios from "axios";
import { WeatherPage } from "./components/weather_page/WeatherPage.comp";
import { FormInput } from "./components/weather_page/FormInput.comp";

const Api_Key = "fc0fda9097721a9d859cf472cb500f44";

const initialState = {
  city: undefined,
  country: undefined,
  icon: undefined,
  main: undefined,
  celsius: undefined,
  temp_max: null,
  temp_min: null,
  description: "",
  error: false,
};

function App() {
  const [weatherData, setWeatherData] = useState(initialState);

  const weatherIcon = {
    ThunderStorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "",
  };

  // function to convert kelvin to celsius
  const calCelsius = (temp) => {
    let celsius = Math.floor(temp - 273);
    return celsius;
  };

  const getWeather = async (e) => {
    const api_url = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${Api_Key}`;
    axios.get(api_url).then((res) => {
      let response = res.data;
      console.log(response);
      setWeatherData({
        ...initialState,
        city: response.name,
        country: response.sys.country,
        main: response.weather[0].main,
        celsius: calCelsius(response.main.temp),
        temp_max: calCelsius(response.main.temp_max),
        temp_min: calCelsius(response.main.temp_min),
        description: response.weather[0].description,
      });
    });
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="App">
      <FormInput />
      <WeatherPage
        cityName={weatherData.name}
        tempCelsius={weatherData.celsius}
        temp_max={weatherData.temp_max}
        temp_min={weatherData.temp_min}
        description={weatherData.description}
      />
    </div>
  );
}

export default App;
