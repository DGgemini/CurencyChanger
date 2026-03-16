import { StyleSheet,View, Text, Modal, Pressable } from 'react-native'
import React from 'react'

type addCurrencyScreenProps = {
    visible: boolean;
    onClose: () => void;
}

const AddcurrencyScreen = ({ visible, onClose }: addCurrencyScreenProps) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
        <View style={styles.Backdrop}>
        <Pressable onPress={onClose} style={{width:"100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Pressable onPress={() => {}}  style={styles.Content}> 
                <View>
                    <Text>add currency screen</Text>
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
        justifyContent:"center",
        alignItems:"center"
    }


})