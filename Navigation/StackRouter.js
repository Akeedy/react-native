import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Pages1 from './pages/Pages1';
import Pages2 from './pages/Pages2';
import Welcome from './pages/Welcome';
import MemberSingUp from './pages/MemberSingUp';
import MemberResult from './pages/MemberResult';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown:false,
        }}>
        <Stack.Screen
          name="WELCOME"
          component={Welcome}></Stack.Screen>
        <Stack.Screen
          name="Sign Up"
          component={MemberSingUp}></Stack.Screen>
        <Stack.Screen
          name="MemberResult"
          component={MemberResult}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
