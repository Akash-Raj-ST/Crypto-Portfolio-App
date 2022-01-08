import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Store from '../Redux/store'

export default function Login({navigation}) {

    function updateData(){
        Store.dispatch({
            type:"ADD",
            payload:{
                orders:[
                    {
                        amount:"5400",
                        coin:0.00478,
                        date:'12-07-2021',
                        time:'16:05',
                        priceApplied:2456789,
                        token:"bitcoin"
                    },
                    {
                        amount:"5400",
                        coin:0.00478,
                        date:'12-07-2021',
                        time:'16:05',
                        priceApplied:2456789,
                        token:"Ethereum"
                    },
                    {
                        amount:"5400",
                        coin:0.00478,
                        date:'12-07-2021',
                        time:'16:05',
                        priceApplied:2456789,
                        token:"matic"
                    },
                ]
            }
        })
        console.log(Store.getState());
    }
    return (
        <View style={styles.container}> 
            <Image source={require("../assets/images/logo.png")} style={styles.logo}/>
            <View>
                <InputField title="Email" placeHolder="Email"/>
                <InputField title="Password" placeHolder="Password" type="password"/>
            </View>

            <TouchableOpacity 
                style={styles.button}
                onPress={()=>{updateData();navigation.navigate('Home')}}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View>
                <Text style={{fontSize:18,color:'black',fontWeight:'bold'}}>New here? </Text>
                <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate('Register');
                    }}
                >
                    <Text 
                        style={{
                            textDecorationLine:'underline',
                            fontWeight:'bold',
                            fontSize:18,
                            color:'black'
                        }}> Register</Text>
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
