import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Switch,
  FlatList,
} from 'react-native';

const data = [
  {id: 0, name: 'blad.exe', isFavorite: true},
  {id: 1, name: 'hey.exe', isFavorite: false},
  {id: 2, name: 'look.exe', isFavorite: false},
  {id: 3, name: 'wtf.exe', isFavorite: true},
  {id: 4, name: 'who.exe', isFavorite: false},
  {id: 5, name: 'dot.exe', isFavorite: true},
];
const App = () => {
  const [cafeList, setCafeList] = useState(data);
  const [showOnlyFavs, setOnlyFavs] = useState(true);

  function onFavsChange(value){
    setOnlyFavs(value);
    showOnlyFavs?
       setCafeList(cafeList.filter(x=>x.isFavorite))
      :
       setCafeList(data);
  }

  return (
    <SafeAreaView>
      <Text>Only filtered</Text>
      <Switch value={showOnlyFavs} onValueChange={onFavsChange}></Switch>
      <FlatList data={cafeList} renderItem={({item})=><Text>{item.name}</Text>}></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
