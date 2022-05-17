import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Button from '../components/Button'

function Welcome({navigation}) {
  const goToNextPage=()=>navigation.navigate("Sign Up");
  
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Welcome Page</Text>
        <Button text="Sign up" onPress={goToNextPage}></Button>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
  },
  header:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    color:"black",
    margin:15,
  },
});
export default Welcome