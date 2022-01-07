import React,{useState} from 'react'
import { View, Text, TouchableOpacity,StyleSheet,Alert} from 'react-native'

import * as DocumentPicker from 'expo-document-picker'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function Document() {

    const [fileUploaded,setFileUploaded] = useState(false);
    const [fileDetails,setFileDetails] = useState({name:'',uri:'',date:'',time:''});

    async function documentHandle(){

        const handleSubmission=(f)=>{
            if(f.type==='cancel'){
                console.log('cancelled');
            }else{
                setFileDetails({name:f.name,uri:f.uri,date:'',time:''})
                setFileUploaded(true);
            }
        }

        try{
            DocumentPicker.getDocumentAsync({type:"application/pdf",}).
            then((f)=>{handleSubmission(f)})
        }catch(error){
            console.log(error);
        }
        
    }

    function removeFile(){
        const remove = ()=>{
            setFileDetails({name:'',uri:'',date:'',time:''});
            setFileUploaded(false);
        }
        Alert.alert(
            "Are you Sure?",
            "Do you want to remove the file?",
            [
                {
                    text:"Yes",
                    style:"ok",
                    onPress:()=>remove(),
                },
                {
                    text:"No",
                    style:"ok",
                }
            ],
            {
                cancelable:true
            }
        )
        
    }

    return (
        <View>
            <Text style={styles.dataHeading}>Your Data</Text>
            
            {fileUploaded?
                <FileStatus uploaded={fileUploaded} filename={fileDetails.name} removeFile={removeFile}/>
                :
                <FileStatus uploaded={fileUploaded} filename="No file uploaded"/>
            }
            <TouchableOpacity 
                onPress={()=>documentHandle()}
                style={styles.Button}
            >
                <Text  style={styles.ButtonText}>Add CSV</Text>
                <AntDesign name='addfile' size={18} color='white'/>
            </TouchableOpacity>
        </View>
    )
}

function FileStatus(props){
    console.log(props);
    return(
        <View style={statusStyles(props).container}>
        
            <View style={statusStyles(props).fileStatus}>
                <Text style={statusStyles(props).fileName}>{props.filename}</Text>
                {props.uploaded?
                    <AntDesign name='checkcircleo' size={18} color='white'/>
                    :
                    <AntDesign name='warning' size={18} color='white'/>
                }
            </View>
            {props.uploaded?
                <TouchableOpacity
                    onPress={()=>{
                        props.removeFile();
                    }}
                >
                    <AntDesign name='closecircle' size={25} style={{marginHorizontal:5}}/>
                </TouchableOpacity>
                :
                null
            }
        </View>
    )
}
const styles = StyleSheet.create({
    dataHeading:{
        fontSize:24,
        fontWeight:'bold',
        padding:10
    },
    Button:{
        backgroundColor:'black',
        borderRadius:15,
        alignSelf:'center',
        paddingHorizontal:40,
        paddingVertical:15,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10
    },
    ButtonText:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
        marginHorizontal:10
    },
    
})

const statusStyles =(props)=>StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10
    },
    fileStatus:{
        flexDirection:'row',
        width:'80%',
        backgroundColor:props.uploaded?'green':'#e3eb09',
        alignSelf:'center',
        justifyContent:'space-around',
        alignItems:'center',
        padding:10,
        borderRadius:10,
        // borderColor:props.uploaded?'#005c23':'yellow',
        borderColor:'black',
        borderWidth:2
    },
    fileName:{
        fontSize:18,
        color:'white'
    },
})