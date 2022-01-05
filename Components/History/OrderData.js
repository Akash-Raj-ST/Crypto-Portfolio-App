import React from 'react'
import { View, Text,ScrollView, TouchableOpacity,Image } from 'react-native'
import { Divider } from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function AssetData() {
    const data = [
        {
            asset:"Bitcoin",
            icon:"",
            dateTime:"12/10/2021-11:45",
            price:"$26,45,785",
            amount:"$23,000",
            quantity:"0.0012 BTC",
        }, 
    ]

    function handlePrice(){
        console.log("Handling Price");
    }
    function handleAmount(){
        console.log("Handling Amount");
    }
    function handleQuantity(){
        console.log("Handling Qunatity");
    }
    function handleDateTime(){
        console.log("Handling DateTime");
    }

    // const handlers={
    //     handlePrice:handlePrice(),
    //     handleQuantity:handleQuantity(),
    //     handleAmount:handleAmount(),
    //     handleDateTime:handleDateTime(),
    // }

    const handlers={
        handlePrice,
        handleQuantity,
        handleAmount,
        handleDateTime,
    }

    return (
        <ScrollView vertcal>
            <ScrollView horizontal style={{marginTop:30}}> 
                <ScrollView style={{flexDirection:'row'}}> 
                    <Header handlers={handlers}/>
                    <Divider/>
                    <View >
                        {data.map((asset,index)=>(
                            <View key={index} style={{paddingVertical:5}}>
                                <AllData  asset={asset}/>
                                <Divider width={2} color='#eee' style={{marginHorizontal:10}}/>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </ScrollView>
        </ScrollView>
    )
}

function Header(props){
    return(
        <View style={{flexDirection:'row',paddingVertical:10}}>
            <Section name="Asset"/>
            <Section name="Date-Time" handle={props.handlers.handleDateTime}/>
            <Section name="Price" handle={props.handlers.handlePrice}/>
            <Section name="Amount" handle={props.handlers.handleAmount}/>
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
    console.log(asset)
    return(
        <View style={{flexDirection:'row',paddingVertical:5}}>
            <DataAsset data={asset.asset} icon={asset.icon}/>
            <DataDT data={asset.dateTime}/>
            <Data data={asset.price}/>
            <Data data={asset.amount}/>
            <Data data={asset.quantity}/>
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
    const [date,time] = props.data.split("-");

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
                <Text style={{fontSize:15,fontWeight:'bold'}}>{date}</Text>
                <Text style={{fontSize:15,fontWeight:'bold',color:'grey'}}>{time}</Text>
            </View>
        </View>
    )
}