let submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function () {
  let inputBtn = document.getElementById("input-btn").value;

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputBtn +
      "&appid=f762d3728bdc648196d88e3af4ee939c"
  )
    .then((response) => response.json())
    .then((data) => {
      let cityname = data.name;
      let tem = data.main.temp;
      let temp = tem - 273.15;
      let description = data.weather[0].description;

      document.getElementById("city").innerHTML = cityname;
      document.getElementById("temp").innerHTML = temp.toFixed(2);
      document.getElementById("desc").innerHTML = description;
    })
    .catch((res) => alert("Please Type Right City Name"));
});

