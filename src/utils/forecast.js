const request = require('request')

const forecast = (city, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=98b7465353d383f3d0f3bc4a284a48ae`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            // console.log(error)
            callback('Unable to connect to weather service!', undefined)
        } else if (body.message) {
            console.log(body.message)
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, ' It is currently ' + parseFloat(body.main.temp-273.15).toFixed(2)  +' degrees out, '+ body.weather[0].description +', feels like ' + parseFloat(body.main.feels_like-273.15).toFixed(2) + ' degrees')
        }
    })
}

module.exports = forecast