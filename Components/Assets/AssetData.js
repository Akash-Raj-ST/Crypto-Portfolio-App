import React from 'react'
import { View, Text,ScrollView, TouchableOpacity,Image } from 'react-native'
import { Divider } from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function AssetData() {
    const data = [
        {
            asset:"Bitcoin",
            icon:"",
            price:"$47,45,342",
            avg:"$26,45,785",
            invested:"$23,000",
            holding:"0.0012 BTC",
            pl:"+2,532",
            return:"25%"
        },
        {
            asset:"Bitcoin",
            icon:"",
            price:"$47,45,342",
            avg:"$26,45,785",
            invested:"$23,000",
            holding:"0.0012 BTC",
            pl:"+2,532",
            return:"25%"
        },
        
    ]

    function handlePrice(){
        console.log("Handling Price");
    }
    function handleInvested(){
        console.log("Handling Invested");
    }
    function handleHolding(){
        console.log("Handling Holding");
    }
    function handlePL(){
        console.log("Handling Profit Loss");
    }
    function handleReturn(){
        console.log("Handling Return");
    }

    // const handlers={
    //     handlePrice:handlePrice(),
    //     handleHolding:handleHolding(),
    //     handleInvested:handleInvested(),
    //     handlePL:handlePL(),
    //     handleReturn:handleReturn()
    // }
     const handlers={
        handlePrice,
        handleHolding,
        handleInvested,
        handlePL,
        handleReturn
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
            <Section name="Price" handle={props.handlers.handlePrice}/>
            <Section name="Average Buy Price"/>
            <Section name="Invested" handle={props.handlers.handleInvested}/>
            <Section name="Holding" handle={props.handlers.handleHolding}/>
            <Section name="Profit/Loss" handle={props.handlers.handlePL}/>
            <Section name="Return" handle={props.handlers.handleReturn}/>
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
            <Data data={asset.price}/>
            <Data data={asset.avg}/>
            <Data data={asset.invested}/>
            <Data data={asset.holding}/>
            <Data data={asset.pl}/>
            <Data data={asset.return}/>
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