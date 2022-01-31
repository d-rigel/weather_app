import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { WeatherPage } from "./components/weather_page/WeatherPage.comp";
import { FormInput } from "./components/weather_page/FormInput.comp";

function App() {
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
    loading: false,
  };
  const [weatherData, setWeatherData] = useState(initialState);

  // function to convert kelvin to celsius
  const calCelsius = (temp) => {
    let celsius = Math.floor(temp - 273);
    return celsius;
  };

  const getWeather = async (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_API_KEY);

    let country = e.target.elements.country.value;
    let city = e.target.elements.city.value;

    if (country && city) {
      const api_url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_API_KEY}`;
      const api_call = await axios.get(api_url);
      const response = await api_call.data;
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
        icon: response.weather[0].icon,
        loading: false,
      });
      e.target.elements.country.value = "";
      e.target.elements.city.value = "";
    } else {
      setWeatherData({
        ...initialState,
        error: true,
        loading: false,
      });
    }
  };

  return (
    <div className="App">
      <FormInput getWeather={getWeather} error={weatherData.error} />
      <WeatherPage
        cityName={weatherData.city}
        tempCelsius={weatherData.celsius}
        temp_max={weatherData.temp_max}
        temp_min={weatherData.temp_min}
        description={weatherData.description}
        weatherIcon={weatherData.icon}
        icon={weatherData.icon}
      />
    </div>
  );
}

export default App;
