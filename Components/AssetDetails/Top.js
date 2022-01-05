import React, { useState } from 'react'
import { View, Text, Image,StyleSheet, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';

import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Top() {
    const [showPanel,setShowPanel] = useState(false);

    return (
        <View style={[styles.topContainer,{paddingTop:50}]}>
            <View style={styles.assetInfo}>
                <Image source={require("../../assets/images/bitcoin.png")} style={{width:40,height:40}}/>
                <Text style={{fontWeight:'bold',fontSize:20}}>Bitcoin</Text>
            </View>
            <TouchableOpacity
                onPress={()=>{setShowPanel(!showPanel)}}
            >
                <AntDesign name='ellipsis1' size={40} style={{position:'relative',padding:10,backgroundColor:'white'}}/>

                {showPanel? <Panel/>:null}
               
            </TouchableOpacity>
        </View>
    )
}

function Panel(){
    return(
        <View style={styles.panel}>
            <PanelItem itemName="History1"/>
            <PanelItem itemName="History2"/>
            <PanelItem itemName="History3"/>

        </View>
    )
}

function PanelItem(props){
    return(
        <View>
            <TouchableOpacity
                style={styles.panelItem}
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
        paddingHorizontal:15
    },
    assetInfo:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    panel:{
        position:'absolute',
        top:50,
        right:20,
        backgroundColor:'black',
        width:100,
        borderRadius:10,
        paddingVertical:10,
    },
    panelItem:{
        padding:10,
        alignItems:'center',
    }
})
