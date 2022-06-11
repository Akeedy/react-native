import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserCard = ({user}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.userName}>{user.username}</Text>

      <View style={styles.inner_container}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.userEmail}>{user.email}</Text>
</View>
    </View>
  )
}

export default UserCard

const styles = StyleSheet.create({
    container:{
      borderColor:"#cfcfcf",
      borderWidth:1,
      margin:5,
      padding:10,
      paddingHorizontal:20,
      borderRadius:10, },

    userName:{
      color:"#434343",
      fontSize:20,
      fontWeight:'bold',
    },
    inner_container:{
      flexDirection:'row',
      justifyContent:"space-between",
      fontStyle:'italic',
    },
    userEmail:{},
    name:{
      fontStyle:'italic',
      color:"#434343",
      fontSize:14,
    }  
})