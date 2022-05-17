import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

const Profile = ({navigation}) => {
  return (
    <View>
      <Text>Profile</Text>
      <Button onPress={()=>navigation.navigate("ProfileEdit")}title="Profile Edit"></Button>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})