import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddButton from '../components/addButton'

const TopBar = () => {
  return (
    <View style={styles.Nav}>
      <Text style={styles.Title}>Changer</Text> 
       <AddButton /> 
    </View>
  )
}

export default TopBar

const styles = StyleSheet.create({
    Nav:{
        backgroundColor:"dodgerblue",
        width:"100%",
        height:64,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        borderColor:"black",
        borderWidth:1,
        borderBottomWidth:1.5,
        
    },
    Title:{
        fontSize:30,
        fontWeight:"bold",
        color:"white",
        alignSelf:"center",
       marginLeft:130,
    } 
})