import React from 'react';
import {View, Text, StyleSheet, AppRegistry} from 'react-native';
import MainNavigator from './src/Config/navigation';
export default class App extends React.Component {
  render() {
    return <MainNavigator />;
  }
}

AppRegistry.registerComponent("appName", () => App);

let styles = StyleSheet.create({
  _container: {
    flex: 1,
  },
});
