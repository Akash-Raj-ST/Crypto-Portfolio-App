import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Info() {
    const navigation = useNavigation();

    const handleLogout = () => {
        const logout = () =>{
            navigation.navigate("Login");
        }

        Alert.alert(
            "Are you Sure?",
            "Do you want to Logout?",
            [
                {
                    text:"Yes",
                    style:"ok",
                    onPress:()=>logout(),
                },
                {
                    text:"No",
                    style:"ok",
                }
            ],
            {
                cancelable:true
            }
        )
    }

    return (
        <View
            style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                margin:30,
                marginBottom:10
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
                onPress={()=>{handleLogout()}}
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
        paddingVertical:5,
        borderRadius:15,
        margin:20
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        fontSize:18
    }
})
