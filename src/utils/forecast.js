const request = require('request')

const forecast = (latitude, longitude, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=84ea051071d87474685650a3033972c9&query=' + latitude + ',' + longitude + '&units=f'
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to find weather forecast services', undefined)
        }else if(body.message){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently '+ body.current.temperature+ ' degrees outside .It feels like '+ body.current.feelslike+ ' degrees outside')
        }
    })
}

module.exports = forecast