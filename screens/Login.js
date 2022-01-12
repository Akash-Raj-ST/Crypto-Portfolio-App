import React,{useEffect} from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import Store from '../Redux/store'
import db from '../firebase'
import { getDoc, doc} from 'firebase/firestore/lite'

export default function Login({navigation}) {
    
    const init = async()=>{
        const userID = 'WFLOPtx94SwlicYt2sjF';

        const docRef = doc(db, "User", userID);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {

            const orders= docSnap.data().orders;
            updateData(orders);

            //processing data for allAssetStore
            const processedData = [];
            orders.forEach((order)=>{
                var element = processedData.find((el)=>el.currency===order.currency);

                if(element){
                    element.total_quantity += order.total_quantity;
                    element.total_amount += order.total_amount;
                    element.avg_price = element.total_amount/element.total_quantity;
                }else{
                    var item = {
                        currency:order.currency,
                        total_quantity:order.total_quantity,
                        total_amount:order.total_amount,
                        avg_price:order.total_amount/order.total_quantity
                        
                    }
                    processedData.push(item);
                }
            })

            updateData2(processedData);
        } else {
            console.log("No such document!");
        }
    }
    
    function updateData(orders){
        Store.dispatch({
            type:"ADD_ORDER",
            payload:{
                orders:orders
            }
        })
    }

    function updateData2(assets){
        Store.dispatch({
            type:"ADD_ASSET",
            payload:{
                assets:assets
            }
        })
        
        Store.dispatch({
            type:"filter",
            payload:{
                query:'',
                data:Store.getState().allAsset
            }
    })
    }

    // useEffect(()=>{
    //     init();
    // },[])
    
    return (
        <View style={styles.container}> 
            <Image source={require("../assets/images/logo.png")} style={styles.logo}/>
            <View>
                <InputField title="Email" placeHolder="Email"/>
                <InputField title="Password" placeHolder="Password" type="password"/>
            </View>

            <TouchableOpacity 
                style={styles.button}
                onPress={()=>{
                        init().then(()=>
                        navigation.navigate('Home'))
                    }}
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
