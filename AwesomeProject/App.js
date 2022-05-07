import React,{useState} from "react";
import {View,Text,Image,StyleSheet,FlatList,Alert} from 'react-native';
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem"; 
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';

const App = ()=>{
  const[items,setItems]=useState([
    {id:uuidv4(),text:"Milk"},
    {id:uuidv4(),text:"Chocolate"},
    {id:uuidv4(),text:"Beef"},
    {id:uuidv4(),text:"Tea"},
  ]);


  const deleteItem=(id)=>{
    setItems(prevItems=>{
      return prevItems.filter(i=>i.id!=id);
    });
  }

  const addItem=(text)=>{
    if(!text){
      Alert.alert("Opps","Please enter an item")
    }
    else{
    setItems(prevItems=>[{id:uuidv4(),text},...prevItems])
    }

  }


  return (
    <View style={style.container  }>
        <Header title="hello !"></Header>
        <AddItem addItem={addItem}></AddItem>
        <FlatList data={items} 
            renderItem={({item})=>
             (<ListItem item={item} deleteItem={deleteItem}></ListItem>)}></FlatList>
    </View>
 );
}



const style= StyleSheet.create({
  container:{
    flex:1,
  },
});

export default App;