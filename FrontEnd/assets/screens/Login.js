import {TextInput, SafeAreaView, View, Text, LogBox,Image,Dimensions,Button,TouchableOpacity,Alert } from 'react-native';
import Register from './Register';
// import { CheckBox } from 'react-native';
// import { CheckBox, Icon } from '@rneui/themed';
// import CheckBox from 'react-native-check-box';
import React,{useState} from 'react';

// import LoginScreen,{ SocialButton }  from "react-native-login-screen";
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import ForgotPassword from './ForgotPassword';
import { Checkbox } from 'react-native-paper';
import { Icon } from 'react-native-vector-icons/MaterialIcons';
// const [w,h]=Dimensions.get(screen);
import CheckBox from '@react-native-community/checkbox';
const Login = ({navigation}) => {
  const Stack=createNativeStackNavigator();
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [checked, setChecked] = React.useState(false);
  return (

    <View style={{ flex:1, justifyContent:'center' }} >
    {/* <View styles={{ width:'100%',backgroundColor:'white' }}>
      
    
    </View> */}
    <View style={{marginLeft:20,marginRight:20, justifyContent:'center' }}>
    <Image style={{borderRadius:40,height:'50%',width:'100%',elevation:2}} source={require('../images/logo.png')}/>   
    </View>
<View style={{ backgroundColor:'#fff',marginLeft:20, marginBottom:90, borderRadius:20, width:'90%', }}>
<View style={{ marginTop:20 }}>
  <TextInput placeholder='Enter your username or email' placeholderTextColor={'white'} autoCapitalize='email,username' style={{    height: 40,
    alignSelf:'center',
    borderColor: "#032b5f",
    backgroundColor:'#032b5f',
    color:'#d9d4ce',
    width: "70%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    } }/>
    <TextInput placeholder='Enter your Password' placeholderTextColor={'white'} autoCapitalize='email,username' style={{    height: 40,
    alignSelf:'center',
    borderColor: '#032b5f',
    backgroundColor:'#032b5f',
    width: "70%",
    borderWidth: 1,
    marginTop:15,
    borderRadius: 10,
    padding: 10,
    } }/></View>
    <View style={{ marginTop:10 }}>
    <Text style={{color:'#5f4b2d', width:140, marginLeft:200,marginBottom:20 }} onPress={() => navigation.navigate('ForgotPassword')}>Forgot Password</Text>
    <View style={{ flexDirection:'row', alignItems:'center',alignSelf:'center',marginRight:110 }}>

    <CheckBox
    
    disabled={false}
    value={checked}
    onValueChange={
      (newValue) => setChecked(newValue)
    }
  />
    {/* <Checkbox style={{  }}
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    /> */}
     <Text style={{ color:'#5f4b2d' }}>Remember Me</Text>
    </View>
   
    <TouchableOpacity  style={{ color:'green',marginLeft:90,marginRight:90,borderRadius:20, elevation:1,backgroundColor:'blue',  padding: 10, alignItems:'center'  }}>
    <Text style={{ color:'white' }} onPress={()=>navigation.navigate('Home',{data:''})}>Login</Text>
</TouchableOpacity>
<Text style={{color:'#5f4b2d', alignItems:'center', marginTop:20, marginLeft:15,fontSize:16,marginBottom:10 }} >Do not have an account?<Text style={{ color:'#eb9854' }} onPress={() => navigation.navigate('Register')}> Create Account</Text></Text>
</View>
</View>
   </View>

//     <LoginScreen
//    logoImageSource={require("../images/logo.png")}
//   onSignupPress={() => {}}
//   onEmailChange={(email) => {}}
//   onPasswordChange={(password) => {}}
// >
//   <SocialButton text="Continue with Google"  
//    imageSource={require("../images/google.png")} 
//   onPress={() => {}} />
//   <SocialButton 
//     text="Continue with Facebook"
//     imageSource={require("../images/facebook.png")}
//     onPress={() => {}}
//   />
//   <SocialButton 
//     text="Continue with Twitter"
//     imageSource={require("../images/twitter.jpg")}
//     onPress={() => {}}
//   />
// </LoginScreen>
  )
}

export default Login