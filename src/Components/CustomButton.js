import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomButton = (props) => {
    return (
        <View style={styles._buttonContainer}>
        <TouchableOpacity style={styles._button}  onPress={() => props.navigation.navigate('HomeScreen')}>
          <Text style={styles._buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
}
export default CustomButton;

let styles = StyleSheet.create({

});