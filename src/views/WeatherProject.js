import React, { Component } from 'react';
import Forecast from '../components/Forecast'
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,

} from 'react-native';

export default class WeatherProject extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      zip: '',
      forecast: {
        main: 'Clouds',
        description: 'few clouds',
        temp: 45.7
      }
    }
  }

  _handleTextChange(event) {
    console.log(event.nativeEvent.text)
    this.state = {
      zip: event.nativeEvent.text
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            You input {this.state.zip}.
          </Text>
          <Forecast
            main={this.state.forecast.main}
            description={this.state.forecast.description}
            temp={this.state.forecast.temp}/>
          <TextInput
            style={styles.input}
            returnKeyType='go'
            onSubmitEditing={this._handleTextChange}>
          </TextInput>
        </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
    input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40
  }
})