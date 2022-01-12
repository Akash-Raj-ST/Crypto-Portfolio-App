import React, { useState } from 'react'
import { View, Text, Image,StyleSheet, TouchableOpacity } from 'react-native'

import {useNavigation } from '@react-navigation/native';


export default function Top({currency}) {

    return (
        <View style={[styles.topContainer,{paddingTop:50}]}>
            <View style={styles.assetInfo}>
                <Image source={require("../../assets/images/bitcoin.png")} style={{width:40,height:40}}/>
                <Text style={{fontWeight:'bold',fontSize:20}}>{currency}</Text>
            </View>
            <Orders currency={currency}/>
        </View>
    )
}

function Orders({currency}){
    const navigation = useNavigation();
    return(
        <TouchableOpacity
            style={styles.panelItem}
            onPress={()=>{
                navigation.navigate('History',{
                    currency:currency
                });
            }}
        >
            <Text style={{color:'white',fontSize:15}}>History</Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    topContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:15,
    },
    assetInfo:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    panelItem:{
        padding:10,
        alignItems:'center',
        backgroundColor:'black',
        borderRadius:10
    }
})
