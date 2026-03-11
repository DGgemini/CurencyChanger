import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cards from './Cards'

const numCards = () => {
    const cards = [];
    for (let i = 0; i < 5; i++) {
        cards.push(<Cards key={i} />);
    }
    return cards;
}

const Body = () => {
  return (
    <View style={styles.Body}>
       {numCards()}   
    </View>
  )
}

export default Body

const styles = StyleSheet.create({
    Body:{
        flex:1,
        backgroundColor:"white"
    }
})