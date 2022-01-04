import React from 'react'
import { View, Text,ScrollView } from 'react-native'
import Chart from '../Components/AssetDetails/Chart'
import Stats from '../Components/AssetDetails/Stats'
import Top from '../Components/AssetDetails/Top'
import BottomTabs from '../Components/BottomTabs'

export default function AssetDetail() {
    return (
        <View style={{flex:1}}>
            <Top/>
            <ScrollView>
                <Stats/>
            </ScrollView>
            <BottomTabs currentTab="Assets"/>
        </View>
    )
}
