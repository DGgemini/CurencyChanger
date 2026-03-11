import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddButton from './addButton'

const TopBar = () => {
  return (
    <View style={styles.Nav}>
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
    }
})