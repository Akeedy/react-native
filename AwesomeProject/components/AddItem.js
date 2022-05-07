import React,{useState} from 'react';
import {View, Text,TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


function AddItem({addItem}) {

  const[text,setText]=useState('');
  const onChange=(textValue)=>setText(textValue);


  return (
    <View style={style.AddView}>
      <TextInput style={style.Input} placeholder="Add Item..." onChangeText={onChange}></TextInput> 
      <TouchableOpacity style={style.btn} onPress={()=>addItem(text)}>
        <Icon name="plus" size={20} color="white"></Icon> 
        <Text style={style.btnText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  AddView:{
    // justifyContent:'center',
    // alignItems:'center',
  },
  Input:{
    padding:10,
    height:60,
    fontSize:16,
  },
  btn:{
    backgroundColor:"purple",
    flexDirection:'row',
    margin:5,
    padding:9,
    alignItems:'center',
    justifyContent:'center',
  },

  btnText:{
    color:'white',
    fontSize:20,
  }
  
});

export default AddItem;
