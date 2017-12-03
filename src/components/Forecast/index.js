import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native';

class Forecast extends Component<{}> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.limit}>
          <Text style={styles.bigText}>{this.props.main}</Text>
          <Text style={styles.mainText}>Current conditions: {this.props.description}</Text>
          <Text style={styles.bigText}>{this.props.temp} °C</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.45)'
  },
  bigText: {
    fontSize: 25,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  mainText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#FFFFFF'
  }
})

export default Forecast
