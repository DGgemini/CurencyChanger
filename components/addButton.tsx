import { StyleSheet, View, Text, Pressable } from 'react-native'
import React from 'react'

const AddButton = () => {
  return (
    <View style={styles.buttons}>
        <Pressable onPress={() => console.log("Button Pressed")} style={{width:"100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Text style={styles.texts}>+</Text>
        </Pressable>
    </View>
  )
}

export default AddButton

const styles = StyleSheet.create({
    buttons:{
        backgroundColor:"darkblue",
        width:35,
        height:35,
        borderRadius:15,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"flex-end",
        marginRight:15,
        marginBottom:13,
        color:"white",
        fontSize:20,
    },

    texts:{
        color:"white",
        fontSize:50,
        textAlign:"center",
        justifyContent:"center",
        marginTop:-21 ,
    }


})