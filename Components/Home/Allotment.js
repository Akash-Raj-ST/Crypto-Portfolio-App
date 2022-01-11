import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Store from '../../Redux/store'

export default function Allotment() {

    const [allotment,setAllotment] = useState({"bitcoin":0,"ethereum":0,"others":0})

    useEffect(()=>{
        const orders = Store.getState().allAsset;

        var investedAmount = {
            "bitcoin":0,
            "ethereum":0,
            "others":0
        }

        orders.forEach((order)=>{
            if(order.currency=="BTC"){
                investedAmount.bitcoin += order.total_amount;
            }else if(order.currency=="ETH"){
                investedAmount.ethereum += order.total_amount;
            }else{
                investedAmount.others += order.total_amount;
            }
        })
        console.log(investedAmount)

        var allocation = {
            "bitcoin":0,
            "ethereum":0,
            "others":0
        }

        const total = investedAmount.bitcoin + investedAmount.ethereum + investedAmount.others;

        allocation.bitcoin = ((investedAmount.bitcoin/total)*100).toPrecision(4);
        allocation.ethereum = ((investedAmount.ethereum/total)*100).toPrecision(4);
        allocation.others = ((investedAmount.others/total)*100).toPrecision(4);

        setAllotment(allocation);
    },[])

    return (
        <View>
            <Text style={styles.heading}>Allotment</Text>
            <View style={styles.box}>
                <Image style={styles.image} source={require("../../assets/images/chart.png")}/>
                <View style={{flexDirection:'row',justifyContent:'space-evenly',width:'100%'}}>
                    <View>             
                        <Text style={styles.content}>Bitcoin</Text>
                        <Text style={styles.content}>{allotment.bitcoin}%</Text>
                    </View>
                    <View>             
                        <Text style={styles.content}>Ethereum</Text>
                        <Text style={styles.content}>{allotment.ethereum}%</Text>
                    </View>
                    <View>             
                        <Text style={styles.content}>Others</Text>
                        <Text style={styles.content}>{allotment.others}%</Text>
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
