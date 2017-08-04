/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Avatar } from 'react-native-elements';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class NuevaApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Avatar
          xlarge
          rounded
          title="GQ"
          overlayContainerStyle={{backgroundColor: 'skyblue'}}
          //source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('NuevaApp', () => NuevaApp);
