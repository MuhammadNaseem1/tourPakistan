import { View, Text,StyleSheet,Image, TouchableOpacity,TextInput, Alert } from 'react-native'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './Home';

const ImagePicker=require('react-native-image-picker')

const Post = ({navigation}) => {
    const pickPhoto=()=>
    {
        
            let options = {
              storageOptions: {
                skipBackup: true,
                path: 'images',
              },
            };
            ImagePicker.showImagePicker(options, (response) => {
              console.log('Response = ', response);
        
              if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
              } else {
                const source = { uri: response.uri };
                console.log('response', JSON.stringify(response));
                this.setState({
                  filePath: response,
                  fileData: response.data,
                  fileUri: response.uri
                });
              }
            });
        
          
    }
    const [text,setText]=useState('')
  return (
    <View style={styles.mainContainer}>
     <View >
        <View style={styles.ViewInfo}>
             <Image style={styles.imageInfo} source={require('../images/logo.png')}/>
             
             <Text style={{ fontSize:17,fontFamily:'sans-serif',fontWeight:'bold' }}>  TourPakistan</Text>
             
        </View>
        <View>

</View>
     </View>
     <View>
        <TextInput multiline={true} onChangeText={(txt)=>setText(txt)} value={text} placeholderTextColor={'#f4d6a0'} placeholder='What is on your mind' style={{ width:'80%',
            height:'40%',borderBottomColor:'#e7793c',
           
            borderColor:'blue',
            fontSize:20 }}  />
            
     </View>
     <View style={{flexDirection:'row', alignItems:'center', }}>
            <Icon name='image' size={30} onPress={()=>pickPhoto()} />
            <Text onPress={{  }}> Photos/Videos</Text>
            </View>
     <TouchableOpacity style={{borderEndColor:'#e7793c', color:'#f4d6a0', marginTop:20,marginLeft:280,borderRadius:20,backgroundColor:'#f4d6a0',  padding: 10, alignItems:'center',width:'30%' }}>
     <Text onPress={()=>navigation.navigate('Home', {text: text})}>Post</Text>

     </TouchableOpacity>
     {/* <Home name={text}/> */}

    </View>
  ) 
}
const styles=StyleSheet.create(
    {
        mainContainer:{
            flex:1
            , backgroundColor:'white'
        },
        mainInfoView:{
            flexDirection:'row',
            alignItems:'center',
            width:'100%',
            height:60,
            paddingHorizontal:15
        },
        imageInfo:{
            height:'100%',
            width:'10%',
            borderRadius:50,
            backgroundColor:'grey'
        },
        input:{
            
            
            
        },
        ViewInfo:{
                 height:40,
                 widht:40,
                 borderRadius:40/2,
                 alignItems:'center',
                 flexDirection:'row'
        }
    })
export default Post;