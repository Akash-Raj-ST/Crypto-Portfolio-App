import React, { useState,useEffect } from 'react'
import { View, Text,TouchableOpacity,StyleSheet, Modal,TextInput, Image,ScrollView } from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'
import CoinSelection from './AddOrder/CoinSelection';
import OrderDetails from './AddOrder/OrderDetail';


export default function AddOrder() {
    const [coinSelection,setCoinSelection] = useState(false);
    const [orderDetail,setOrderDetail] = useState(false);
    
    const [selectedCoin,setSelectedCoin] = useState("");

    useEffect(()=>{
        if(selectedCoin.length>0){
            setCoinSelection(false);
            setOrderDetail(true);
        }
    },[selectedCoin])
    
    return (
        <View>
            <TouchableOpacity 
                style={styles.button}
                onPress={()=>{setCoinSelection(true)}}
            >
                <AntDesign name='pluscircle' size={20} style={{paddingHorizontal:5}}/>
                <Text style={styles.buttonText}>Add new</Text>
            </TouchableOpacity>
            {coinSelection && <CoinSelection setVisible={setCoinSelection} selectedCoin={setSelectedCoin}/>}
            {orderDetail && <OrderDetails currency={selectedCoin} setVisible={setOrderDetail} />} 
                   
        </View>
    )
}

// {coinSelection && <OrderDetails setVisible={setCoinSelection} visible={coinSelection}/>}           
// {coinSelection && <CoinSelection setCoinSelection={setCoinSelection}/>}


const styles = StyleSheet.create({
    
    button:{
        backgroundColor:'blue',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:15,
        margin:20,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center'
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        fontSize:18,
        textAlign:'center'
    },
})