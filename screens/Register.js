import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function Register({navigation}) {
    return (
        <View style={styles.container}> 
            <Image source={require("../assets/images/logo.png")} style={styles.logo}/>
            <View>
                <InputField title="username" placeHolder="username"/>
                <InputField title="Password" placeHolder="Password" type="password"/>
                <InputField title="Re-Password" placeHolder="Enter Password again" type="password"/>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:18,color:'black'}}>Already have an account? </Text>
                <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate('Login');
                    }}
                >
                    <Text 
                        style={{
                            textDecorationLine:'underline',
                            fontWeight:'bold',
                            fontSize:18,
                            color:'black',
                            textAlign:'center'
                        }}> Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function InputField(props){
    return(
        <View style={styles.input}>
            <View style={styles.label}> 
                <Text style={styles.labelText}>{[props.title]}</Text>
            </View>
            <TextInput style={styles.inputField} placeholder={props.placeHolder} secureTextEntry={props.type?props.type==="password"?true:false:false}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        height:"100%",
        backgroundColor:'white'
    },
    
    logo:{
        width:100,
        height:100,
        marginBottom:50,
    },

    input:{
        margin:10,
    },

    inputField:{
        borderWidth:2,
        width:280,
        height:60,
        borderRadius:15,
        paddingHorizontal:10,
        margin:5,
        position:'relative',
        fontWeight:'bold',
    },
    
    label:{
        position:'absolute',
        left:25,
        top:-5,
        backgroundColor:'white',
        zIndex:10,
        paddingHorizontal:5,
    },
    labelText:{
        fontWeight:'bold'
    },

    button:{
        backgroundColor:'black',
        paddingHorizontal:60,
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
