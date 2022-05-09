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
import musicData from "./musicData.json";
import SongCard from './components/Songs/SongCard';

const App = () => {

  const renderSong=({item})=><SongCard song={item}></SongCard>
  const renderSeparator=()=><View style={style.separator}></View> 
  return (
    <SafeAreaView style={style.container}>
      <View style={style.container}>
        <FlatList
          data={musicData}
          keyExtractor={item=>item.id}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeparator}
          />

      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container:{flex:1},
  separator:{
    borderWidth:1,
    borderColor:"#e0e0e0"
  }
});


export default App;
