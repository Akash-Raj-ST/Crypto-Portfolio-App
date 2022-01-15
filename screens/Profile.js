import React from 'react'
import { ScrollView, View} from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'

import BottomTabs from '../Components/BottomTabs'
import AddOrder from '../Components/Profile/AddOrder'
import DataTable from '../Components/Profile/DataTable'
import Info from '../Components/Profile/Info'

export default function Profile() {
    return (
        <View style={{flex:1,justifyContent:'space-between'}}>

            <View>
                <Info/>
                <DataTable/>
            </View>
            <AddOrder/>
            <BottomTabs currentTab="Profile"/>
        </View>
    )
}
