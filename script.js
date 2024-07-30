document.addEventListener("DOMContentLoaded", (event) => {
  const apiKey = "30e35386302781ac4f90b83ec33019ad";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
  const city = "mumbai"//prompt("enter the city name"); // You can change the city or get it dynamically

  

  fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //console.log(data.weather[0].main)
      document.getElementById("location").textContent =
        data.name + ", " + data.sys.country;
      document.getElementById("description").textContent =
        data.weather[0].description;
      document.getElementById("temp").textContent = `${data.main.temp} °C`;
      document.getElementById("humidity").textContent = `${data.main.humidity}`;
      document.getElementById("pressure").textContent = `${data.main.pressure} `;
      document.getElementById("wind").textContent = `${data.wind.speed} `;
        })
    .catch((error) => {
      console.error("Error fetching the weather data:", error);
    });

});
