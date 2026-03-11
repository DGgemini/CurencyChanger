import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'

const Rootlayout = () => {
  return (
    <SafeAreaProvider>
     <Stack screenOptions={{ headerShown: false }}></Stack>
    </SafeAreaProvider>)
}

export default Rootlayout

const styles = StyleSheet.create({})