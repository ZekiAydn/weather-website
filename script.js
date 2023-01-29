const url = 'https://api.weatherapi.com/v1/forecast.json?key='
const key = '107f5684b5ed494397122309232901'

const setQuery = (e) => {
    if(e.keyCode == '13') 
    getResult(searchBar.value)
}

const getResult = (name) => {
    let query = `${url}${key}&q=${name}&days=1&aqi=no&alert=no&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}


const displayResult = (result) => {
   

    
    
    let city = document.querySelector('.city')
    city.innerText = `${result.location.name}, ${result.location.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.current.temp_c)}°C`

    let desc = document.querySelector('.desc')
    desc.innerText = result.current.condition.text

    let feels = document.querySelector('.feels')
    feels.innerText = `Hissedilen Sıcaklık 
    ${Math.round(result.current.feelslike_c)}°C`
} 
    


const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)