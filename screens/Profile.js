import React from 'react'
import { ScrollView, View} from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'

import BottomTabs from '../Components/BottomTabs'
import Balance from '../Components/Profile/Balance'
import Document from '../Components/Profile/Document'
import Info from '../Components/Profile/Info'

export default function Profile() {
    return (
        <View style={{flex:1,justifyContent:'space-between'}}>
            <Info/>
            <Divider/>
            <ScrollView>           
                <Document/>
                <Divider/>
                <Balance/>
            </ScrollView>
            <BottomTabs currentTab="Profile"/>
        </View>
    )
}
