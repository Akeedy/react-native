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
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  const [musicList,setMusicList] =useState(musicData);
  const renderSong=({item})=><SongCard song={item}></SongCard>
  const renderSeparator=()=><View style={style.separator}></View> 
  const handleSearch=(text)=>{
    const filteredList=musicData.filter(song=>{
      const searchedText=text.toLowerCase();
      const searchedTitle=song.title.toLowerCase();
      return (searchedTitle.indexOf(searchedText)>-1);
    });
    setMusicList(filteredList);
  };
  return (
      <View style={style.container}>
        <SearchBar handleSearch={handleSearch}></SearchBar>
        <FlatList
          data={musicList}
          keyExtractor={item=>item.id}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeparator}
          />

      </View>
  );
};

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
  },
  separator:{
    borderWidth:1,
    borderColor:"#e0e0e0"
  }
});


export default App;
