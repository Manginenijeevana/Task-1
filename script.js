const apiKey = '396ea72da0b12ff1ae85f84cbce6330c'; // Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById('cityInput').value;
  if (!city) {
    alert('Please enter a city name.');
    return;
  }

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      const weatherCard = document.getElementById('weatherData');
      if (data.cod !== 200) {
        weatherCard.innerHTML = `<p>${data.message}</p>`;
        return;
      }

      weatherCard.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡️ Temp: ${data.main.temp} °C</p>
        <p>🌤️ Weather: ${data.weather[0].main}</p>
        <p>💨 Wind: ${data.wind.speed} m/s</p>
      `;
    })
    .catch(error => {
      document.getElementById('weatherData').innerHTML = `<p>Error fetching data</p>`;
      console.error('Error:', error);
    });
}
