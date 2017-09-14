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
  View
} from 'react-native';

export default class rn002 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row1}/>
        <View style={styles.row2}/>
        <View style={styles.row3}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
    //反复修改 alignItems, justifyContent, flexDirection
    //熟练flex布局
  },
  row1: {
    width: 80,
    height: 60,
    backgroundColor: 'powderblue'
  },
  row2: {
    width: 80,
    height: 50,
    backgroundColor: 'skyblue'
  },
  row3: {
    width: 80,
    height: 110,
    backgroundColor: 'steelblue'
  }
});

AppRegistry.registerComponent('rn002', () => rn002);
