
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker';
import currencies from './currencys';

const getCurrencyNames = () => {
    const allCurrencys = currencies.map(({name, code}) => (
    <Picker.Item label={name +" ("+code+")"} value={code}/>
))
return allCurrencys
}

const Dropdowns = () => {
  return (
    <Picker>
      {getCurrencyNames()}   
   </Picker>
  )
}

export default Dropdowns

const styles = StyleSheet.create({})