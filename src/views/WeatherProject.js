import React, { Component } from 'react'
import {bindAll, get} from 'lodash'
import Forecast from '../components/Forecast'
import WeatherService from '../services/WeatherService'
import backgroundImage from '../images/kakaroto.jpg'


import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground
} from 'react-native'

export default class WeatherProject extends Component<{}> {
  constructor(props) {
    super(props)
    bindAll(this, '_handleTextChange')
    this.weatherService = new WeatherService()
    this.state = {cityCountry: '', forecast: {main: '', description: '', temp: ''}}
  }

  async _handleTextChange(event) {
    let userTyped = event.nativeEvent.text
    let resJSON = await this.weatherService.invokeOpenWeather(userTyped)
    let resCode = get(resJSON, 'cod')

    if ( resCode !== 200) {
      this.setState({cityCountry: resJSON.message})
      return
    }

    this.setState({
      cityCountry: userTyped,
      forecast: {
        main: get(resJSON, 'weather[0].main'),
        description: get(resJSON, 'weather[0].description'),
        temp: get(resJSON, 'main.temp')
      }
    })
  }

  render() {
    return (
      <ImageBackground
        source={backgroundImage}
        resizeMode='cover'
        style={styles.background}>

        <View style={styles.container}>
          <Text style={styles.welcome}>
            Type City name, Country
          </Text>

          <Text style={styles.welcome}>
            You input {this.state.cityCountry}
          </Text>

          <Forecast
            main={this.state.forecast.main}
            temp={this.state.forecast.temp}
            description={this.state.forecast.description}/>

          <TextInput
            style={styles.input}
            returnKeyType='go'
            onSubmitEditing={this._handleTextChange}>
          </TextInput>
        </View>
      </ImageBackground>
    )
  }
}

const styles  = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    margin: 2,
    color: '#FFFFFF'
  },
  input: {
    fontSize: 18,
    borderWidth: 2,
    height: 40,
    color: '#FFFFFF'
  },
  background: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  }
})