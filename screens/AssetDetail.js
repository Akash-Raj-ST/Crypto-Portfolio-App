import React from 'react'
import { View, Text,ScrollView } from 'react-native'
import Chart from '../Components/AssetDetails/Chart'
import Stats from '../Components/AssetDetails/Stats'
import Top from '../Components/AssetDetails/Top'
import BottomTabs from '../Components/BottomTabs'

export default function AssetDetail({route}) {
    const debug = true;
    if(debug){
        console.log("Asset detail Data")
        console.log(route.params.data);
    }
    return (
        <View style={{flex:1}}>
            <Top currency={route.params.data.currency}/>
            <ScrollView>
                <Stats data={route.params.data}/>
            </ScrollView>
            <BottomTabs currentTab="Assets"/>
        </View>
    )
}
