import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import Kalkulator from './Kalkulator';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MainDrawer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AppNavigation">
          {() => (
            <Drawer.Navigator
              screenOptions={{
                drawerStyle: {
                  backgroundColor: 'yellow', //change bg color
                  width: 230, //change width of sidebar
                },
              }}>
              <Drawer.Screen name="Profile" component={Profilee} />
              <Drawer.Screen name="Kalkulator" component={Kalkulator} />
            </Drawer.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainDrawer;
