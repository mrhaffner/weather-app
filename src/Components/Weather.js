import React from 'react';

const Weather = (props) => {
    const { weather } = props

    const kToF = (k) => (k - 273.15) * 9/5 + 32

    return (
        <div>
            <p>Current Temp: {kToF(weather.temp)}</p>
            <p>Today's High: {kToF(weather.temp_max)}</p>
            <p>Today's Low: {kToF(weather.temp_min)}</p>
            <p>Humidity: {weather.humidity}</p>
            <p>Wind Speed: {weather.wind_speed}</p>
            <p>Weather Description: {weather.description}</p>
        </div>
    );
};

export default Weather;