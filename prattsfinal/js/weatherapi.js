const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=20.5083&lon=-86.9458&units=imperial&appid=227e4757b36ec134543f08b141699474';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
  
document.getElementById('current-temp').textContent = jsObject.weather[0].description;
document.getElementById('max-temp').textContent = Math.round(jsObject.main.temp);
document.getElementById('humidity').textContent = jsObject.main.humidity;
document.getElementById('wind-speed').textContent = Math.round(jsObject.wind.speed);


  });
