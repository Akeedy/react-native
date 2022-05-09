import react from "react";
import {StyleSheet} from 'react-native';

export default styles=StyleSheet.create({
    
    container:{
        padding:10,
        flexDirection:"row",
    },
    image:{
        width:100,
        height:100,
        borderRadius:50,
    },
    inner_container:{
        justifyContent:'center',
        flex:1,
        padding:10,
    },
    title:{
        fontWeight:"bold",
        fontSize:25,
        color:"black",
    },
    info_container:{
        alignItems:'center',
        flexDirection:"row",
    },
    artist:{
        color:"black",
    },
    year:{
        color:"grey",
        fontWeight:'bold',
        fontSize:12,
        marginLeft:10,
    },
    content_container:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    sold_out_container:{
        justifyContent:'center',
        borderWidth:1,
        borderColor:"red",
        padding:4,
    },
    sold_out_title:{
        color:"red",
        fontSize:12,
        
    },

});