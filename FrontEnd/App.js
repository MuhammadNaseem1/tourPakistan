import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen'
import React, { useEffect } from 'react';
import { Text, View,Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './assets/screens/Register';
import Login from './assets/screens/Login';
import Home from './assets/screens/Home';
import Post from './assets/screens/Post';
import Map from './assets/screens/Map';
import ForgotPassword from './assets/screens/ForgotPassword';
// import { useNavigation } from '@react-navigation/native';
// import DescriptionHINGOL  from './assets/screens/Description'
// import DescriptionSWAT  from './assets/screens/Description'
// import DescriptionPassu  from './assets/screens/Description'
// import DescriptionYarkhun  from './assets/screens/Description'
// import DescriptionHUNZA from './assets/screens/Description'
import {Description,Desc} from './assets/screens/Description';
import Profile from './assets/screens/Profile';
// import description from './assets/screens/Description';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './assets/screens/Drawer' 
import Logout from './assets/screens/Logout';
import Contact from './assets/screens/Contact';
const Stack = createNativeStackNavigator();


const App = ({navigation}) => {

  useEffect(()=>
  {
    SplashScreen.hide();
  },[]);
  //3000
  console.log("hello")
  return(
    <NavigationContainer>
   
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}} initialRouteName="Login">
      <Stack.Screen  name="Login" component={Login} options={{ title:"Login" }} />
      <Stack.Screen  name="Register" component={Register} options={{ title:"Register" }} />
      <Stack.Screen  name="Home" component={DrawerNavigator}  options={{headerTitle: 'Tour incredible Pakistan '}} />
      <Stack.Screen  name="Post" component={Post} options={{ title:"Post" }} />
      <Stack.Screen  name="Description" component={Description} options={{ title:"More Description" }} />
      <Stack.Screen  name="Desc" component={Desc} options={{ title:"More Description" }} />
      <Stack.Screen  name="Profile" component={Profile} options={{ title:"Profile" }} />
      <Stack.Screen  name="Map" component={Map} options={{ title:"Location"}}/>
      <Stack.Screen  name="ForgotPassword" component={ForgotPassword} options={{ title:"Reset Your Password" }}/>    
      <Stack.Screen  name="Logout" component={Logout} options={{ title:"Logout" }}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
