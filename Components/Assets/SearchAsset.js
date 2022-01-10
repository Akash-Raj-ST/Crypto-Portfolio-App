import React, { useState,useEffect } from 'react'
import { View, Text, TextInput } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Store from '../../Redux/store'

export default function SearchAsset() {

    const [search,setSearch] = useState("");

    useEffect(() => {
        console.log(Store.getState().search)
        console.log("query: "+search);
        Store.dispatch({
            type:"filter",
            payload:{
                query:search,
                data:Store.getState().allAsset
            }
        })
    }, [search])


    return (
        <View 
            style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                borderWidth:2,
                amrgin:10,
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
                value={search}
                onChangeText={(value)=>{setSearch(value)}}
            />
            <AntDesign name='closecircle' size={17}
                style={{
                   padding:5
                }}
                onPress={()=>{setSearch("")}}
            />
        </View>
    )
}
