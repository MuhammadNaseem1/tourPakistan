import { StyleSheet, Text, View,TextInput, } from 'react-native'
import React,{useState} from 'react'
import {Button} from 'react-native-paper'

const app = () => {
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
  return (
    <View>
    <Login/>
     
    </View>
  )
}

export default app

const styles = StyleSheet.create({})