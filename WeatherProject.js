/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class WeatherProject extends Component<{}> {

  getInitialState() {
    return {
      zip: '',
      forecast: {
        main: 'Clouds',
        description: 'few clouds',
        temp: 45.7
      }
    }
  },

  // We'll pass this callback to the <TextInput>
  _handleTextChange(event) {
    // log statements are viewable in Xcode,
    // or the Chrome debug tools
    console.log(event.nativeEvent.text);
    this.setState({
      zip: event.nativeEvent.text
    });
  },

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}><
          You input {this.state.zip}
        <\/Text>
        <Forecast
          main={this.state.forecast.main}
          description={this.state.forecast.description}
          temp={this.state.forecast.temp}\/>
        <TextInput style={styles.input} onSubmitEditing={this._handleTextChange}\/>
      <\/View>
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
}