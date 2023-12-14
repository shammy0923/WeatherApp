const api_key = "07f0025f90d64b689716046f773c95ba"

let State = "NY"

let latitude
let longitude

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
            console.log(data.main);
            console.log(data.weather);
    })})
