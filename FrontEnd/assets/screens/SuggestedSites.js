import { View, Text,Image,TextInput, FlatList, TouchableHighlight} from 'react-native'
import React,{useState} from 'react'
import { Button, DataTable,   } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler';
import {FontAwesomeIcon} from 'react-native-vector-icons/FontAwesome';
import {MaterialIcon} from 'react-native-vector-icons/MaterialIcons'
import {add,loc,more} from '../features/SiteSlice'
import {useSelector, useDispatch} from 'react-redux';
import {store} from '../app/store'

export default function SuggestedSites() {
  // var pl=[];
  // var locations=["hello"]
  const {place}=useSelector(state=>state.site)
  const {address}=useSelector(state=>state.site)
  const {dsc}= useSelector(state=>state.site)
  
  console.log("................",place)
  console.log("................address",address)
  // console.log("selector value.....",useSelector(state => state.places))
  // const {locations} = useSelector(state => state.places);
  const dispatch= useDispatch();

    const [p,setP]=useState('');
    const [location,setLocation]=useState('');
    const [desc, setDescription]=useState('')

    const submitP=()=>{
  dispatch(add(p))
  setP('')

}
const submitL=()=>{
  

  dispatch(loc(location))
  setLocation('')

}
const submitD=()=>{
  

  dispatch(more(desc))
  setDescription('')

}

  const newPlaces=[
  {name:"Kalash Valleys", location:"2.5 hours away from Chitral",pic:"https://www.travelinglifestyle.net/wp-content/uploads/2020/08/Kalasha-Valleys-1024x618.jpg"},
  {name:"Concordia", location:"national border with China",pic:"https://www.travelinglifestyle.net/wp-content/uploads/2020/05/beautiful-places-pakistan.jpg"},
  {name:"Lake Saif-ul-Malook", location:"northern extreme of the Kaghan Valley", pic:"https://www.travelinglifestyle.net/wp-content/uploads/2020/05/The_Lake_Saif_Ul_Malook-Pakistan-Beautiful-Places.jpg"},
  {name:"Shandur Top", location:" Khyber-Pakhtunkhwa District in the Chitral area",pic:"https://www.travelinglifestyle.net/wp-content/uploads/2020/05/Shandur-Top-Lake.jpg"},
  {name:"Neelum Valley", location:"Azad Kashmir",pic:"https://www.travelinglifestyle.net/wp-content/uploads/2020/05/Neelum-Valley-Pakistan-Beautiful-Places.jpeg"},
  {name:"Guraiz Valley", location:"between Gilgit Baltistan and Azad Kashmir.",pic:"https://www.travelinglifestyle.net/wp-content/uploads/2020/05/Habba-Khatoon.jpeg"},
]



    return (
    
<View>
    <View style={{ flexDirection:'column' }}>      
      <View style={{ flexDirection:'row' }}>
        <TextInput inlineImageLeft='search_icon' keyboardType='url' theme={{colors: {primary: 'green', underlineColor: 'transparent'}}} placeholder='Enter Place Name' value={p} onChangeText={ (e)=>setP(e) } style={{width:'50%',marginLeft:10,marginTop:10,borderRadius:5,borderColor:'gray',borderWidth:1,padding:10,}}/>
        <Button style={{marginLeft:120,heigth:10,marginTop:10,borderRadius:20,justifyContent:'center'}} mode="contained" dark='true' onPress={ ()=>submitP()} >
             Add
       </Button>
      </View> 
      <View style={{ flexDirection:'row' }}>
        <TextInput placeholder='Enter Location      ' value={location} onChangeText={ (e)=>setLocation(e) } style={{width:'50%',marginLeft:10,marginTop:10,borderRadius:5,borderColor:'green',borderWidth:1,padding:10}}/>
        <Button color='#2596be'  style={{marginLeft:120,heigth:10,marginTop:10,borderRadius:20,justifyContent:'center' }} mode="contained" dark='true' onPress={ ()=>submitL()} >
            Add 
       </Button>
      </View> 
      <View style={{ flexDirection:'row' }}>
        <TextInput placeholder='Describe place     ' value={desc} onChangeText={ (e)=>setDescription(e) } style={{width:'50%',marginLeft:10,marginTop:10,borderRadius:5,borderColor:'violet',borderWidth:1,padding:10}}/>
        <Button color='#f8dda8' style={{marginLeft:120,heigth:10,marginTop:10,borderRadius:20,justifyContent:'center'}} mode="contained" dark='true' onPress={ ()=>submitD()} >
           Add  
       </Button>
      </View> 
      </View>
      <View style={{ marginTop:20,marginLeft:20,flexDirection:'row' }}>
           <Text style={{fontWeight:'bold' }}>Name</Text>
           <Text style={{marginLeft:60,fontWeight:'bold'  }}>Location</Text>
           <Text style={{marginLeft:50,fontWeight:'bold'  }}>Description</Text>
           
      </View>
   
<View style={{ marginTop:30,flexDirection:'row' }}>

  <View style={{ marginLeft:20}}>
  <FlatList
  data={place}
   renderItem={({item, index, separators}) => (
    <TouchableHighlight
      key={item.key}
      // onPress={() => this._onPress(item)}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}>
      <View style={{backgroundColor: 'white'}}>
        <Text>{  item}</Text>
      </View>
    </TouchableHighlight>
  )}
  /> 
  </View>
 
  <View style={{ marginLeft:30}}>
  <FlatList
  data={address}
   renderItem={({item, index, separators}) => (
    <TouchableHighlight
      key={item.key}
      // onPress={() => this._onPress(item)}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}>
      <View style={{backgroundColor: 'white'}}>
        <Text>{    item}</Text>
      </View>
    </TouchableHighlight>
  )}
  /> 
  </View>
  <View style={{ marginLeft:30}}>
  <FlatList
  data={dsc}
   renderItem={({item, index, separators}) => (
    <TouchableHighlight
      key={item.key}
      // onPress={() => this._onPress(item)}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}>
      <View style={{backgroundColor: 'white'}}>
        <Text>{   item}</Text>
      </View>
    </TouchableHighlight>
  )}
  /> 
  </View>
</View>

  </View>
  
    
   

// {/* {/* <FlatList
//   ItemSeparatorComponent={
//     Platform.OS !== 'android' &&
//     (({highlighted}) => (
//       <View
//         style={[style.separator, highlighted && {marginLeft: 0}]}
//       />
//     ))
//   }
//   data={locations}
//   renderItem={({item, index, separators}) => (
  
//     <TouchableHighlight
//       key={item.key}
//       onPress={() => this._onPress(item)}
//       onShowUnderlay={separators.highlight}
//       onHideUnderlay={separators.unhighlight}>
//       <View style={{backgroundColor: 'white'}}>
//       {console.log(item)}
//         <Text>{item}</Text>
//       </View>
//     </TouchableHighlight>
//   )}
// /> */}


    
 
  )
}
