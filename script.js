const input_Box = document.querySelector(".input-box");
const search_btn = document.getElementById("search-btn");
const weather_img = document.getElementById("weather-img");
const temprature = document.querySelector(".temperature");
const wind_speed = document.getElementById("wind-speed");
const humidity = document.getElementById("humidity");
const descrp_tion = document.querySelector(".descrption");
const weather_body = document.querySelector(".weather-body");

async function checkweather(city) {
  const api_key = "b2d7b78e0e3c3edaed8c6d651700b355";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );

  if (weather_data.cod === `404`) {
    console.log(alert("Location does not exist || error while typing "));
    weather_body.style.display = "none";
    return;
  }
  weather_body.style.display = "flex";

  temprature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

  descrp_tion.innerHTML = `${weather_data.weather[0].description}`;

  humidity.innerHTML = `${weather_data.main.humidity}%`;

  wind_speed.innerHTML = `${weather_data.wind.speed}Km/hr`;

  switch (weather_data.weather[0].main) {
    
    case "Clouds":
      console.log("get in switch cl");
      weather_img.src = "images/cloudy-day.jpg";
      break;
    case "Clear":
      console.log("get in switch cle");
      weather_img.src = "images/clear-day.jpg";
      break;
    case "Rain":
      console.log("get in switch r");
      weather_img.src = "images/rainy-day.jpg";
      break;
    case "Mist":
      console.log("get in switch m");
      weather_img.src = "images/mist-day.jpg";
      break;
    case "Snow":
      console.log("get in switch s");
      weather_img.src = "images/snow-day.jpg";
      break;
    
  }
}
search_btn.addEventListener("click", () => {
  checkweather(input_Box.value);
});
