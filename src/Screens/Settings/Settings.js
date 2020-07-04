import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default class Settings extends React.Component {
  render() {
    return (
      <View style={styles._container}>
        <Text >Setting Page</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
