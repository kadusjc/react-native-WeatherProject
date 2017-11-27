import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native';

// {this.props.main}
//{this.props.description}
// /{this.props.temp}
class Forecast extends Component<{}> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>
        </Text>
        <Text style={styles.mainText}>
          Current conditions:
        </Text>
        <Text style={styles.bigText}>
          °F
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

export default Forecast
