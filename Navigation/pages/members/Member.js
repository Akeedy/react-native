import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const Member = ({navigation}) => {
  return (
    <View>
      <Text>Member</Text>
      <Button onPress={()=>navigation.navigate("MemberDetail")} title="Member Detail"></Button>
      <Button onPress={()=>navigation.navigate("MemberUpdate")}title="Member Update"></Button>
    </View>
  )
}

export default Member

const styles = StyleSheet.create({})