import { StyleSheet, View, Text, Pressable } from 'react-native'
import React, {useState} from 'react'
import AddcurrencyScreen from './AddcurrencyScreen';



const AddButton = () => {
    const[visible, setVisible] = useState(false);
  return (
  
   
    <View style={styles.buttons}>
         <AddcurrencyScreen visible={visible} onClose={() => setVisible(false)} />
        <Pressable onPress={() => setVisible(true)} style={{width:"100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
         
        <Text style={styles.texts}>+</Text>
        </Pressable>
    </View>
  )
}

export default AddButton

const styles = StyleSheet.create({
    buttons:{
        backgroundColor:"darkblue",
        width:35,
        height:35,
        borderRadius:15,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"flex-end",
        marginRight:15,
        marginBottom:13,
        color:"white",
        fontSize:20,
    },

    texts:{
        color:"white",
        fontSize:50,
        textAlign:"center",
        justifyContent:"center",
        marginTop:-21 ,
    }


})