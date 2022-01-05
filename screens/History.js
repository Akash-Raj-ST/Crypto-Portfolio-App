import React from 'react'
import { View, Text } from 'react-native'
import OrderData from '../Components/History/OrderData'
import Tabs from '../Components/History/Tabs'

export default function History() {
    return (
        <View>
            <Tabs/>
            <OrderData/>
        </View>
    )
}
