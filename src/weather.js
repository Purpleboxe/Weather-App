const weather = (() => {
    function weatherData (data) {
        const name = data.location.name;
        const country = data.location.country;
        const fahrenheit = data.current.temp_f;
        const feelslike_f = data.current.feelslike_f;
        const humidity = data.current.humidity;
        const wind = data.current.wind_mph;

        const weather = document.querySelector('.Weather');
        const location = document.querySelector('.location');
        const degrees = document.querySelector('.degrees');
        const details = document.querySelector('.details');

        location.innerHTML = name + ', ' + country;
        degrees.innerHTML = fahrenheit + ' °F'
        details.innerHTML = 'Feels like: ' + feelslike_f + ' °F' + '<br>'
         + 'Humidity: ' + humidity + '%' + '<br>'
         + 'Wind: ' + wind + ' MPH';

        weather.classList.remove('hide');
    }

    async function getWeather (city) {
        const link = `http://api.weatherapi.com/v1/current.json?key=1b20ea5a30ff4be490912610231310&q=${city}`;
        try {
            const response = await fetch(link, {mode: 'cors'});
            const data = await response.json();
            weatherData(data);
        } catch (error) {
            alert(error);
            return null;
        }
    }

    return {getWeather};
})();

export default weather;