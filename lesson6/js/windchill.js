
    var temp = document.getElementById('highTemp').textContent;
    var wind = document.getElementById('windSpeed').textContent;
    var wc = "N/A";
    
    if(temp <= 50 && wind >= 3){
    wc = 35.74 + .6215 * temp - 35.75 * Math.pow(wind, .16) +.4275 * temp * Math.pow(wind, .16);
    wc = Math.round(wc) + "°F"
}
    document.getElementById('windChill').innerHTML = wc ;