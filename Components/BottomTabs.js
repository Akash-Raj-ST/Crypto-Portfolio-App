import React, { useState } from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign'
import { Divider } from 'react-native-elements';

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
        <View>
            <Divider/>
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
        </View>

    )
}

function Tab(props){
    const navigation = useNavigation();
    return(
        <TouchableOpacity
            onPress={()=>{
                navigation.navigate(props.name);
            }}
        >
            <AntDesign name={props.image} size={25} style={{alignSelf:'center',color:props.name===props.activeTab?'black':'grey'}}/>
            <Text 
                style={{
                    fontSize:15,
                    fontWeight:'bold',
                    color:props.name===props.activeTab?'black':'grey'
                }}
            >
            {props.name}</Text>
        </TouchableOpacity>
    )
}
