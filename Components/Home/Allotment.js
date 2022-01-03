import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Allotment() {
    return (
        <View>
            <Text style={styles.heading}>Allotment</Text>
            <View style={styles.box}>
                <Image style={styles.image} source={require("../../assets/images/chart.png")}/>
                <View style={{flexDirection:'row',justifyContent:'space-evenly',width:'100%'}}>
                    <View>             
                        <Text style={styles.content}>Bitcoin</Text>
                        <Text style={styles.content}>24%</Text>
                    </View>
                    <View>             
                        <Text style={styles.content}>Ethereum</Text>
                        <Text style={styles.content}>27%</Text>
                    </View>
                    <View>             
                        <Text style={styles.content}>Others</Text>
                        <Text style={styles.content}>49%</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        backgroundColor:'black',
        width:"90%",
        height:220,
        alignSelf:'center',
        borderRadius:20,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center'
    },
    heading:{
        fontSize:24,
        fontWeight:'bold',
        margin:20,
    },
    content:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        margin:5
    },
    image:{
        width:70,
        height:70,
        margin:10
    }
})
