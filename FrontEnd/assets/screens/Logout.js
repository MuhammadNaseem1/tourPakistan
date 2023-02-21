import { View, Text,StyleSheet,Button,Alert } from 'react-native'
import React from 'react'
import Login from './Login';

const Logout = ({navigation}) => {
    const createThreeButtonAlert = () =>
    Alert.alert(
      "Logout Confirmation",
      "Are you sure you want to logout from your account",
      [
        {
          text: "No",
          onPress: () => navigation.navigate('Logout')
        },
        
        { text: "OK", onPress: () => navigation.navigate('Login') }
      ]
    );

  return (
    <View  style={styles.container}>
      <Button title={'Logout'} onPress={createThreeButtonAlert} />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-around",
      alignItems: "center"
    }
  });
export default Logout