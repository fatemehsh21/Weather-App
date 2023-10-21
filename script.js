const $ = document
let result = $.querySelector('.result')
let searchBtn = $.querySelector('button')
let inputElem = $.querySelector('input')
let apiData = {
    url: 'https://api.openweathermap.org/data/2.5/weather?q=',
    key: '26c4d8ad14b57209671494df9bd9fcb9'
}

searchBtn.addEventListener('click', () => {
    let city = inputElem.value
    fetch(`${apiData.url}${city}&appid=${apiData.key}`)
        .then(res => res.json())
        .then(data => {
            showData(data)
        })
        .catch(() => {
            result.innerHTML = `<h3 class="msg">City not found</h3>`
        })
})

function showData(data) {
    console.log(data)
    result.innerHTML =
        `<h2>${data.name}</h2>
    <h4 class="weather">${data.weather[0].main}</h4>
    <h4 class="desc">${data.weather[0].description}</h4>
    <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="">
    <h1>${Math.floor(data.main.temp - 273.15)} &#176;</h1>
    <div class="temp-container">
        <div>
            <h4 class="title">min</h4>
            <h4 class="temp">${Math.floor(data.main.temp_min - 273.15)}&#176;</h4>
        </div>
        <div>
            <h4 class="title">max</h4>
            <h4 class="temp">${Math.floor(data.main.temp_max - 273.15)}&#176;</h4>
        </div>
    </div>`
}