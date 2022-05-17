import { View, Text ,TextInput} from 'react-native'
import React from 'react'
import styles from './Input.style'

const Input = ({label,placeHolder,onChangeText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
          <TextInput style={styles.input} placeholder={placeHolder} onChangeText={onChangeText}></TextInput>
      </View>
    </View>
  )
}

export default Input