import React ,{useState,useEffect} from 'react'
import { View, ScrollView} from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'

import Top from '../Components/Home/Top'
import Summary from '../Components/Home/Summary'
import Allotment from '../Components/Home/Allotment'
import Statistics from '../Components/Home/Statistics'
import BottomTabs from '../Components/BottomTabs'

import Store from '../Redux/store'
import db from '../firebase'
import { getDoc, doc} from 'firebase/firestore/lite'

export default function Home({route}) {
   
    const init = async()=>{
        const userID = route.params.userID;
        const fileName = 'dcx.csv';
        const docRef = doc(db, "User", userID);
        // console.log(docRef);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {

            const files= docSnap.data().files;

            for(var i=0;i<files.length;i++){
                if(files[i].fileName==fileName){
                    updateData(files[i].orders);
                    break;
                }
            }

        } else {
            console.log("No such document!");
        }
    }
    
    function updateData(orders){
        Store.dispatch({
            type:"ADD",
            payload:{
                orders:orders
            }
        })
        console.log(Store.getState().allData);
    }

    useEffect(()=>{
        init();
    },[])

    return (
        <View style={{paddingTop:20,flex:1}}>    
            <Top/>
            <Divider/>
            <ScrollView >    
                <Summary/>
                <Allotment/>
                <Statistics/>
            </ScrollView>
            <BottomTabs currentTab="Home"/>
        </View>
    )
}




