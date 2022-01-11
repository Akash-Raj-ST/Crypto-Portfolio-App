import React,{useState,useEffect} from 'react'
import { View, Text,ScrollView, TouchableOpacity,Image } from 'react-native'

import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Store from '../../Redux/store'

export default function AssetData() {

    const [data,setData] = useState(Store.getState().search);
    const [investedSort,setInvestedSort] = useState(true);
    const [plSort,setPLSort] = useState(true);
    const [returnSort,setReturnSort] = useState(true);


    const handleUpdate = ()=>{
        console.log("handling")
        setData(Store.getState().search)
    }

    useEffect(() => {
        
        const unsubscribe = Store.subscribe(handleUpdate);
       // Specify how to clean up after this effect:
        return ()=> {
            unsubscribe();
            console.log("unsubscribed!!!");
        };
    })

    

    function handleInvested(){
 
        setInvestedSort(!investedSort)
         Store.dispatch({
            type:"SORT",
            by:"INVESTED",
            ascOrder:investedSort
        })
    }
   
    function handlePL(){
        setPLSort(!plSort)
         Store.dispatch({
            type:"SORT",
            by:"PL",
            ascOrder:plSort
        })
    }
    function handleReturn(){
        setReturnSort(!returnSort)
         Store.dispatch({
            type:"SORT",
            by:"RETURN",
            ascOrder:returnSort
        })
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
            <Data data={asset.price}/>
            <Data data={asset.avg_price}/>
            <Data data={asset.total_amount}/>
            <Data data={asset.total_quantity}/>
            <Data data={asset.pl}/>
            <Data data={asset.return}/>
        </TouchableOpacity>
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