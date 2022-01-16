import React, { useState,useEffect } from 'react'
import { View, Text, TextInput } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function SearchAsset({query,setQuery}) {


    return (
        <View 
            style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                borderWidth:2,
                margin:10,
                alignSelf:'center',
                borderRadius:10
            }}
        >
            <TextInput 
                style={{
                    width:250,
                    height:40,
                    alignSelf:'center',
                    paddingHorizontal:10,
                    fontSize:16,
                }}
                placeholder='search...'
                value={query}
                onChangeText={(value)=>{setQuery(value)}}
            />
            <AntDesign name='closecircle' size={17}
                style={{
                   padding:5
                }}
                onPress={()=>{setQuery("")}}
            />
        </View>
    )
}
