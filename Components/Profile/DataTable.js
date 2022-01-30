import React, { useState,useEffect } from 'react'
import { View, Text,ScrollView, TouchableOpacity,Image } from 'react-native'

import { Divider } from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Store from '../../Redux/store'

export default function DataTable() {

    
    const [data,setData] = useState( Store.getState().allOrder);
    const [investedSort,setInvestedSort] = useState(true);
    const [quantitySort,setQuantitySort] = useState(true);
    const [dateTimeSort,setDateTimeSort] = useState(true);
    
    const handleAddOrder = ()=>{
        setData(Store.getState().allOrder);
        console.log("handling...");
    }

    useEffect(() => {
        const unsubscribe = Store.subscribe(handleAddOrder);
        return () => {
            // Clean up the subscription
            unsubscribe();
        };
    });
    function ascSort(a,b){
        return (a > b) ? 1 : ((b > a) ? -1 : 0);
    }

    function desSort(a,b){
        return (a < b) ? 1 : ((b < a) ? -1 : 0);
    }

    function handleInvested(){
        const sortedData = data;
        if(investedSort)
            sortedData.sort((a,b)=>ascSort(a.total_amount,b.total_amount))
        else
            sortedData.sort((a,b)=>desSort(a.total_amount,b.total_amount))
        
        setData(sortedData);
        setInvestedSort(!investedSort);
    }
    function handleQuantity(){
        const sortedData = data;
        if(quantitySort)
            sortedData.sort((a,b)=>ascSort(a.total_quantity,b.total_quantity))
        else
           sortedData.sort((a,b)=>desSort(a.total_quantity,b.total_quantity))
        
        setData(sortedData);
        setQuantitySort(!quantitySort);
    }
    function handleDateTime(){
        const sortedData = data;
        if(dateTimeSort)
            sortedData.sort((a,b)=>ascSort(a.created_at.seconds,b.created_at.seconds))
        else
            sortedData.sort((a,b)=>desSort(a.created_at.seconds,b.created_at.seconds))
        
        setData(sortedData);
        setDateTimeSort(!dateTimeSort);
    }

    const handlers={
        handleQuantity,
        handleInvested,
        handleDateTime,
    }

    return (
        <ScrollView style={{height:"60%"}} horizontal> 
            <View>  
                <Header handlers={handlers}/>
                <Divider/>
                <ScrollView vertical>
                    {data.map((asset,index)=>(
                        <View key={index} style={{paddingVertical:5}}>
                            <AllData  asset={asset}/>
                            <Divider width={2} color='#eee' style={{marginHorizontal:10}}/>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </ScrollView>
    )
}

function Header(props){
    return(
        <View style={{flexDirection:'row',paddingVertical:10}}>
            <Section name="Asset"/>
            <Section name="Date-Time" handle={props.handlers.handleDateTime}/>
            <Section name="Buy/Sell" />
            <Section name="Price" />
            <Section name="Amount" handle={props.handlers.handleInvested}/>
            <Section name="Quantity" handle={props.handlers.handleQuantity}/>
        </View>
    )
}



function Section(props){
    return(
        <TouchableOpacity
            style={{
                flexDirection:'row',
                alignItems:'center',
                width:120,
                alignItems:'center',
                paddingHorizontal:10,
                justifyContent:'center'
            }}
            
            onPress={()=>{
                props.handle?props.handle():null
            }}
        >
            <Text style={{fontWeight:'bold',fontSize:16,textAlign:'center'}}>{props.name}</Text>
            {props.handle?
            <FontAwesome name='sort' size={18} style={{paddingHorizontal:5}}/>:null}
        </TouchableOpacity>
    )
}


function AllData({asset}){
    const bg = asset.type==="buy"?'lightgreen':'palevioletred'
    return(
        <View style={{flexDirection:'row',paddingVertical:5,backgroundColor:bg}}>
            <DataAsset data={asset.currency} icon={asset.icon}/>
            <DataDT data={asset.created_at}/>
            <Data data={asset.type}/>
            <Data data={asset.price_per_unit}/>
            <Data data={asset.total_amount}/>
            <Data data={asset.total_quantity}/>
        </View>
    )
}


function Data(props){
    return(
        <View
            style={{
                flexDirection:'row',
                alignItems:'center',
                width:120,
                alignItems:'center',
                paddingHorizontal:10,
                justifyContent:'center'
            }}
        >
            <Text style={{fontSize:15,fontWeight:'bold'}}>{props.data}</Text>
        </View>
    )
}


function DataAsset(props){
    return(
        <View
            style={{
                flexDirection:'row',
                alignItems:'center',
                width:120,
                alignItems:'center',
                paddingHorizontal:10,
                justifyContent:'center'
            }}
        >   
            <Image source={require("../../assets/images/bitcoin.png")}
                style={{
                    width:25,
                    height:25
                }}
            />
            <Text style={{fontSize:15,fontWeight:'bold'}}>{props.data}</Text>
        </View>
    )
}

function DataDT(props){
    let dateTimeObj = new Date(props.data.toDate());
    

    return(
        <View
            style={{
                flexDirection:'row',
                alignItems:'center',
                width:120,
                alignItems:'center',
                paddingHorizontal:10,
                justifyContent:'center'
            }}
        >   
            <View style={{justifyContent:'center',alignItems:'center'}}> 
                <Text style={{fontSize:15,fontWeight:'bold'}}>{dateTimeObj.getDate()}/{dateTimeObj.getMonth()+1}/{dateTimeObj.getFullYear()}</Text>
                <Text style={{fontSize:15,fontWeight:'bold',color:'grey'}}>{dateTimeObj.getHours()}:{dateTimeObj.getMinutes()}</Text>
            </View>
        </View>
    )
}