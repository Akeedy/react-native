import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Header = (props) => {
  return (
      <View style={style.header}>
          <Text style={style.headerText} >{props.title}</Text>
      </View>
  )
}

Header.defaultProps={
    title:"Shopping List"
}

const style=StyleSheet.create({
    header:{
        alignItems:'center',
        justifyContent:'center',
        height:60,
        backgroundColor:"darkslateblue",
        padding:15,
    },

    headerText:{
       fontSize:20 ,
       color:"white",

    }
});
export default Header;

