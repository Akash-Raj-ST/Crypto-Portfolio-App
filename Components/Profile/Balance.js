import React from 'react'
import { View, Text,Image } from 'react-native'

export default function Balance() {
    return (
        <View
            style={{
                backgroundColor:'black',
                padding:30,
                borderRadius:20,
                margin:20,
                position:'relative'
            }}
        >
            <Image 
                source={require('../../assets/images/money.png')}
                style={{
                    width:70,
                    height:70,
                    position:'absolute',
                    top:'40%',
                    left:20
                }}
            />
            <View>
                <Text 
                    style={{
                        color:'white',
                        textAlign:'center',
                        fontSize:26,
                        fontWeight:'bold',
                        marginBottom:10
                    }}
                >Balance</Text>
                <Text 
                    style={{
                        color:'white',
                        textAlign:'center',
                        fontSize:20,
                        fontWeight:'bold'
                    }}
                >$23,678</Text>
            </View>
        </View>
    )
}
