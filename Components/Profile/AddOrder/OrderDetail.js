import React, { useState,useEffect } from 'react'
import { View, Text,TouchableOpacity,StyleSheet, Modal,TextInput, Image } from 'react-native'

import DateTimePicker from '@react-native-community/datetimepicker';

export default function OrderDetails(props){

    const [quantity,setQuantity] = useState(0);
    const [price,setPrice] = useState(0);
    const [amount,setAmount] = useState(0);

    const [activeTab,setActiveTab] = useState("Buy");


    useEffect(()=>{
        const amt = Number(quantity)*Number(price)
        setAmount(amt);
    },[quantity,price])


    return(
        <View style={{justifyContent:'center',alignContent:'center'}}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={true}
                onRequestClose={
                    ()=>props.setVisible(false)
                }     
            >   
                <View style={{justifyContent:'center',backgroundColor:'white',borderRadius:10,margin:20,elevation:5,marginTop:10}}>
                    <View> 
                        <Text style={styles.heading}>Add transaction</Text>
                        <View
                            style={{
                                flexDirection:'row',
                                alignItems:'center',
                                backgroundColor:'white',
                                borderRadius:10,
                                paddingVertical:10,
                                marginHorizontal:20,
                                elevation:10
                            }}
                        >
                            <Image source={require("../../../assets/images/bitcoin.png")} style={{width:35,height:35,marginHorizontal:10}}/> 
                            <Text style={{fontWeight:'bold',fontSize:22}}>{props.currency}</Text>
                        </View>

                        <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>

                        <Input placeholder="Quantity" attValue={quantity} setValue={setQuantity}/>
                        <Input placeholder="Price Per Coin" attValue={price} setValue={setPrice}/>

                        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                            <DateInput/>
                            <TimeInput/>
                        </View>
                        <Total amount={amount} type={activeTab}/>
                        <TouchableOpacity style={styles.button2}>
                            <Text style={styles.buttonText}>Add</Text>
                        </TouchableOpacity>  
                    </View>
                </View>
            </Modal>
        </View>
    );
}

function Tabs(props){

    return(
        <View 
            style={{
                flexDirection:'row',
                borderRadius:20,
                margin:10,
                alignSelf: 'center',
                paddingHorizontal:10,
                marginTop:20
            }}>
           <Tab tab="Buy" activeTab={props.activeTab} setActiveTab={props.setActiveTab}/>
           <Tab tab="Sell" activeTab={props.activeTab} setActiveTab={props.setActiveTab}/>
        </View>
    )
}      
        // <Tab tab="Transaction" activeTab={activeTab} setActiveTab={setActiveTab}/>
function Tab(props){
    return(
        <TouchableOpacity 
            style={{
                paddingHorizontal:50,
                paddingVertical:5,
                backgroundColor:props.activeTab===props.tab?'black':'white',
                borderRadius:15
            }}
            onPress={()=>{props.setActiveTab(props.tab)}}
        >
                <Text 
                    style={{
                        fontSize:18,
                        fontWeight:'bold',
                        color:props.activeTab===props.tab?'white':'black',
                        paddingHorizontal:5
                    }}
                >
                    {props.tab}</Text>
            </TouchableOpacity>
    )
}

function Input(props){
    return(
        <View style={{marginVertical:5}}>
            <Text style={{fontWeight:'bold',fontSize:20,marginHorizontal:10}}>{props.placeholder}</Text>
            
            <TextInput 
                style={{
                    borderWidth:2,
                    height:50,
                    borderRadius:10,
                    marginHorizontal:10,
                    // marginVertical:5,
                    borderColor:'#eee',
                    paddingHorizontal:10,
                    fontWeight:'bold',
                    fontSize:18,
                    backgroundColor:'white',
                    elevation:8
                }}
                value={props.attValue.toString()}
                onChangeText={(value)=>props.setValue(value)}
                keyboardType='number-pad'
            />
        </View>
    )
}

function DateInput(){
    const [date,setDate] = useState(new Date());
    const [openDate,setOpenDate] = useState(false);
    return(
        <TouchableOpacity 
            style={{alignItems:'center',marginBottom:10}} 
            activeOpacity={0.8}
            onPress={()=>{
                setOpenDate(true);
            }}
        >
            <Text style={{fontWeight:'bold',fontSize:18,marginBottom:5}}>Date</Text>
            <View style={{backgroundColor:'white',elevation:8,paddingVertical:5,paddingHorizontal:15,borderRadius:8}}>
                <Text style={{fontWeight:'bold',fontSize:18}}>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</Text>
            </View>
           {openDate && <DateTimeModal mode='date' setOpen={setOpenDate} setValue={setDate}/>}
        </TouchableOpacity>
    )
}

function TimeInput(){
    const [time,setTime] = useState(new Date());
    const [openTime,setOpenTime] = useState(false);
    return(
        <TouchableOpacity 
            style={{alignItems:'center',marginBottom:10}} 
            activeOpacity={0.8}
            onPress={()=>{
                setOpenTime(true);
            }}
        >
            <Text style={{fontWeight:'bold',fontSize:18,marginBottom:5}}>Time</Text>
            <View style={{backgroundColor:'white',elevation:8,padding:5,borderRadius:8}}>
                <Text style={{fontWeight:'bold',fontSize:18}}>{time.getHours()}:{time.getMinutes()<10?"0"+time.getMinutes():time.getMinutes()}</Text>
            </View>
           {openTime && <DateTimeModal mode='time' setOpen={setOpenTime} setValue={setTime}/>}
        </TouchableOpacity>
    )
}

function DateTimeModal(props){
    return(
       <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={props.mode}
          is24Hour={true}
          display="spinner"
          onChange={(value)=>{props.setOpen(false);props.setValue(new Date(Date.parse(value.nativeEvent.timestamp)))}}
        />
    )
}

function Total({amount,type}){
    return(
        <View style={{marginVertical:10}}>
            <Text style={{fontWeight:'bold',fontSize:20,marginHorizontal:10}}>{type=="Buy"?"Total Spend":"Total Received"}</Text>
            
            <View
                style={{
                    borderWidth:2,
                    height:50,
                    borderRadius:10,
                    marginHorizontal:10,
                    borderColor:'#eee',
                    justifyContent:'center',
                    paddingHorizontal:10,
                    backgroundColor:'white',
                    elevation:5
                }}
            >
                <Text style={{fontWeight:'bold',fontSize:18}}>$ {amount}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button:{
        backgroundColor:'blue',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:15,
        margin:20,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center'
    },
    button2:{
        backgroundColor:'black',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:15,
        margin:20,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center'
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        fontSize:18,
        textAlign:'center'
    },
    search:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
        marginVertical:10,
        alignSelf:'center',
        borderRadius:10,
        borderColor:'grey',
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
        borderColor:'grey',
        borderRadius:10,
        padding:10,
        width:280,
        height:250,
        marginVertical:10,
        alignSelf:'center',
    },
    coinList:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:10,
    }
})