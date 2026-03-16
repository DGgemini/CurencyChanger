import { StyleSheet,View, Text, Modal, Pressable } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker';

type addCurrencyScreenProps = {
    visible: boolean;
    onClose: () => void;
}
const currencies = ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "SEK", "NZD"];

const AddcurrencyScreen = ({ visible, onClose }: addCurrencyScreenProps) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
        <View style={styles.Backdrop}>
        <Pressable onPress={onClose} style={{width:"100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Pressable onPress={() => {}}  style={styles.Content}> 
                <View>
                    <Text style={{fontSize:20, fontWeight:"bold", margin:10, textDecorationLine:"underline"}}>Add Currency</Text>
                    <Text>From</Text>
                    <Picker>
                        {currencies.map((currency) => (
                            <Picker.Item label={currency} value={currency} key={currency} />
                        ))}
                    </Picker>
                    <Text>To</Text>
                </View>
            </Pressable>
        </Pressable>
        </View>
    </Modal>
  )
}

export default AddcurrencyScreen 

const styles = StyleSheet.create({
    Backdrop:{
        width:"100%",
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(0,0,0,0.5)"
    },
    Content:{
        width:"80%",
        height:"50%",
        backgroundColor:"white",
        borderRadius:10,
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
    }


})