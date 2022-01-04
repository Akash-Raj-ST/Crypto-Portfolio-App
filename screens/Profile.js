import React from 'react'
import { View, Text } from 'react-native'
import BottomTabs from '../Components/BottomTabs'
import Balance from '../Components/Profile/Balance'
import Info from '../Components/Profile/Info'

export default function Profile() {
    return (
        <View style={{flex:1,justifyContent:'space-between'}}>
            <Info/>
            <Balance/>
            <BottomTabs currentTab="Profile"/>
        </View>
    )
}
