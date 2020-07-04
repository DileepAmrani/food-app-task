import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default class Signup extends React.Component {
  render() {
    return (
      <View style={styles._container}>
        <Text>Signup page</Text>
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
