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

export default class Forecast extends Component<{}> {
  render: function() {
    return (
      <View>
        <Text style={styles.bigText}>
          {this.props.main}
        <\/Text>
        <Text style={styles.mainText}>
          Current conditions: {this.props.description}
        <\/Text>
        <Text style={styles.bigText}>
          {this.props.temp}°F
        <\/Text>
      <\/View>
    )
  }
}

const styles = StyleSheet.create({
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  mainText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF'
  }
})
