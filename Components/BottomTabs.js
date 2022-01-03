import React, { useState } from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'

export default function BottomTabs({currentTab}) {

    const [activeTab,setActiveTab] = useState(currentTab);

    const tabs = [
        {
            name:"Home",
            image:'home'
        },
        {
            name:"Assets",
            image:'rocket1'
        },
        {
            name:"Profile",
            image:'user'
        },
       
    ]
    return (
        <View 
            style={{
                flexDirection:'row',
                justifyContent:'space-evenly',
                alignItems:'center',
                paddingVertical:5,
            }}
        >
            {tabs.map((tab,index)=>(
                <Tab key={index} name={tab.name} image={tab.image} activeTab={activeTab} setActiveTab={setActiveTab}/>
            ))}
        </View>
    )
}

function Tab(props){
    return(
        <TouchableOpacity
            onPress={()=>{props.setActiveTab(props.name)}}
        >
            <AntDesign name={props.image} size={25} style={{alignSelf:'center',color:props.name===props.activeTab?'black':'#eee'}}/>
            <Text 
                style={{
                    fontSize:15,
                    fontWeight:'bold',
                    color:props.name===props.activeTab?'black':'#eee'
                }}
            >
            {props.name}</Text>
        </TouchableOpacity>
    )
}
