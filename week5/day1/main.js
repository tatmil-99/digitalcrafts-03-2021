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