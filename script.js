const api_key = "07f0025f90d64b689716046f773c95ba"

const submitButton = document.getElementById("submit-button")
let weatherHeader = document.getElementById("weather-header")
let weatherInput = document.getElementById("weather-input")

let latitude
let longitude

let areaName

let convertKelvinToFarenehit = (kelvin) => (kelvin - 273.15) * 1.8 + 32;

function GetData(zipCode) {

    const geocode_api_url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=${api_key}`

    let GeoCode = fetch(geocode_api_url)
        .then(response => response.json())
        .then(data => {
            latitude = data.lat;
            longitude = data.lon;
            areaName = data.name;
      })
        
    GeoCode.then(data => {
        const current_weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`

        fetch(current_weather_url)
            .then(response => response.json())
            .then(data => {
                let Temperature = Math.round(convertKelvinToFarenehit(data.main.temp))
                weatherHeader.innerHTML = `It is ${Temperature} degrees in ${areaName}`
    })})
}

submitButton.addEventListener("click", () => {
    if (weatherInput.value != "") {
        GetData(weatherInput.value)
    }
})
