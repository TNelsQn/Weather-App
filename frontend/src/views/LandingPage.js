import React, { useState } from 'react';
import LandingBox from '../Components/LandingBox';
import WeatherForm from "../Components/WeatherForm";
import WeatherInfo from "../Components/WeatherInfo";

function LandingPage() {
    const [weatherData, setWeatherData] = useState(null);

    const handleWeatherSubmit = (weatherData) => {
      setWeatherData(weatherData);
    };

        return(
            <LandingBox>
                <WeatherForm onSubmit={handleWeatherSubmit}></WeatherForm>
                <WeatherInfo weatherData={weatherData}/>
            </LandingBox>
        );
}

export default LandingPage;