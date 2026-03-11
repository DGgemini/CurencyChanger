import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.Center}>
      <Text>Currency
         Conversion</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    Center: {
        flex: 1,
       justifyContent: 'center',
        alignItems: 'center'
    }
})