/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  NavigatorIOS,
  Text,
  View
} from 'react-native';

export default class rn003FlatList extends Component {

  cellView = ({item}) => {
    return(
      <TouchableHighlight underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <View style={styles.header}/>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.des}>{item.description}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
        data={[
          {key: '7Devin',title: 'a', description: 'fwe1221fwefwefwefwefwefwefwefwef\nwefwefwefwefefwfweff'},
          {key: '6Devin',title: 'b', description: 'fwefwefwefwefwefwefwefwefwef\nwefwefwefwefefwfweff'},
          {key: '5Devin',title: 'c', description: 'fwe31efwefwefwefwefwefwefwefwef\nwefwefwefwefefwfweff'},
          {key: '4Devin',title: 'd', description: 'fwefwefwefwefwefwefwefwefwef\nwefwefwefwefefwfweff'},
          {key: '3Devin',title: 'e', description: 'fwefwefwefwef\nwefwefwefwefefwfweff'},
          {key: '2Devin',title: 'f', description: 'fwefwefwefwefwefwefwefwefwef\nwefwefwefwefefwfweff'},
          {key: '1Devin',title: 'g', description: 'fwefwefwefwefwefwefwefwefwef\nwefwefwefwefefwfweff'},
          {key: '9Devin',title: 'h', description: 'fwefeff'},
        ]}
        //renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>} />
        renderItem={this.cellView}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  rowContainer: {
    flexDirection:'row',
    padding: 10,
  },
  textContainer:{
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    width: 40,
    height: 40,
    marginRight: 10,
    backgroundColor: 'yellow',
  },
  title: {
    fontSize: 18,
  },
  des: {
    fontSize: 13,
    marginTop:3,
  },
  separator: {
    backgroundColor: '#dddddd',
    height: 1,
  }
});

AppRegistry.registerComponent('rn003FlatList', () => rn003FlatList);
