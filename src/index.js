import weather from './weather';

const searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const search = e.target['search'];
    weather.getWeather(search.value);
    search.value = '';
});