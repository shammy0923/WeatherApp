const api_key = "07f0025f90d64b689716046f773c95ba"

let State = "NY"

let latitude
let longitude

let convertKelvinToFarenehit = (kelvin) => (kelvin - 273.15) * 1.8 + 32;

const geocode_api_url = `http://api.openweathermap.org/geo/1.0/direct?q=${State}&limit=5&appid=${api_key}`

let GeoCode = fetch(geocode_api_url)
    .then(response => response.json())
    .then(data => {
        latitude = data[4].lat;
        longitude = data[4].lon;
    })
    
GeoCode.then(data => {
    const current_weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`

    fetch(current_weather_url)
        .then(response => response.json())
        .then(data => {
            let Temperature = Math.round(convertKelvinToFarenehit(data.main.temp))
            console.log(`It is ${Temperature} degrees in ${State}`)
    })})
