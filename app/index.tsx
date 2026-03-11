import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBar from './topBar'
import Body from './Body'

const Home = () => {
  return (
    <View style={styles.Nav}>
      <TopBar />
      <Body />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    Nav: {
        flex: 1,
    
    }
})