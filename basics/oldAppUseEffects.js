import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Switch,
  FlatList,
} from 'react-native';

const App = () => {
  const[onOff,setOnOff]=useState(false);
  return (
    <SafeAreaView>
      <Button title='off/on' onPress={()=>setOnOff(!onOff)}></Button>
      <Text>This the main text</Text>
      {onOff && <Hello></Hello>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

const Hello=()=>{
  useEffect(()=>{
    console.log("I'm here bitches")

    return()=>{
      console.log("Bye Bye")
    };
  },[]); 
  return(
    <View style={{backgroundColor:"aqua",padding:10}}><Text>Hello World</Text></View>
  );
}

export default App;
