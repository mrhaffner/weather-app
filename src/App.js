import React, { useState, useEffect } from 'react';

const App = () => {

  const [weather, setWeather] = useState(null)

  useEffect(() => {
    getWeather()
  });



  const createWeather = (data) => {
    return {
      temp: data.main.temp,
      temp_max: data.main.temp_max,
      temp_min: data.main.temp_min,
      humidity: data.main.humidity,
      wind_speed: data.wind.speed,
      description: data.weather[0].description,
    }
  }

  const getWeather = async () => {
    const response = await fetch(`//api.openweathermap.org/data/2.5/weather?q=London&appid=ed2da20037c4b8ee5881791f4fe6aa0d`, {mode: 'cors'})
    const data = await response.json()
    setWeather(createWeather(data))
    
  }

  function log () {
    console.log(weather)
  } 

  return (
    <div>
      <h1>Hi</h1>
      <button onClick={log}>Get Weather</button>
    </div>
  );
}

export default App;