import { StyleSheet, Text, View,} from 'react-native'
import { Button } from 'react-native-paper';
import React from 'react'
import { Dimensions } from 'react-native'
import { Kaede } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { TextInput } from 'react-native-paper';
import * as yup from 'yup';
import Formik from 'formik'

let schema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup.string().email("Please enter email").matches(/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/),

  
});

const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;

const Contact = ({navigation,route}) => {
  

  return (
    <View style={styles.mainContainer}>
      <View style={styles.fContainer} ></View>
      <View style={styles.sContainer}>
        <View style={{ left:92,top:50 }}>
            <Text style={{ fontWeight:'bold', fontFamily: "Cochin",color:'#9FD8C6' }}>Contact Form</Text>
            <TextInput placeholderTextColor={'#9FD8C6'} style={{ top:20, borderRadius:10,width:200,right:40,color:'#9FD8C6' }} placeholder='Enter Your Name'/>
            <TextInput placeholderTextColor={'#9FD8C6'} style={{ top:30, borderRadius:10,width:200,right:40,color:'#9FD8C6' }} placeholder='Enter Your Email'/>
            <TextInput keyboardType='numeric' placeholderTextColor={'#9FD8C6'} style={{ top:40, borderRadius:10,width:200,right:40,color:'#9FD8C6' }} placeholder='Enter Your Number'/>
            
            <Button style={{ borderRadius:20,top:60,right:0, width:100 }} mode="contained" onPress={() => console.log('Pressed')}>
    Submit
  </Button>
        </View>
  
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'row',
        height:height,
        width:width/1.1,
        backgroundColor:'#9FD8C6',
        borderTopRightRadius:40,
        borderBottomRightRadius:40
        
    }, fContainer:{
        height:height,
        width:width/4,
        backgroundColor:'#35acce'
        , 

        borderTopRightRadius:20
        
    },sContainer:{
        height:height/1.5,
        width:width/1.4,
        backgroundColor:'#f72d69',
        borderRadius:60,
        marginTop:60,
        marginLeft:5,
        marginRight:10
    

    }
})
export default Contact