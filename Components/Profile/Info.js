import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'

export default function Info() {
    return (
        <View
            style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                margin:30,
            }}
        >
            <Text
                style={{
                    fontSize:25,
                    fontWeight:'bold',
                }}
            >Akash Raj</Text>

            <TouchableOpacity 
                style={styles.button}
            >
                <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'red',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:15,
        margin:20
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        fontSize:18
    }
})
