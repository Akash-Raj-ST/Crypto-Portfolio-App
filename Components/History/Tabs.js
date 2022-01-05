import React,{useState} from 'react'
import { View, Text,TouchableOpacity } from 'react-native'

export default function Tabs(){
    const [activeTab,setActiveTab] = useState("Order");

    return(
        <View 
            style={{
                paddingTop:50,
                flexDirection:'row',
                backgroundColor:'white',
                borderRadius:20,
                margin:10,
                alignSelf: 'center',
                paddingHorizontal:10,
            }}>
           <Tab tab="Order" activeTab={activeTab} setActiveTab={setActiveTab}/>
           <Tab tab="Transaction" activeTab={activeTab} setActiveTab={setActiveTab}/>
        </View>
    )
}

function Tab(props){
    return(
        <TouchableOpacity 
            style={{
                paddingHorizontal:10,
                paddingVertical:5,
                backgroundColor:props.activeTab===props.tab?'black':'white',
                borderRadius:15
            }}
            onPress={()=>{props.setActiveTab(props.tab)}}
        >
                <Text 
                    style={{
                        fontSize:16,
                        fontWeight:'bold',
                        color:props.activeTab===props.tab?'white':'black',
                        paddingHorizontal:5
                    }}
                >
                    {props.tab}</Text>
            </TouchableOpacity>
    )
}
