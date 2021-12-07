const cityDesc = document.querySelector('.city__description')
const cityIcon = document.querySelector('.city__icon')
const cityName = document.querySelector('.city__name')
const cityDeg = document.querySelector('.city__deg')
const dateNow = document.querySelector('.data')

const citySearch = document.querySelector('.city__search')
const searchIcon = document.querySelector('.search__icon')
citySearch.value = 'Kyiv'

citySearch.addEventListener('keyup', (event) => {
    if (event.keyCode == 13 && citySearch.value != '') {
        getWeather()
        citySearch.value = ''

    }
})

searchIcon.addEventListener('click', (event) => {
    if (citySearch.value != '') {
        getWeather()
        citySearch.value = ''
    }
})

function getWeather() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${citySearch.value}&appid=c9711742fd543c75b2f4b35fd28ee48c`)
    .then((resp) => {
        return resp.json()
    })
    .then((data) => {
        cityDesc.innerHTML = data.weather[0]['description']
        cityIcon.src = `https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`
        cityName.innerHTML = data.name;
        cityDeg.innerHTML = (data.main.temp - 273).toFixed(0) + '&deg'
        dateNow.innerHTML = new Date().getDate() + '.' + new Date().getMonth() + '.' + new Date().getFullYear()
    })
    .catch(() => {

    })
}

getWeather()

