import {Animated,TextInput,StyleSheet, SafeAreaView, View, Text, LogBox,Image,Dimensions,TouchableOpacity,Alert,TouchableHighlight,ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {CheckBox} from '@react-native-community/checkbox'
import { addName,addPassword,addEmail } from '../features/UsernameAndPasswordSlice';
import Login from './Login';
import Map from './Map';
import {Button,Avatar} from 'react-native-paper'
// import { CheckBox } from 'react-native';
// import { CheckBox, Icon } from '@rneui/themed';
// import CheckBox from 'react-native-check-box';
import React,{useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import LoginScreen,{ SocialButton }  from "react-native-login-screen";
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ImagePicker from 'react-native-image-crop-picker';
import { useTheme } from 'react-native-paper';
import GetLocation from 'react-native-get-location'
 
import MapView, { PROVIDER_GOOGLE, Marker, MapMarker  } from 'react-native-maps'
const axios=require("axios")
const Register = ({navigation}) => {
  const request=()=>
  {
    if(email==='' || password==='')
    {
      alert('fill the email and password')
      return;
    }
    new Promise((res,rej)=>
    {

      fetch('http://localhost:4000/api/signup',{
      method:'POST',
      header:{'type': 'application/json'},
      body: JSON.stringify({email: email,
        password:password})}
    )
      }
    ).then(res=>  JSON.stringify(res)).then(result=>console.log(result)).catch(e=>
      console.log(e)
      )
      
    

}
  
  const dispatch=useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword]= useState(true);
  const [checkValidEmail, setCheckValidEmail]=useState(false);
  const [region, setRegion]=useState("");
  const { colors } = useTheme();
  const handlCheckEmail = (text) => {                          // <= Added this function
    // const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
     let re = /\S+@\S+\.\S+/;
     let regex=/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
   
     setEmail(text);
     if(re.test(text) || regex.test(text))
     setCheckValidEmail(false)
     else 
     setCheckValidEmail(true);
}

const checkPasswordValidity= value=>
{
  const isNonWhiteSpace=/^\S*$/;
  if(!isNonWhiteSpace.test(value) )
  {
    return 'Password must not contain white spaces'
  }
  const isContainsUpperCase=/^(?=.*[A-Z]).*$/;
  if(!isContainsUpperCase.test(value))
  {
    return 'Password must contain at least one uppercase character'
  }
  const isContainsLowerCase=/^(?=.*[A-Z]).*$/;
  if(!isContainsLowerCase.test(value))
  {
    return 'Password must contain at least one lowercase character'
  }
  const isContainsNumber=/^(?=.*[0-9]).*$/;
  if(!isContainsNumber.test(value))
  {
    return 'Password must contain at least one digit'
  }
  const isValidLength=/^.{8,16}$/;
  if(!isValidLength.test(value))
  {
    return 'Password must be 8-16 characters long';
  }
   return null;
}
const handleLogin=()=>
{
  const checkPassword=checkPasswordValidity(password);
  if(!checkPassword)
  {
    // alert('Succesfull Login')
  }
  else{
    alert(checkPassword);
  }
}
    // var ImagePicker = require('react-native-image-picker');
    // const Stack=createNativeStackNavigator();
    // const [toggleCheckBox, setToggleCheckBox] = useState(false)
  //   <NavigationContainer>
  //   <Stack.Navigator>
  //     <Stack.Screen/>
  //   </Stack.Navigator>
  // </NavigationContainer>
  const [image,setImage]=React.useState('https://w0.peakpx.com/wallpaper/131/380/HD-wallpaper-naturally-beauty-dream-green.jpg')
  const [animatePress, setAnimatePress] = useState(new Animated.Value(1))


  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
}, [])
  const showToast=msg=>
  {
    ToastAndroid.showWithGravity(
   msg,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  }
  const changeImage=()=>
  {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      useFrontCamera:true
    }).then(image => {
      console.log(image);
      setImage(image.path)
    });
  }
  const uploadImage= async()=>
  {
   
   await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      // console.log(image.path);
      setImage(image.path)
    });

}

