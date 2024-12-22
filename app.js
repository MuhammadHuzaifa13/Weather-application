const API_KEY = "5576ba63bd8a69a8cb2ab28fc2fd406c";
const inputField = document.getElementById("inputfield");
const showWeather = document.getElementById("ShowWeather");

const Search = async () => {
showWeather.innerHTML =  `<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputField.value}&appid=${API_KEY}&units=metric`;

  const fetchData = await fetch(API_URL);
  const response = await fetchData.json();

  console.log(response);

  return showData(response)
};

const showData = (data) => {
  showWeather.innerHTML = `<img width='80' src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">

    <h1> Temprature = ${data.main.temp} Celcius</h1>

    <h2> Weather = ${data.weather[0].main}</h2>
    <h3>City = ${data.name}</h3>
     <h3> Country = ${data.sys.country}</h3>
      <h4> Wind Speed = ${data.wind.speed}</h4>
      <h4> Longitude = ${data.coord.lon}</h4>
      <h4> latitude = ${data.coord.lat}
    `;
};
