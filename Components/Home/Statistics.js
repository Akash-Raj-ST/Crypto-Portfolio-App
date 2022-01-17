import React,{useState,useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Store from '../../Redux/store'

export default function Statistics() {
    const [bestPerformer,setBestPerformer] = useState({"currency":"","percent":0,"amount":0})
    const [worstPerformer,setWorstPerformer] = useState({"currency":"","percent":0,"amount":0})

    useEffect(() => {
        var bestPerformer={"currency":"","percent":0,"amount":0};
        var worstPerformer={"currency":"","percent":0,"amount":0};

        const assets = Store.getState().allAsset;

        if(assets){
            assets.forEach((asset)=>{
                var percent = asset.returns;

                if(percent>bestPerformer["percent"]){
                    bestPerformer={"currency":asset.currency,"percent":percent.toPrecision(4),"amount":asset.pl};
                }
                if(percent<worstPerformer["percent"]){
                    worstPerformer={"currency":asset.currency,"percent":percent.toPrecision(4),"amount":asset.pl};
                }
            })
        }

        setBestPerformer(bestPerformer);
        setWorstPerformer(worstPerformer);
    },[])

    return (
        <View style={{marginBottom:10}}>
            <Text style={styles.heading}>Statistics</Text>
            <View style={styles.box}>
                <View style={{flexDirection:'row'}}>
                    {bestPerformer.currency.length>0 &&
                        <View style={{marginRight:20}}>
                            <Text style={styles.content}>Best Performer</Text>
                            <Text style={styles.content}>{bestPerformer.currency}</Text>
                            <Text style={[styles.content,{color:'green'}]}>+{bestPerformer.percent}%(+${bestPerformer.amount})</Text>
                        </View>
                    }
                    {worstPerformer.currency.length>0 &&
                        <View>
                            <Text style={styles.content}>Worst Performer</Text>
                            <Text style={styles.content}>{worstPerformer.currency}</Text>
                            <Text style={[styles.content,{color:'red'}]}>{worstPerformer.percent}%(-${worstPerformer.amount*-1})</Text>
                        </View>
                    }
                </View>
                 <View style={{flexDirection:'row'}}>
                    <View style={{marginRight:20}}>
                        <Text style={styles.content}>All time profit</Text>
                        <Text style={[styles.content,{color:'green'}]}>$23,456</Text>
                    </View>
                    <View>
                        <Text style={styles.content}>All time Loss</Text>
                        <Text style={[styles.content,{color:'red'}]}>$3,732</Text>
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
        fontSize:16,
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
