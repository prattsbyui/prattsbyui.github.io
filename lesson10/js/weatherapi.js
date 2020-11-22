const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=227e4757b36ec134543f08b141699474';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
  
document.getElementById('current-temp').textContent = jsObject.weather[0].description;
document.getElementById('max-temp').textContent = Math.round(jsObject.main.temp_max);
document.getElementById('humidity').textContent = jsObject.main.humidity;
document.getElementById('wind-speed').textContent = Math.round(jsObject.wind.speed);

var temp = jsObject.main.temp;
var wind = Math.round(document.getElementById('wind-speed').innerText);
var wc = "N/A"


if(temp <= 50 && wind >= 3.0){
wc = 35.74 + .6215 * temp - 35.75 * Math.pow(wind, .16) +.4275 * temp * Math.pow(wind, .16);
wc = Math.round(wc) + "°F";
}

document.getElementById('wind-chill').innerHTML = wc;

  });

  