// In App.js in a new project

import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Home, Login, Signup, Settings} from '../Screens';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function ShowDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

function ShowTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const navigation = useNavigation();
  const OpenDrawer = () => {
    // navigation.dispatch(DrawerActions.openDrawer());
    navigation.dispatch(DrawerActions.toggleDrawer());
    setIsOpen(true)
  };

    const CloseDrawer = () => {
      navigation.dispatch(DrawerActions.closeDrawer());
      setIsOpen(false);
    };

  return (
    <View>
      {isOpen ? (
        <Text style={styles.icon} onPress={() => CloseDrawer()}>
          Close
        </Text>
      ) : (
        <Text style={styles.icon} onPress={() => OpenDrawer()}>
          Open
        </Text>
      )}
    </View>
  );
}

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Karachi"
          options={{
            headerRight: ({}) => <Header />,
          }}
          component={ShowDrawer}
        />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />
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
