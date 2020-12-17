const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=20.5083&lon=-86.9458&units=imperial&appid=227e4757b36ec134543f08b141699474';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
document.getElementById('max-temp').textContent = Math.round(jsObject.main.temp);
document.getElementById('humidity').textContent = jsObject.main.humidity;
document.getElementById(`current-temp`).setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById(`current-temp`).setAttribute('alt', jsObject.weather[0].description);


  });
