import React from 'react'
import { View, Text } from 'react-native'
import OrderData from '../Components/History/OrderData'
import Tabs from '../Components/History/Tabs'

export default function History({route}) {
    return (
        <View>
            <Tabs/>
            <OrderData currency={route.params.currency}/>
        </View>
    )
}
