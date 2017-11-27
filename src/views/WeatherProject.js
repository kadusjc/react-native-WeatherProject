import React, { Component } from 'react';
import {bindAll} from 'lodash'
import Forecast from '../components/Forecast'
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
    this.state = {zip: '', forecast: {main: '', description: '', temp: ''}}
  }

  _handleTextChange(event) {
    console.log(event.nativeEvent.text)
    this.setState({
      zip: event.nativeEvent.text,
      forecast: {
        main: 'Clouds',
        description: 'few clouds',
        temp: 45.7
      }
    })
  }

  render() {
    console.log('Entrou', this.state)
    return (
      <ImageBackground
        source={backgroundImage}
        resizeMode='cover'
        style={styles.background}>

        <View style={styles.container}>
          <Text style={styles.welcome}>
            You input {this.state.zip}
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