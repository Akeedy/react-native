import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import Input from '../components/Input'
import Button from "../components/Button"

const MemberSingUp = ({navigation}) => {
  const [username,setUserName]=useState('');
  const [email,setEmail]=useState('');
  const [age,setAge]=useState('');
  const handleSubmit=()=>{
    user={
      username,
      email,
      age
    }
    console.log(user);
    navigation.navigate("MemberResult",{user});

  };
  return (
    <View>
      <Input placeHolder={"jack"} label={"Username"} onChangeText={setUserName}></Input>
      <Input placeHolder={"jennie"} label={"Email"} onChangeText={setEmail}></Input>
      <Input placeHolder={"18"} label={"Age"} onChangeText={setAge}></Input>
      <Button text="Sign Up" onPress={handleSubmit}></Button>

    </View>
  )
}

export default MemberSingUp

const styles = StyleSheet.create({})