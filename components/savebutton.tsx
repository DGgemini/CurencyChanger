import { StyleSheet ,View, Text, Pressable } from 'react-native'
import React from 'react'

const SaveButton = () => {
  return (
    <View>
      <Pressable style={{width:100, height:50, backgroundColor:"darkblue", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:10}}>
        <Text style={{color:"white", fontSize:20}}>Save</Text>
      </Pressable>
    </View>
  )
}

export default SaveButton 

const styles = StyleSheet.create({})