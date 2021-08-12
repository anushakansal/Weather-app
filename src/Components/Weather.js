import React from 'react';
import moment from 'moment';
import './weather.css'


const Weather = ({ weatherData }) => {
    return (

        <div className="box">
            <div className="place">
                {weatherData.name}
            </div>
            <div className='day flex'>
                <p>Day: {moment().format('dddd')}</p>
                <p>Date: {moment().format('LL')}</p>
            </div>
            <div className="flex detbox">
                <div className="details">
                    <p>Temprature: {weatherData.main.temp} &deg;C</p>
                    <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                    <p>Sea Level: {weatherData.main.sea_level}</p>
                    <p>Weather: {weatherData.weather[0].main}</p>
                </div>
                <div className="details">
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                    <p>Visibility: {weatherData.visibility}</p>
                    <p>Description: {weatherData.weather[0].description}</p>
                </div>
            </div>
            
        </div>
    )
}
export default Weather;