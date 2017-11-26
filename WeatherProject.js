const React = require('react')
const {StyleSheet, Text, View, TextInput, Image} = require('react-native')

const Forecast = require('./Forecast')

const WeatherProject = React.createClass({

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

  _handleTextChange(event) {
    // log statements are viewable in Xcode,
    // or the Chrome debug tools
    console.log(event.nativeEvent.text)
    this.setState({
      zip: event.nativeEvent.text
    })
  },

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
        onSubmitEditing={this._handleTextChange}/>
      </View>
    )
  }
})

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

module.exports = WeatherProject