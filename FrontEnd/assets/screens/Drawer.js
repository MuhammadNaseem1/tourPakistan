import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Post from './Post';
import Logout from './Logout'
import SuggestedSites from './SuggestedSites';
import TabNavigation from './TabNavigation';
import Contact from './Contact';
const Drawer = createDrawerNavigator();

const DrawerNavigator =({route})=> {
  return (
    <Drawer.Navigator initialRouteName="TabNavigation" defaultStatus="closed" >
      
      <Drawer.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false  }}/>
      <Drawer.Screen name='Home' component={Home} options={{ headerShown: true  }}/>
      <Drawer.Screen name="Post" component={Post} options={{ headerShown: false  }}/>
      <Drawer.Screen name="Logout" component={Logout} options={{ headerShown: false  }}/>
      <Drawer.Screen name="Suggested Sites" component={SuggestedSites} options={{ headerShown: false  }}/>
      <Drawer.Screen name="Contact Form" component={Contact} options={{ headerShown: false  }}/>
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;