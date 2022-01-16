import React,{useState} from 'react'
import { View } from 'react-native'

import SearchAsset from '../Components/Assets/SearchAsset'
import AssetData from '../Components/Assets/AssetData'
import BottomTabs from '../Components/BottomTabs'

export default function Assets() {
    const [query,setQuery] = useState("");

    return (
        <View style={{paddingTop:50,flex:1}}>
            <SearchAsset query={query} setQuery={setQuery}/>
            <AssetData query={query}/>
            <BottomTabs currentTab="Assets"/>
        </View>
    )
}
