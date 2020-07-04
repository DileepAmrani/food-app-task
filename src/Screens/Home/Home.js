import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default class Home extends React.Component {
  render() {
    return (
      <View style={styles._container}>
        <Text onPress={()=>this.props.navigation.navigate("login")} > go to loing screen</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});
