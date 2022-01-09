import React, { useState } from 'react'
import { View, Text, Image,StyleSheet, TouchableOpacity } from 'react-native'

import {useNavigation } from '@react-navigation/native';
import { Divider } from 'react-native-elements/dist/divider/Divider';

import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Top({token}) {
    const [showPanel,setShowPanel] = useState(false);

    return (
        <View style={[styles.topContainer,{paddingTop:50}]}>
            <View style={styles.assetInfo}>
                <Image source={require("../../assets/images/bitcoin.png")} style={{width:40,height:40}}/>
                <Text style={{fontWeight:'bold',fontSize:20}}>{token}</Text>
            </View>
            <TouchableOpacity
                onPress={()=>{setShowPanel(!showPanel)}}
            >
                <AntDesign name='ellipsis1' size={40} style={{position:'relative',padding:10}}/>

                
                {showPanel? <Panel/>:null}
            </TouchableOpacity>
        </View>
    )
}

function Panel(){
    const navigation = useNavigation();

    function handleHistory(){
        navigation.navigate('History');
    }

    return(
        <View style={styles.panel}>
            <PanelItem itemName="History" navigate={()=>handleHistory()}/>
        </View>
    )
}

function PanelItem(props){
    return(
        <View>
            <TouchableOpacity
                style={styles.panelItem}
                onPress={()=>{
                    props.navigate();
                }}
            >
                <Text style={{color:'white',fontSize:18}}>{props.itemName}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    topContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
    },
    assetInfo:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    panel:{
        position:'absolute',
        top:45,
        right:20,
        backgroundColor:'black',
        width:100,
        borderRadius:10,
        zIndex:1
    },
    panelItem:{
        padding:10,
        alignItems:'center',
    }
})
