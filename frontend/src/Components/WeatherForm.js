import React, { useState } from 'react';
import axios from 'axios';

import '../css/weather.css'; // CSS file for styling


function WeatherForm({ onSubmit }) {
    const [city, setCity] = useState('');

    const weatherChange = (data) => {
        setCity(data.target.value);
    };

    const sendWeather = async (data) => {
        data.preventDefault();

        try {
            const response = await axios.get(`http://localhost:8080/weather?city=${city}`);


            if (response.status === 200) {
                console.log("Weather data sent successfully");
                console.log(response.data);
                onSubmit(response.data);
            } else {
                console.log("Error, Weater data failed to send");
                onSubmit(false);
            }
            
        } catch (error) {
            console.log("Error: ", error);
        }
    };
    

    return (
        <div class="container">
            <form onSubmit={sendWeather}>
                <input
                    type="weather"
                    value={city}
                    onChange={weatherChange}
                    placeholder="Enter city name"
                    id="weather"
                    name="weather"
                />
                <button type="submit">Get Weather</button>
            </form>
        </div>
    );
}
export default WeatherForm;