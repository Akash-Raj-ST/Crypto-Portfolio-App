import React from 'react'
import { View, Text } from 'react-native'

import SearchAsset from '../Components/Assets/SearchAsset'
import AssetData from '../Components/Assets/AssetData'
import BottomTabs from '../Components/BottomTabs'


export default function Assets() {
    return (
        <View style={{paddingTop:50,flex:1}}>
            <SearchAsset/>
            <AssetData/>
            <BottomTabs currentTab="Assets"/>
        </View>
    )
}
