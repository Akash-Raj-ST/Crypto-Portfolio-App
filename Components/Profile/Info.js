import React from 'react'
import { View, Text, Image } from 'react-native'

export default function Info() {
    return (
        <View
            style={{
                paddingTop:50,
                flexDirection:'row',
                alignItems:'center',
                margin:30
            }}
        >
            <Image 
                style={{
                    width:90,
                    height:90,
                    borderRadius:50
                }}
                source={require("../../assets/images/dp.jpg")}
            />
            <Text
                style={{
                    fontSize:25,
                    fontWeight:'bold',
                    paddingHorizontal:20
                }}
            >Akash Raj</Text>
        </View>
    )
}
