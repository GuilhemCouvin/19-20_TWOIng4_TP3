// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // // On récupère l'information principal
      // const main = data.weather[0].main;
      // const description = data.weather[0].description;
      // const temp = data.main.temp;
      // const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // On récupère l'information principal (aujourd'hui)
      const today_main = data.list[0].weather[0].main;
      const today_description = data.list[0].weather[0].description;
      const today_temp = data.list[0].temp.day;
      const today_icon = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);

      // On récupère l'information principal (demain)
      const tomorrow_main = data.list[1].weather[0].main;
      const tomorrow_description = data.list[1].weather[0].description;
      const tomorrow_temp = data.list[1].temp.day;
      const tomorrow_icon = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      // On récupère l'information principal (après-demain)
      const after_main = data.list[2].weather[0].main;
      const after_description = data.list[2].weather[0].description;
      const after_temp = data.list[2].temp.day;
      const after_icon = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

      // On récupère l'information principal (après-après-demain)
      const after_after_main = data.list[3].weather[0].main;
      const after_after_description = data.list[3].weather[0].description;
      const after_after_temp = data.list[3].temp.day;
      const after_after_icon = apiWeather.getHTMLElementFromIcon(data.list[3].weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = today_main;
      document.getElementById('today-forecast-more-info').innerHTML = today_description;
      document.getElementById('icon-weather-container').innerHTML = today_icon;
      document.getElementById('today-forecast-temp').innerHTML = `${today_temp}°C`;

      document.getElementById('tomorrow-forecast-main').innerHTML = tomorrow_main;
      document.getElementById('tomorrow-forecast-more-info').innerHTML = tomorrow_description;
      document.getElementById('tomorrow-icon-weather-container').innerHTML = tomorrow_icon;
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${tomorrow_temp}°C`;

      document.getElementById('after-forecast-main').innerHTML = after_main;
      document.getElementById('after-forecast-more-info').innerHTML = after_description;
      document.getElementById('after-icon-weather-container').innerHTML = after_icon;
      document.getElementById('after-forecast-temp').innerHTML = `${after_temp}°C`;

      document.getElementById('after-after-forecast-main').innerHTML = after_after_main;
      document.getElementById('after-after-forecast-more-info').innerHTML = after_after_description;
      document.getElementById('after-after-icon-weather-container').innerHTML = after_after_icon;
      document.getElementById('after-after-forecast-temp').innerHTML = `${after_after_temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

function data_ID(){
  var data = document.getElementById("city-input").value;
  alert(data);
}