import React,{useState,useEffect} from 'react'
import { View, Text, Modal, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'

export default function CoinSelection(props){

    const [search,setSearch] = useState("");

    return(
        <View style={{justifyContent:'center',alignContent:'center'}}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={true}     
                onRequestClose={() => {
                    props.setVisible(false);
                }}
            >   
                <View style={{justifyContent:'center',backgroundColor:'white',borderRadius:10,margin:20,elevation:5,marginTop:100}}>
                    <View> 
                        <Text style={styles.heading}>Select Coin</Text>
                        <Search search={search} setSearch={setSearch}/>
                        <CoinList query={search} selectedCoin={props.selectedCoin}/>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

function Search(props){

    return (
        
        <View style={styles.search}>
            <TextInput 
                style={{
                    width:250,
                    height:40,
                    alignSelf:'center',
                    paddingHorizontal:10,
                    fontSize:16,
                }}
                placeholder='search...'
                value={props.search}
                onChangeText={(value)=>{props.setSearch(value)}}
            />
            <AntDesign name='closecircle' size={17}
                style={{
                   padding:5
                }}
                onPress={()=>{props.setSearch("")}}
            />
       </View>
    )
}

function CoinList(props){
    const coins = [
        {
            currency:'Bitcoin',
            logo:require("../../../assets/images/bitcoin.png")
        },
         {
            currency:'Ethereum',
            logo:require("../../../assets/images/bitcoin.png")
        }, {
            currency:'Matic',
            logo:require("../../../assets/images/bitcoin.png")
        },
    ]

    const filterCoins = coins.filter((coin)=>coin.currency.includes(props.query));
    if(filterCoins.length>0)
        return(
            <ScrollView style={styles.coinListContainer} vertical>
                {filterCoins.map((coin,index)=>(
                    <TouchableOpacity 
                        key={index} 
                        style={styles.coinList}
                        onPress={()=>{
                            props.selectedCoin(coin.currency)
                        }}
                    >
                        <View style={{flexDirection:'row'}}>
                            <Image source={coin.logo} style={{width:32,height:32,marginRight:10}}/>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>{coin.currency}</Text>
                        </View>
                        <AntDesign name='right' size={18}/>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        )
    else
        return(
            <Text style={{fontWeight:'bold',fontSize:20,textAlign:'center'}}>No such coin in List!!!</Text>
        )
}

const styles = StyleSheet.create({

    search:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
        marginVertical:10,
        alignSelf:'center',
        borderRadius:10,
        borderColor:'#eee',
        elevation:5,
        backgroundColor:'white'
    },
    slectionContainer:{
        margin:20
    },  
    heading:{
        fontSize:25,
        fontWeight:'bold',
        marginLeft:20,
        marginVertical:10
    },
    coinListContainer:{
        borderWidth:2,
        borderColor:'#eee',
        borderRadius:10,
        padding:10,
        width:280,
        height:250,
        marginVertical:10,
        alignSelf:'center',
        backgroundColor:'white',
        elevation:5
    },
    coinList:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:10,
    }
})