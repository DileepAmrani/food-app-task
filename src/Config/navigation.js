// In App.js in a new project

import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { RegisterScreen, HomeScreen, KitchenDetail} from '../Screens';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          headerShown: null
        }} name="RegisterScreen" component={RegisterScreen} />
             <Stack.Screen options={{
          headerShown: null
        }} name="HomeScreen" component={HomeScreen} />

<Stack.Screen options={{
          headerShown: null
        }} name="KitchenDetail" component={KitchenDetail} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;

const styles = StyleSheet.create({
  icon: {
    padding: 5,
  },
});
