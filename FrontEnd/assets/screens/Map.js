import {Animated,TextInput,StyleSheet, SafeAreaView, View, Text, LogBox,Image,Dimensions,TouchableOpacity,Alert,TouchableHighlight,ToastAndroid } from 'react-native';
import {CheckBox} from '@react-native-community/checkbox'
import Login from './Login';
import Register from './Register';
import {Button,Avatar} from 'react-native-paper'
// import { CheckBox } from 'react-native';
// import { CheckBox, Icon } from '@rneui/themed';
// import CheckBox from 'react-native-check-box';
import React,{useEffect, useState} from 'react';
import LoginScreen,{ SocialButton }  from "react-native-login-screen";
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ImagePicker from 'react-native-image-crop-picker';
import { useTheme } from 'react-native-paper';
import GetLocation from 'react-native-get-location'

import MapView, { PROVIDER_GOOGLE, Marker, MapMarker  } from 'react-native-maps'

const Map = ({navigation}) => {

    const [region, setRegion]=useState("");
  return (
    <View>
     <View style={{ height:400, width:"98%", alignSelf:'center' }}>
 <MapView
provider={PROVIDER_GOOGLE}
style={styles.map}
initialRegion={{
  latitude: 24.8609,
  longitude: 66.990501,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}}>
<MapMarker draggable
pinColor='#bc70ed'

onDrag={(e)=>{
  console.log("eeeeeeeeee",e.nativeEvent.coordinate)
}}

coordinate={{
 
  latitude: 24.8609,
      longitude: 66.990501,
}} 

/>

{/* console.log(setRegion); */}
</MapView>

 </View>
 <View style={{ flexDirection:'row',marginTop:20  }}>
 <View style={{  }}>
<TouchableOpacity style={{marginLeft:125,marginRight:30,borderRadius:20,elevation:1,backgroundColor:'#88ed70',  padding: 10, alignItems:'center'  }}>
<Text onPress={()=>navigation.navigate('Register')}>Back</Text>
</TouchableOpacity>
</View>
<View style={{ }}>
<TouchableOpacity style={{marginRight:50,borderRadius:20,elevation:1,backgroundColor:'#f4d6a0',  padding: 10, alignItems:'center' }}>
<Text onPress={()=>{alert('Successfully Registered'); navigation.navigate('Login')}}>Finish</Text>
</TouchableOpacity>
</View>
</View>
    </View>
  )
}
const styles=StyleSheet.create({
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  })
export default Map