// API : https://openweathermap.org/api
// https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&appid=4081444b7b90198136fefe6ed4ccf35b&cnt=15
// https://api.openweathermap.org/data/2.5/forecast/daily?q=NOM_VILLE&cnt=14&mode=json&units=metric&lang=fr

// http://api.openweathermap.org/data/2.5/forecast/daily?q=paris&mode=JSON&units=metric&cnt=3&appid=4081444b7b90198136fefe6ed4ccf35b

// Clé api
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
// Url API
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_URL_NEW = "http://api.openweathermap.org/data/2.5/forecast/daily";
// Base source icon
const API_URL_ICON = "http://openweathermap.org/img/wn/";


class API_WEATHER{
  constructor(city){
    //city='Paris';

    var city = document.getElementById("city-input").value;
    // Si la ville n'est pas définit alors la ville par défault est Paris
    if(city == ''){
      city = "Paris";
    }
    document.getElementById('city').innerHTML = city;
    this.city = city;
  }

  // Faire la requete à l'API openweathermap
  // Retourne une promise
  fetchTodayForecast(){
    return axios
    .get(`${API_URL_NEW}?q=${this.city}&mode=JSON&units=metric&cnt=4&appid=${API_KEY}`, {
      crossdomain: true
    })
  }
  // Retourne l'element HTML de l'icon symbolisant la méteo.
  getHTMLElementFromIcon(icon){
    return `<img src=${API_URL_ICON}${icon}@2x.png class="weather-icon"/>`
  }
}