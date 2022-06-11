import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import UserCard from './components/UserCard/UserCard';

const App = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetchData();
  },[])
  async function fetchData() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    setLoading(false);
    setUserList(response.data);
    console.log(userList);
  }

  const renderUser = ({item}) => <UserCard user={item} />;

  return (
    <View>
      <Text>App</Text>
      {/* <Button title="Fetch" onPress={fetchData}></Button> */}

      {loading ? (
        <ActivityIndicator size="large"></ActivityIndicator>
      ) : (
        <FlatList data={userList} renderItem={renderUser}></FlatList>
      )}
    </View>
  );
};

export default App;
