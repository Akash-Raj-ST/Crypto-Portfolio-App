import {useState,useEffect} from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

import Store from '../../Redux/store'

export default function Summary(){

    const [deposits,setDeposits] = useState(0);
    const [returns,setReturns] = useState(0)
    
    useEffect(() => {
        const assets = Store.getState().allAsset;

        var sum = 0;
        var currValue = 0;
        if(assets){
            assets.forEach((asset)=>{
                sum += asset.total_amount;
                currValue += asset.curr_price*asset.total_quantity;
            })
        }

        const returns = ((currValue-sum) / sum)*100;
        setReturns(returns.toPrecision(4));
        setDeposits(sum);
    }, [])

    return(
        <View>
            <Text style={styles.heading}>Summary</Text>
            <View style={styles.box}>
                <Image source={require("../../assets/images/summary-logo-dark.png")}/>
                <View>             
                    <Text style={styles.content}>Deposit</Text>
                    <Text style={styles.content}>${parseInt(deposits)}</Text>
                </View>
                <View>             
                    <Text style={styles.content}>Returns</Text>
                    <Text style={styles.content}>{returns>0?"+"+returns.toString():returns}%</Text>
                </View>
            </View>
            <Options/>
        </View>
    )
}

function Options(){
    const [activeOption,setActiveOption] = useState("All");

    const options = ["Day","Week","Month","All"]
    return(
        <View style={{flexDirection:'row',backgroundColor:'white',borderRadius:20,margin:10,alignSelf: 'center',paddingHorizontal:10}}>
        {options.map((option,index)=>(
           <Option key={index} option={option} activeOption={activeOption} setActiveOption={setActiveOption}/>
        ))}
        </View>
    )
}

function Option(props){
    return(
        <TouchableOpacity 
            style={{
                paddingHorizontal:10,
                paddingVertical:5,
                backgroundColor:props.activeOption===props.option?'black':'white',
                borderRadius:10
            }}
            onPress={()=>{props.setActiveOption(props.option)}}
        >
                <Text 
                    style={{
                        fontSize:16,
                        fontWeight:'bold',
                        color:props.activeOption===props.option?'white':'black',
                        paddingHorizontal:5
                    }}
                >
                    {props.option}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box:{
        backgroundColor:'black',
        width:"90%",
        height:150,
        alignSelf:'center',
        borderRadius:20,
        flexDirection:'row',
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
    }
})
