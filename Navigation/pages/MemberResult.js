import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MemberResult = ({route}) => {
  console.log(route.params)
  user=route.params.user;
  return (
    <View>
      <Text style={{fontSize:18}}>username: {user.username}</Text>
      <Text style={{fontSize:18}}>email: {user.email}</Text>
      <Text style={{fontSize:18}}>age: {user.age}</Text>
    </View>
  )
}

export default MemberResult

const styles = StyleSheet.create({})