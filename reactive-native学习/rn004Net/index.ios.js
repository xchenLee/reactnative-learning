/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

function cityFeedUrl(city) {
  let token = 'd08c38afaca02d63ab102c066fac8e8e5e8b47fd';
  let url = 'https://api.waqi.info/feed/' + city + '/' + '?token=' + token;
  return url;
};

export default class rn004Net extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: 'Result here'
    };
  }

  btnPressed = ()=> {
    const query = cityFeedUrl('Beijing');
    this.excuteQuery(query);
  };

  excuteQuery = (query) => {
    fetch(query)
    .then(response => response.json())
    .then(data => this.handleResponse(data))
    .catch(e => console.log("Oops, error", e))
  };

  handleResponse = (response) => {
    console.log(response);
    this.setState({
      result: JSON.stringify(response.data)
    })
    //alert(response);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button
        onPress={this.btnPressed}
        color = '#48BBEC'
        title='Get Beijing'
        />

        <Text style={styles.instructions}>
          {this.state.result}
        </Text>
      </View>
    );
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('rn004Net', () => rn004Net);
