import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Statistics() {
    return (
        <View style={{marginBottom:10}}>
            <Text style={styles.heading}>Statistics</Text>
            <View style={styles.box}>
                <View style={{flexDirection:'row'}}>
                    <View style={{marginRight:20}}>
                        <Text style={styles.content}>Best Performer</Text>
                        <Text style={styles.content}>Ethereum</Text>
                        <Text style={[styles.content,{color:'green'}]}>+23%($23,456)</Text>
                    </View>
                    <View>
                        <Text style={styles.content}>Worst Performer</Text>
                        <Text style={styles.content}>ICP</Text>
                        <Text style={[styles.content,{color:'red'}]}>-40%($3,732)</Text>
                    </View>
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
