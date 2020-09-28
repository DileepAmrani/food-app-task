import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
export default class CustomInput extends React.Component {
  render() {
    return (
      <View style={styles._container}>
          <TextInput placeholder={this.props.placeholder} style={styles._input} secureTextEntry={this.props.isPassword}/>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    // backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: "#d2d2d2",
    marginBottom: 20
  },
  _input: {
    marginBottom: 5
  }
});
