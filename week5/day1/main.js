// const getWeatherApi = async () => {

//     const weatherData = await fetch("https://api.openweathermap.org/data/2.5/weather?zip=64075,us&appid=369d22c525938e841fa5991e68e8d7d0&units=imperial"); 

//     const formattedJSON = await weatherData.json();
//     console.log(formattedJSON);

//     let currentWeather = document.createElement("h3");
//     currentWeather.innerHTML = formattedJSON.main.temp;
//     console.log(currentWeather) 

//     let root = document.querySelector(".root");

//     root.append(currentWeather);
// };

// getWeatherApi();

const api = {
    key: "369d22c525938e841fa5991e68e8d7d0",
    url: "https://api.openweathermap.org/data/2.5/"
};

const searchbox = document.querySelector(".search-box");

searchbox.addEventListener("keydown", event => {
    if (event.keyCode == 13) {
        getResults(searchbox.value);
    }
});

const getResults = (query) => {
    fetch(`${api.url}weather?zip=${query}&units=imperial&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        })  .then(displayResults);
};

const displayResults = (weather) => {
    let city = document.querySelector(".location .city");
    city.innerHTML = `${weather.name} ,${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector(".location .date");
    date.innerHTML = dateBuilder(now)

    let temp = document.querySelector(".current .temp");
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°F</span>`;

    let weatherElement = document.querySelector(".current .weather");
    weatherElement.innerHTML = weather.weather[0].main;

    let hiLo = document.querySelector(".hi-lo");
    hiLo.innerHTML = `${Math.round(weather.main.temp_min)}°F / ${Math.round(weather.main.temp_max)} °F`;
};

const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${month} ${date}, ${year}`;
};