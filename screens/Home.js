import React ,{useState,useEffect} from 'react'
import { View, ScrollView} from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'

import Top from '../Components/Home/Top'
import Summary from '../Components/Home/Summary'
import Allotment from '../Components/Home/Allotment'
import Statistics from '../Components/Home/Statistics'
import BottomTabs from '../Components/BottomTabs'

import Store from '../Redux/store'


export default function Home() {
    const [assets,setAssets] = useState(Store.getState().allAsset)
    
    const handleAddOrder = ()=>{
        setAssets(Store.getState().allAsset);
        console.log("handling...Home");
    }

    useEffect(() => {
        const unsubscribe = Store.subscribe(handleAddOrder);
        return () => {
            // Clean up the subscription
            unsubscribe();
        };
    });

    return (
        <View style={{paddingTop:20,flex:1}}>    
            <Top/>
            <Divider/>
            <ScrollView >    
                <Summary allAssets={assets}/>
                <Allotment allAssets={assets}/>
                <Statistics allAssets={assets}/>
            </ScrollView>
            <BottomTabs currentTab="Home"/>
        </View>
    )
}




