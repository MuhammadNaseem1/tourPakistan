import { View, Text, TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'
import Login from './Login'
const ForgotPassword = ({navigation}) => {
    const createTwoButtonAlert = () =>
    Alert.alert(
      "Check email",
      "We have sent you the password on the given email. Check and reset your  password",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  return (
    <View>
<View>
<TextInput placeholder='Enter your email' placeholderTextColor={'white'} autoCapitalize='email,username' style={{    height: 40,
    alignSelf:'center',
    borderColor: "#032b5f",
    borderRadius:20,
    marginTop:20,
    backgroundColor:'white',
    color:'#d9d4ce',
    width: "70%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    } }/>
   
    </View>
    <View>
    <Button onPress={createTwoButtonAlert}>Confirm</Button>
    <Button onPress={()=>navigation.navigate('Login')}> Back to Login</Button>
    </View>
    <View>
    {/* <TouchableOpacity>
        <Text>Back to Login</Text>
    </TouchableOpacity> */}
       </View>  
  </View>
  )
}

export default ForgotPassword