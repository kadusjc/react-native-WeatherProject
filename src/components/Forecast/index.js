import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native';

class Forecast extends Component<{}> {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('Props', this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>
          {this.props.main}
        </Text>
        <Text style={styles.mainText}>
          Current conditions: {this.props.description}
        </Text>
        <Text style={styles.bigText}>
          {this.props.temp} °F
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bigText: {
    flex: 2,
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  mainText: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF'
  }
})

export default Forecast
