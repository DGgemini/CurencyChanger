import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const AddButton = () => {
  return (
    <View style={styles.buttons}>
        <Text>+</Text>
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
        margin:13,
    
    }
})