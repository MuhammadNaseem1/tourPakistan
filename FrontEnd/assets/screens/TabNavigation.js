import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Icons from 'react-native-vector-icons/MaterialIcons'
import Post from './Post'
import SuggestedSites from './SuggestedSites'
import Logout from './Logout'
import Profile from './Profile'
import Contact from './Contact'

const Tab=createBottomTabNavigator();
const TabNavigation = () => {
   
  return (
    <Tab.Navigator  screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home-filled'
              : 'home';
          }  else if(route.name === 'Contact Us')
          {
             iconName = focused
             ? 'contact-page'
             : 'contact-mail';
          }
        
          else if(route.name === 'Post')
             {
                iconName = focused
                ? 'library-add'
                : 'add';
             }
             else if(route.name === 'New Sites')
             {
                iconName = focused
                ? 'add-location'
                : 'not-listed-location';
             }
             else if(route.name.trim() === 'Logout')
             {
                iconName = focused
                ? 'logout'
                : 'logout';
             }

          // You can return any component that you like here!
          return <Icons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      }) }>
    <Tab.Screen name="Home" component={Home} options={{ headerShown: false  }}/> 
    <Tab.Screen name="Post" component={Post} options={{ headerShown: false  }}/>
    {/* <Tab.Screen name="Post" component={Post} /> */}
    <Tab.Screen name="New Sites" component={SuggestedSites} options={{ headerShown: false  }} />
    <Tab.Screen name="Contact Us" component={Contact} options={{ headerShown: false  }}/>
    <Tab.Screen name="Logout " component={Logout} options={{ headerShown: false  }}/>
   

    </Tab.Navigator>

        //  <Tab.Navigator 
        //  screenOptions={({route})=>({
        //     tabBarIcon:({focused,color,size})=>
        //     {
        //         let iconName;

        //         if(route==='Home')
        //         {
        //             iconName=focused? 'md-information-circle' : 'md-information-circle'
        //         } else if(route.name===post)
        //         {
        //             iconName=focused? 'plus-Square': 'plus'
        //         }
        //         return <IonIcons name={iconName} size={size} color={color}/>
        //     },
        //     tabBarActiveTintColor:'tomato',
        //     tabBarInactiveTintColor: 'gray'
        //  })}
        //  >
 
        //    <Tab.Screen name={Home} component={Home}/>
          
        //  </Tab.Navigator>

   
  )
}

export default TabNavigation