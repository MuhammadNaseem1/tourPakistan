import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'

const Profile = ({navigation}) => {
  return (
    <View>
   
      <View>
        <TouchableHighlight 
        
        underlayColor='rgba(0,0,0,0)'>
        <Text>Hello</Text>
       </TouchableHighlight>
      </View>
    </View>
  )
}


  export default Profile;