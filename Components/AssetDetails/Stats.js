import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { Divider } from 'react-native-elements'

export default function Stats({data}) {
    return (
        <View>
            <Text style={styles().heading}>Stats</Text>

            <View>
                <Row stat="Invested" value={data.total_amount}/>
                <Row stat="All time profit" value="+$15,500"/>
                <Row stat="All time Loss" value="-$3,500"/>
                <Row stat="P/L booked" value="+$3,500"/>
                <Row stat="Average buy price" value={data.avg_price}/>
                <Row stat="Holding" value={data.total_quantity}/>
            </View>
        </View>
    )
}

// <Row stat="Current P/L" value={data.pl>=0?"+"+data.pl.toString():"-"+data.pl.toString()}/>
           
// <Row stat="Returns" value={data.return>=0?"+"+data.return.toString():"-"+data.return.toString()}/>

function Row(props){
    return(
        <View>
            <View style={styles().row}>
                <Text style={styles().rowKey}>{props.stat}</Text>
                <Text style={{fontWeight:'bold',fontSize:18,paddingVertical:10}}>:</Text>
                <Text style={styles({value:props.value[0]}).rowValue}>{props.value}</Text>
            </View>
            <Divider style={{marginHorizontal:40}}/>
        </View>
    )
}

const styles =(props)=> StyleSheet.create({
    heading:{
        textAlign:'center',
        fontSize:24,
        fontWeight:'bold',
        padding:25,
        textDecorationLine:'underline',
        textDecorationColor:'black',
    },
    row:{
        flexDirection:'row',
        // justifyContent:'space-around'
    },
    rowKey:{
        fontSize:18,
        fontWeight:'bold',
        width:'50%',
        alignSelf:'flex-start',
        paddingHorizontal:20,
        paddingVertical:10
    },
    rowValue:{
        fontSize:18,
        fontWeight:'bold',
        paddingHorizontal:20,
        paddingVertical:10,
        color:props?props.value==="+"?'green':props.value==="-"?'red':'black':'black'
    }
})
