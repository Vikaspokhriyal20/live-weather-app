
let input = document.querySelector('#input_Value');
let button = document.querySelector('#btn');
let city_name = document.querySelector('#city');
let temp = document.querySelector('#temp');
let clouds = document.querySelector('#clouds');
let wind = document.querySelector('#windspeed');
let msg = document.querySelector('#message');
let todayhumidity = document.querySelector('#humidity');
let air_pre = document.querySelector('#air');

button.addEventListener('click', function () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=a1427e22af8b3e7afff1912d31ac2e3b`)
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            let mycity = data['name'];
            let country = data['sys']['country'];
            let todayweather = data['weather'][0]['description'];
            let todaytemp = data['main']['temp'];
            let windpower = data['wind']['speed'];
            let humidty = data['main']['humidity'];
            let airpressure = data['main']['pressure'];

            input.value = " ";

            // convert farnight to celcies
            let convertin_cel = todaytemp - 273;
            let round = convertin_cel.toFixed(2);


            if (todayweather == 'overcast clouds') {
                clouds.innerHTML = `<i class="bi bi-cloudy"></i>  ${todayweather}`;
            } else if (todayweather == 'haze') {
                clouds.innerHTML = `<i class="bi bi-cloud-haze2-fill"></i>  ${todayweather}`;
            } else if (todayweather == 'broken clouds') {
                clouds.innerHTML = `<i class="bi bi-clouds-fill"></i>  ${todayweather}`;
            } else if (todayweather == 'few clouds') {
                clouds.innerHTML = `<i class="bi bi-clouds"></i>  ${todayweather}`;
            } else if (todayweather == 'clear sky') {
                clouds.innerHTML = ` <i class="bi bi-sun"></i> ${todayweather}`;

            } else if (todayweather == 'light rain') {
                clouds.innerHTML = `<i class="bi bi-cloud-lightning-rain-fill"></i> ${todayweather}`;
            } else {
                clouds.innerHTML = ` ${todayweather}`;
            }


            city_name.innerHTML = `${mycity}, ${country}`;
            temp.innerHTML = `${round} 'C`;
            wind.innerHTML = ` Wind Speed : ${windpower} km/h`;
            todayhumidity.innerHTML = ` Humidity : ${humidty} %`;
            air_pre.innerHTML = ` Air Pressure : ${airpressure} hPa`;

        })

        .catch(Error => console.log(Error))
})