useEffect(()=>{
  console.log("aaaaaaaaaa")
  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
})
.then(location => {
    console.log(location);
    setRegion(location.latitude+",",location.longitude)
})
.catch(error => {
    const { code, message } = error;
    console.warn(code, message);
})
})
    return (
  
<View style={{ justifyContent:'center',backgroundColor:'#fff',borderRadius:20}}>
        
      <View styles={{ 
        backgroundColor:'#fff',borderRadius:20,marginLeft:20}}>
      <TouchableHighlight 
      onPress={()=>uploadImage}
        style={{ marginLeft:60  }}
        underlayColor='rgba(0,0,0,0)'>
        <Avatar.Image size={250} source={{ uri:image }}/>
       </TouchableHighlight>  
        </View>
<View style={{ justifyContent:'center',marginTop:25,flexDirection:'row' }}>

  <Button  mode="contained" onPress={()=>uploadImage()} style={{borderRadius:20 }}>Use Gallery for profile</Button>
  <Button color="#ff5c5c" mode="contained" onPress={()=>changeImage()} style={{ marginLeft:10,borderRadius:20 }}>Use camera</Button>

</View>
    <View style={{ justifyContent:'center', flexDirection:'row' }} >

        <View style={{flexDirection:'row',margin:5  }}>
        <Icon.Button 
    name="facebook"
    backgroundColor="#3b5998"
    onPress={this.loginWithFacebook} 
  >
    Facebook
  </Icon.Button></View>
  <View style={{flexDirection:'row',margin:4 }}>
   <Icon.Button  
    name="title"
    backgroundColor="#00acee"
    onPress={this.loginWithTwitter}
  >
    Twitter
  </Icon.Button></View>


  <View style={{flexDirection:'row',margin:4 }}>
  <Icon.Button style={{  }}
    name="mail"
    backgroundColor="#EA4335"
    onPress={this.loginWithGoogle}
  >
    Google
  </Icon.Button></View>
      </View>
      
  <View style={{ marginTop:10 }}>
    <View>
    <TextInput placeholder='Enter your email '   onChangeText={(text)=>setEmail(text)} value={email}
     placeholderTextColor={'white'} autoCapitalize='email,username' style={{    height: 40,
      alignSelf:'center',fontFamily:'Copperplate',
      // padding: 10, borderStartWidth : 2,
      // borderEndWidth : 3,
      // borderTopWidth : 1,
      // boderLeftWidth: 2,
      // borderRightWidth: 3,
      // borderBottomWidth : 4,
      // elevation:1,
      borderColor: "#032b5f",
      backgroundColor:'#032b5f',
      color:'#d9d4ce',
      width: "70%",
      borderWidth: 1,
      borderRadius: 10,
      fontSize:16,
      padding: 10,
      } }/>
      {checkValidEmail ? (
        <Text style={{ marginLeft:270, color:'red' }}>Invalid Email</Text>
      ): (
        <Text></Text>
      )}
      </View>
      <TextInput placeholder='Enter your Password' secureTextEntry={seePassword} onChangeText={(text=> setPassword(text))} value={password}  placeholderTextColor={'white'} autoCapitalize='password' style={{    height: 40,
      alignSelf:'center',
      borderColor: '#032b5f',
      backgroundColor:'#032b5f',
      color:'white',
      width: "70%",
      borderWidth: 1,
      marginTop:15,
      borderRadius: 10,
      padding: 10,
      } }/>
      <TextInput placeholder='Confirm your Password' placeholderTextColor={'white'} autoCapitalize='password' style={{    height: 40,
      alignSelf:'center',
      borderColor: '#032b5f',
      backgroundColor:'#032b5f',
      width: "70%",
      borderWidth: 1,
      marginTop:10,
      borderRadius: 10,
      padding: 10,
      } }/>
      </View>
      <View style={{ marginTop:10 }}>
      

       
            {/* value={isSelected}
            onValueChange={setSelection}
            style={{  }}*/}
    
          {/* <Text style={{   marginLeft: 8 }}>Remember me</Text>  */}
    {/* {
      
  console.log(dispatch(addEmail(email)))
    }   */}
  
      <TouchableOpacity  style={{ marginLeft:250,borderRadius:20,elevation:1,backgroundColor:'#f4d6a0',  padding: 10, alignItems:'center'  }}>
      <Text 
      // onPress={()=> navigation.navigate('Login')} 
      // onPress={() => signIn()}
      onPress={() => {
      //  handleLogin();
     request();
      // dispatch(addEmail(email));
      // dispatch(addPassword(password))

        // navigation.navigate('Map',{});
    }} 
    
      style={{ color:'white' }}>Next</Text>
  </TouchableOpacity>

  </View>


 
 {/* <View style={{ height:300, width:"98%", alignSelf:'center', marginBottom:200 }}>
 <MapView
provider={PROVIDER_GOOGLE}
style={styles.map}
initialRegion={{
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}}>
<MapMarker draggable
onDrag={(e)=>{
  console.log("eeeeeeeeee",e.nativeEvent.coordinate)
}}
coordinate={{
  latitude: 37.78825,
      longitude: -122.4324,
}}

/>

</MapView>

 </View> */}
     </View>
    )
    const gotoLogin=({navigation})=>
    {
       return( useEffect(()=>
        {
            navigation.navigate('Login')
        },Alert.alert("Successfully Registered"))
    )}
}

const styles=StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})
export default Register;