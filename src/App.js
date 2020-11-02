const App = () => {

  const getWeather = async () => {
    const response = await fetch(`//api.openweathermap.org/data/2.5/weather?q=London&appid=ed2da20037c4b8ee5881791f4fe6aa0d`, {mode: 'cors'})
    const data = await response.json()
    console.log(data)
  }

  getWeather()

  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
}

export default App;