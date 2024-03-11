import React from 'react';
import '../css/weather.css';

const WeatherContainer = ({ weatherData }) => {
    if (!weatherData) {
        return <div></div>;
    }

  const { main, weather, wind } = weatherData;
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;

  const convertCelcuis = (temp) => {
    return (temp - 273.15).toFixed(2);
  };

  return (
    <div className="weather-container">
        <h1 className="centre">Weather Forcast in {weatherData.name}</h1>
        <img src={iconUrl} alt={weather[0].description} className="weather-icon" />
        <div>
            <p>Temperature: {convertCelcuis(main.temp)} °C</p>
            <p>Humidity: {main.humidity}%</p>
            <p>Wind Speed: {wind.speed} m/s</p>
        </div>
    </div>
  );
};

export default WeatherContainer;
