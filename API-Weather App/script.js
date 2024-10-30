function temperature() {
  let city = document.getElementById("temp").value.trim();
  axios
    .get(
      `https://api.weatherapi.com/v1/current.json?key=5ee07c674ee14962975124844242010&q=${city}&aqi=yes`
    )
    .then(function (response) {
      // handle success
      console.log(response);

      let weather_data = response.data;

      console.log(weather_data);

      console.log(weather_data.current.temp_c);

      document.getElementById(
        "displaytemp"
      ).innerHTML = `Today ${city}'s temperature is ${weather_data.current.temp_c}°C. `;
    })

    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
