import React, { useState, useEffect } from 'react';
import Weather from './Components/Weather'
import Input from './Components/Input'

const App = () => {
  const [city, setCity] = useState('London')

  const [weather, setWeather] = useState(null)

  useEffect(() => {
    getWeather()
    console.log('getWeatherEffect')
  }, []);

  const kToF = (k) => (k - 273.15) * 9/5 + 32

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
    const response = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${city}&appid=ed2da20037c4b8ee5881791f4fe6aa0d`, {mode: 'cors'})
    const data = await response.json()
    setWeather(createWeather(data))
    console.log('getWeatherFunction')
  }

  function log () {
    console.log(weather)
  } 

  return (
    <div>
      <h1>Welcome to The World of Weather</h1>
      <Input setCity={setCity} />
      {!weather === null ? <Weather weather={weather} /> : null }
    </div>
  );
}

export default App;