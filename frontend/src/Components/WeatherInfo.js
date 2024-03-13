import React from 'react';
import '../css/weather.css';

const WeatherInfo = ({ weatherData }) => {
    if (!weatherData || weatherData == "No data available!!!") {
        return <div className="weather-container">No Data available, please try a different location</div>;
    }

  const { main, weather, wind } = weatherData;
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;

  const convertCelcuis = (temp) => {
    return (temp - 273.15).toFixed(2);
  };

  const convertWindSpeed = (speed) => {
    return (speed * 2.23694).toFixed(2);
};

  const getTime = () => {
    const currentTime = new Date();
    const localTimeMili = currentTime.getTime() + (weatherData.timezone * 1000);
    const options = { weekday: 'long', hour: '2-digit', minute: '2-digit', hour12: false };
    console.log(new Date(localTimeMili).toLocaleDateString(undefined, options));
    console.log(weatherData);
    return new Date(localTimeMili).toLocaleDateString(undefined, options);
    
  };

  return (
    <div className="weather-container">
        <div className="weather-info">
            <img src={iconUrl} alt={weather[0].description} className="weather-icon" />
            <div className="weather-details">
                <p>Temperature: {convertCelcuis(main.temp)} °C</p>
                <p>Humidity: {main.humidity}%</p>
                <p>Wind Speed: {convertWindSpeed(wind.speed)} mph</p>
            </div>
        </div>
        <div className="location-info">
          <div className="weather-details">
            <p>{weatherData.name}</p>
            <p>{getTime()}</p>
            <p>{weather[0].description}</p>
           </div>
        </div>
    </div>
);
};

export default WeatherInfo;
