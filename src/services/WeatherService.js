import {get} from 'lodash'
const OPEN_WEATHER_API_KEY = 'e40b04ca5009bc54480dc271cdedfcfb'

export default class WeatherProjectService {
  invokeOpenWeather (userInput) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${OPEN_WEATHER_API_KEY}&units=metric`)
      .then((response)  =>  response.json())
      .then((responseJSON)  =>  {
        return responseJSON
      })
      .catch((error)  =>  {
        return error
    })
  }
}