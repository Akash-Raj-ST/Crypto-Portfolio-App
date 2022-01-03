import React ,{useState} from 'react'
import { View, ScrollView,SafeAreaView } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'

import Top from '../Components/Home/Top'
import Summary from '../Components/Home/Summary'
import Allotment from '../Components/Home/Allotment'
import Statistics from '../Components/Home/Statistics'
import BottomTabs from '../Components/BottomTabs'

export default function Home() {
    return (
        <SafeAreaView style={{paddingTop:20,flex:1}}>    
            <Top/>
            <Divider/>
            <ScrollView >    
                <Summary/>
                <Allotment/>
                <Statistics/>
            </ScrollView>
            <Divider/>
            <BottomTabs currentTab="Home"/>
        </SafeAreaView>
    )
}




