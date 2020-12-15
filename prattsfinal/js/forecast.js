const forecastapiURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.5083&lon=-86.945&units=imperial&appid=227e4757b36ec134543f08b141699474'

fetch(forecastapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
   
 
const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));


const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let day = 0;
forecast.forEach(x => {
  if (day < 3){
    const d= new Date(x.dt_txt);
    const imagesrc = 'https://openweathermap.org/img/w/' + x.weather[0].icon + '.png';
    document.getElementById(`day${day+1}`).textContent = weekdays[d.getDay()];
    document.getElementById(`temp${day+1}`).textContent = Math.round(x.main.temp);
    document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById(`icon${day+1}`).setAttribute('alt', x.weather[0].description);
    day++;}

})

  });