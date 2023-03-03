import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import Home from '../Screens/Home';
import MyAddress from '../Screens/MyAddress';
import AddAddress from '../Screens/AddAddress';
import Buy from '../Screens/Buy';
import OrderPlaced from '../Screens/OrderPlaced';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="MyAddress"
          component={MyAddress}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AddAddress"
          component={AddAddress}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Buy"
          component={Buy}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="OrderPlaced"
          component={OrderPlaced}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
