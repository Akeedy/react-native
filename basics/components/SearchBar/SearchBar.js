import React from 'react';
import {TextInput, Image,View} from 'react-native';
import styles from './SearchBar.style';
function SearchBar(props) {
  return (
    <View style={styles.searchBar_container}>
      <TextInput style={styles.searchBar_textInput} placeholder="Search..."
        onChangeText={props.handleSearch}></TextInput> 
    </View>
  );
}

export default SearchBar;
