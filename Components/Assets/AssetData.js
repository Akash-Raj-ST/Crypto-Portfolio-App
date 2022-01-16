import React,{useState,useEffect} from 'react'
import { View, Text,ScrollView, TouchableOpacity,Image } from 'react-native'

import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Store from '../../Redux/store'

export default function AssetData({query}) {

    const perData = Store.getState().allAsset;
    const [data,setData] = useState(perData);
    const [investedSort,setInvestedSort] = useState(true);
    const [plSort,setPLSort] = useState(true);
    const [returnSort,setReturnSort] = useState(true);

    useEffect(() => { 
        const newData = perData.filter((order)=>order.currency.includes(query));
        setData(newData);
    },[query])

    function ascSort(a,b){
        return (a > b) ? 1 : ((b > a) ? -1 : 0);
    }

    function desSort(a,b){
        return (a < b) ? 1 : ((b < a) ? -1 : 0);
    }

    function handleInvested(){
        
        if(investedSort)
            setData(data.sort((a,b)=>ascSort(a.total_amount,b.total_amount)));
        else
            setData(data.sort((a,b)=>desSort(a.total_amount,b.total_amount)));
        setInvestedSort(!investedSort);
    }
   
    function handlePL(){
        if(plSort)
            setData(data.sort((a,b)=>ascSort(a.pl,b.pl)));
        else
            setData(data.sort((a,b)=>desSort(a.pl,b.pl)));
        setPLSort(!plSort)
    }
    function handleReturn(){
        if(returnSort)
            setData(data.sort((a,b)=>ascSort(a.returns,b.returns)));
        else
            setData(data.sort((a,b)=>desSort(a.returns,b.returns)));
        setReturnSort(!returnSort)
    }

    // const handlers={
    //     handlePrice:handlePrice(),
    //     handleHolding:handleHolding(),
    //     handleInvested:handleInvested(),
    //     handlePL:handlePL(),
    //     handleReturn:handleReturn()
    // }
     const handlers={
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
            <Section name="Price"/>
            <Section name="Average Buy Price"/>
            <Section name="Invested" handle={props.handlers.handleInvested}/>
            <Section name="Holding"/>
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
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={{flexDirection:'row',paddingVertical:5}}
            onPress={()=>{
                navigation.navigate('AssetDetail',{
                    data:asset
                });
            }}
        >
            <DataAsset data={asset.currency} icon={asset.icon}/>
            <Data data={asset.curr_price}/>
            <Data data={asset.avg_price}/>
            <Data data={asset.total_amount}/>
            <Data data={asset.total_quantity}/>
            <Data data={asset.pl} value={"pl"}/>
            <Data data={asset.returns} value={"returns"}/>
        </TouchableOpacity>
    )
}

function Data(props){

    //for returns
    const percent = props.value?props.value==="returns"?"%":"":"";
    //for pl
    const plus_minus = props.value?props.value==="pl"||"returns"?true:false:false;

    let value = props.data;
    if(props.value){
        if(props.value==="returns"||"pl"){
            if(value>0){
                value = "+"+value.toString();
            }
        }
    }
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
            <Text 
                style={{
                    fontSize:15,
                    fontWeight:'bold',
                    color:plus_minus && props.data!=0?props.data>0?'green':'red':'black',
                }}>
                {value}{percent}</Text>
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
                justifyContent:'flex-start'
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