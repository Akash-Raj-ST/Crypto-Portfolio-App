import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Chart() {
    return (
        <View style={styles.chart}>
        </View>
    )
}

const styles = StyleSheet.create({
    chart:{
        width:'95%',
        height:'50%',
        backgroundColor:'black',
        alignSelf:'center',
        borderRadius:20,
        backgroundColor:'blue',
        marginVertical:10
    }
})
