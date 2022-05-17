import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './pages/profile/Profile';
import ProfileEdit from './pages/profile/ProfileEdit';
import Member from './pages/members/Member';
import MemberDetail from './pages/members/MemberDetail';
import MemberUpdate from './pages/members/MemberUpdate';

const Tab = createBottomTabNavigator();
const Stack=createNativeStackNavigator(); 

const MemberStack=()=>{
  return (
    <Stack.Navigator>
        <Stack.Screen name="MemberScreen" component={Member}/>
        <Stack.Screen name="MemberDetail" component={MemberDetail}/>
        <Stack.Screen name="MemberUpdate" component={MemberUpdate}/>
    </Stack.Navigator>
  );
}
const ProfileStack=()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={Profile}/>
      <Stack.Screen name="ProfileEdit" component={ProfileEdit}/>
    </Stack.Navigator>
  );
}



const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Member" component={MemberStack}></Tab.Screen>
        <Tab.Screen name="Profile" component={ProfileStack}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
