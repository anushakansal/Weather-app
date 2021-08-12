import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Weather from './Components/Weather'

export default function App() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const getWeatherData = () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        const result = await axios.get(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        setWeather(result.data);
        console.log(result.data);
      });
    }

    getWeatherData();
  }, []);

  return (
    <div className="App">
      {(typeof weather.main != 'undefined') ? (
        <Weather weatherData={weather}/>
      ): (
        <div></div>
      )}
      
    </div>
  );
}
