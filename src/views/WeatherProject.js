import React, { Component } from 'react'
import {bindAll, get} from 'lodash'
import Forecast from '../components/Forecast'
import WeatherService from '../services/WeatherService'

import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
} from 'react-native'

export default class WeatherProject extends Component<{}> {
  constructor(props) {
    super(props)
    bindAll(this, '_handleTextChange')
    this.weatherService = new WeatherService()
    this.state = {isShow: false, cityCountry: '', forecast: {main: '', description: '', temp: ''}}
  }

  async _handleTextChange(event) {
    let userTyped = event.nativeEvent.text
    let resJSON = await this.weatherService.invokeOpenWeather(userTyped)
    let resCode = get(resJSON, 'cod')

    if ( resCode !== 200) {
      this.setState({cityCountry: resJSON.message, isShow: true})
      return
    }

    this.setState({
      cityCountry: userTyped,
      isShow: true,
      forecast: {
        main: get(resJSON, 'weather[0].main'),
        description: get(resJSON, 'weather[0].description'),
        temp: get(resJSON, 'main.temp')
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.blackSquare}>
          <Text style={styles.logoFont}>
            kClima
          </Text>
        </View>
        <View style={styles.mainBackground}>
          <Text style={styles.mainText}>
            {"\n"}
            Digite o nome de uma cidade do Mundo
          </Text>

          <Text>{"\n"}</Text>

          <TextInput
            style={styles.input}
            returnKeyType='go'
            onSubmitEditing={this._handleTextChange}>
          </TextInput>

           <Text>{"\n"}</Text>

          <Image source={require('../images/cloud.png')} style={styles.imageSize}/>

          {
            this.state.isShow &&
              <View style={{width: '100%'}}>
                <Forecast
                  show={this.state.show}
                  main={this.state.forecast.main}
                  temp={this.state.forecast.temp}
                  description={this.state.forecast.description}/>
              </View>
          }
        </View>

        <View style={styles.poweredBy}>
          <Text style={styles.poweredByFont}>
            powered by @OpenWeather
          </Text>
        </View>
      </View>
    )
  }
}

const styles  = StyleSheet.create({
  blackSquare: {
    height: '4%',
    backgroundColor: 'black',
    justifyContent: 'center'
  },
  logoFont: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#FFFFFF',
    textAlign: 'center'
  },
  imageSize: {
    width: 400,
    height: 205
  },
  poweredBy: {
    height:'6%',
    backgroundColor: 'black'
  },
  poweredByFont: {
    fontWeight: 'bold',
    fontSize: 12,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
    justifyContent: 'center',
    textAlign: 'center'
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#FFFFFF',
    textAlign: 'center'
  },
  mainBackground: {
    height:'90%',
    backgroundColor: 'steelblue',
    justifyContent: 'center'
  },
  container: {
    flex: 1
  },
  limit: {
    width: 200,
    height: 120
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
    color: '#000000'
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