// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=30c3f9ee5fd43e153e1f154b9ce0f560
// https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=30c3f9ee5fd43e153e1f154b9ce0f560&units=metric


const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const key = "30c3f9ee5fd43e153e1f154b9ce0f560";
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let city = document.querySelector(".city"); 
let searchBox = document.querySelector(".search-here input");
let searchBtn = document.querySelector(".search-here button");
let icon = document.querySelector(".weather-icon")

async function checkWeather(cityName) {
    try {
        const response = await fetch(url + cityName + `&appid=${key}`);
        if (!response.ok) {
            throw new Error(`City not found: ${city}`);
        }
    
    let data = await response.json();
    city.innerHTML = data.name; // difference between innerHtml, innerText and textContent?
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " Km/h";
    if (data.weather[0].main == "Rain") {
        icon.src = "/weather-app-img/rain.png";
    } else  if (data.weather[0].main == "Clouds") {
        icon.src = "/weather-app-img/clouds.png";
    } else if (data.weather[0].main == "Mist") {
        icon.src = "/weather-app-img/mist.png";
    } else if (data.weather[0].main == "Snow") {
        icon.src = "/weather-app-img/snow.png";
    } else if (data.weather[0].main == "Clear") {
        icon.src = "/weather-app-img/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
        icon.src = "/weather-app-img/drizzle.png"
    }

    } catch(error) {
        console.error("Error fetching weather data: ", city);
        alert("City not found! Please try again.")
    }

}
searchBtn.addEventListener("click", () => {
    let cityName = searchBox.value.trim();
    if (cityName) {
        checkWeather(cityName);
    } else {
        alert("Please write a valid city name!");
    }

    document.querySelector(".weather").style.display = "block";
});

searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        let cityName = searchBox.value.trim();
        if (cityName) {
            checkWeather(cityName);
        } else {
            alert("Please write a valid city name!");
        }
        document.querySelector(".weather").style.display = "block";
    }
});
