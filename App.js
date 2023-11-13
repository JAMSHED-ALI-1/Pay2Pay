//
import {View, Text, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Screens/Login';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FrontPage from './Screens/FrontPage';
import SignUp from './Screens/SignUp';
import SignUp1 from './Screens/SignUp1';
import DropDown from './Screens/DropDown';
import Otpscreen from './Screens/Otpscreen';
import Validation from './Screens/Validation';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Validation">
        <Stack.Screen
          name="FrontPage"
          component={FrontPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp1"
          component={SignUp1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DropDown"
          component={DropDown}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Otpscreen"
          component={Otpscreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Validation"
          component={Validation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
