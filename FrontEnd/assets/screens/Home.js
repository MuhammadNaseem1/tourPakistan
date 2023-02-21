import {
    View,
    Text,
    Touchable,
    TextInput,
    TextStyle,
    ScrollView,
    Image,
    FlatList,
    TouchableOpacity,
    Alert, StatusBar
} from 'react-native'
import React, {useEffect, useState} from 'react'
// import DescriptionHINGOL  from './assets/screens/Description'
// import DescriptionSWAT  from './assets/screens/Description'
// import DescriptionPassu  from './assets/screens/Description'
// import DescriptionYarkhun  from './assets/screens/Description'
// import DescriptionHUNZA from './assets/screens/Description'
// import { TextInput } from 'react-native-paper';
import {Provider as PaperProvider} from 'react-native-paper';
import Post from './Post';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {
    Avatar,
    Button,
    Card,
    Title,
    Paragraph
} from 'react-native-paper';
import {Description, Desc} from './Description'
import Profile from './Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
// import Img from '../images/logo.png'
var data=[];  

const myData = [
    {
        name: "naseem",
        location: ""
    }, {
        name: "waseem",
        location: "jjksljkljfksjfkfjskfs sfjsdkljslkf jfsdklfjdjf"
    }, {
        name: "Qaseem",
        location: "Sfjdkjfkf fjsklfjskfjs fjsdkfjksdfjks deirouir"
    }

]
const Home = ({navigation, route}) => {
const [load, setLoad]=useState(true)
  console.log('llllllllllll',data.length)
useEffect(()=>{
  if(route.params) {
    data.push(route.params.text);
    console.log('dddddddddd',data)
setLoad(false)
  }
},[])

  

  
    const [like,setlike]=useState(0)
    const likes=()=>
    {
      setlike(like+1)
    }
    return (

        <>
          <StatusBar barStyle="black-content" />
            <View style={
                {flexDirection: 'row'}
            }>

                <Image style={
                        {
                            height: '100%',
                            width: '10%',
                            borderRadius: 50,
                            backgroundColor: 'grey'
                        }
                    }
                    source={
                        require('../images/logo.png')
                    }/>

                <View style={
                    {marginLeft: 10}
                }>
                    <TextInput onPressIn={
                            () => navigation.navigate('Post')
                        }
                        placeholder="What is on your mind"/>

                </View>
            </View>
            
            <View>
            <FlatList data={data}
                    renderItem={
                        ({item}) => {
                            return (

                                <TouchableOpacity  style={
                                    {
                                        width: '80%',
                                        alignSelf: 'center',
                                        height: 140,
                                        borderRadius: 10,
                                        backgroundColor: '#fff',
                                        marginTop: 20,
                                        elavation: 1,
                                        flexDirection: 'row'
                                    }
                                }>
                                    <View style={
                                        {
                                            justifyContent: 'center',
                                            marginLeft: 10
                                        }
                                    }>
                                       
                                        <Text style={
                                            {
                                                fontSize: 15,
                                                width: "70%",
                                                marginHorizontal: 20,
                                                color: '#00#70a1ed0',
                                                fontWeight: '800'
                                                , marginTop:5, alignItems:'center',justifyContent:'center'
                                            }
                                        }>
                                            {item}</Text>
                                            
                                      <View style={{ flexDirection:'row' }}>      
                                            <View>
               <TouchableOpacity onPress={()=>likes()}>                             
    <Image style={{width:40,height:30,marginTop:70 }} source={require('../images/like.jpg')}/>
    </TouchableOpacity></View>
    <View style={{ marginTop:80,marginLeft:30  }}>
    <Text style={{ fontWeight: "bold" }}>{like}</Text>
    </View>
    <View style={{ marginTop:80,marginLeft:30  }}>
    <Text style={{ fontWeight: "bold",borderRadius:20,borderBottomColor:'black' }}>Comment</Text>
    </View>
    </View>

                                           
<View>


</View>
                                     </View>
                                     
                                  </TouchableOpacity>
                                  
                            );
                        }
                    }/>
                    
            </View>
    </>
    )


    console.log("hhhhhhhhh", route.params.paramKey)
    const post = []
    post.push(route.params)
    console.log("postinnnggg", post)
    // const {post}=route.params;
    const [loader, setLoader] = useState(false)
    const [place, setPlace] = useState([
        {
            pname: "Swat Valley",
            location: "Swat",
            displayImagesLink: "https://wander-lush.org/wp-content/uploads/2020/01/SwatValleyPakistanSAKhanPhotographyCanvaPro.jpg"

        }, {
            pname: "Boyun Village",
            location: "Kalam town",
            displayImagesLink: "https://wander-lush.org/wp-content/uploads/2020/12/Beautiful-places-in-Pakistan-Swat-Valley-KhwajaSaeedGetty-CanvaPro.jpg"

        }, {
            pname: "HUNZA VALLEY",
            location: "Hunza",
            displayImagesLink: "https://wander-lush.org/wp-content/uploads/2020/12/Beautiful-places-in-Pakistan-Hunza-Valley-undefinedGetty-CanvaPro.jpg"


        }, {
            pname: "Passu Cones",
            location: " village of Gulmit",
            displayImagesLink: "https://wander-lush.org/wp-content/uploads/2020/12/Beautiful-places-in-Pakistan-Passu-Cones-SiddiquiGetty-CanvaPro.jpg"
        },
    ]);
    // const [loader,setLoader]=useState(false);
    // const mShoes=()=>{
    //    getData()}
    //    const getData=async()=>{
    //     await fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(response => response.json())

    //     .then(data => {
    //       setShoes(data)

    //     })
    // }

    const posting = () => {

        <FlatList data={post}
            renderItem={
                ({item, index}) => {
                    return (
                        <TouchableOpacity onPress={
                                () => navigation.navigate('Desc')
                            }
                            style={
                                {
                                    width: '60%',
                                    alignSelf: 'center',
                                    height: 120,
                                    backgroundColor: '#fff',
                                    marginTop: 10,
                                    elavation: 1,
                                    flexDirection: 'row'
                                }
                        }>
                            {/* <Image onPress={()=>navigation.navigate('Desc')} source={{ uri:item.displayImagesLink }} style={{ width:100, height:100,borderRadius:20 }}/> */}
                            <View style={
                                {
                                    justifyContent: 'center',
                                    marginLeft: 10
                                }
                            }>
                                <Text onPress={
                                        () => navigation.navigate('Desc')
                                    }
                                    style={
                                        {
                                            fontSize: 15,
                                            width: "70%",
                                            marginHorizontal: 20,
                                            color: '#00#70a1ed0',
                                            fontWeight: '800'
                                        }
                                }>
                                    {
                                    item.paramKey
                                }</Text>
                                {/* <Text style={{ fontWeight:'600', marginLeft:10,fontSize:14 }}>{item.location}</Text> */}
                                {/* <Text style={{ color:'green' }}>PKR {item.price}</Text> */} </View>
                            {/* <Text>{items.}</Text> */} </TouchableOpacity>
                    )
                }
            }/>


        // const {postData}= route.params;
        // <Text>{route.params.paramKey}</Text>
        // console.log("hhhhhhhhh",route.params.paramKey)
        // setPlace({JSON.stringify(postData.txt)})
        //    const val=route.params;
        //    setPlace(
        //    <Card>
        //     <Text>
        //         {JSON.stringify(val.data)}
        //     </Text>
        //    </Card>)
    }


    //     <Card>
    //     <Card.Title title={} subtitle="Worth a detour"
    //         titleStyle={
    //             {color: "#e28743"}
    //         }/>
    //     <Card.Cover source={
    //         {uri: 'https://wander-lush.org/wp-content/uploads/2020/01/YarkhunValleySamanthaIntentionalDetours.jpg'}
    //     }/>
    //     <Card.Actions>
    //         <Button onPress={
    //             () => navigation.navigate('description')
    //         }>More Description</Button>

    //     </Card.Actions>
    // </Card>
    // setPlace(data)


    //     <View>


    //         {/* <Text>{JSON.stringify(data)}</Text> */}

    //      <View>
    //         <FlatList
    //         data={place}

    //         onRefresh={posting}
    //         refreshing={loader}
    //         renderItem={({ item,index })=>{
    //     return(
    //         <TouchableOpacity
    //      onPress={()=>navigation.navigate('Desc')}
    //     style={{ width:'94%',alignSelf:'center',height:120,backgroundColor:'#fff', marginTop:10, elavation:1, flexDirection:'row' }}>
    // <Image onPress={()=>navigation.navigate('Desc')} source={{ uri:item.displayImagesLink }} style={{ width:100, height:100,borderRadius:20 }}/>
    // <View style={{ justifyContent:'center', marginLeft:10 }}>
    //     <Text onPress={()=>navigation.navigate('Desc')} style={{fontSize:15,width:"70%", marginHorizontal:20, color:'#00#70a1ed0', fontWeight:'800' }}>{ item.pname}</Text>
    //     <Text style={{ fontWeight:'600', marginLeft:10,fontSize:14 }}>{item.location}</Text>
    //     {/* <Text style={{ color:'green' }}>PKR {item.price}</Text> */}
    // </View>
    // {/* <Text>{items.}</Text> */}
    //     </TouchableOpacity>
    //     )
    //     }}
    //         />

    //         {/* </FlatList> */}
    //      </View>


    //      <ScrollView>


    //             <View>


    //                 <Card>
    //                     <Card.Title titleStyle={
    //                             {color: "#e28743"}
    //                         }
    //                         title="SWAT VALLEY"
    //                         subtitle="Heaven on the land"
    //                         style={
    //                             {fontColor: 'red'}
    //                         }/>
    //                     <Card.Cover source={
    //                         {uri: 'https://wander-lush.org/wp-content/uploads/2020/01/SwatValleyPakistanSAKhanPhotographyCanvaPro.jpg'}
    //                     }/>
    //                     <Card.Actions>
    //                         <Button onPress={
    //                             () => navigation.navigate('Description')
    //                         }>More Description</Button>

    //                     </Card.Actions>
    //                 </Card>


    //                 <Card>
    //                     <Card.Title titleStyle={
    //                             {color: "#e28743"}
    //                         }
    //                         title="HUNZA VALLEY"
    //                         subtitle="A must-visit place in Pakistan."/>
    //                     <Card.Cover source={
    //                         {uri: 'https://wander-lush.org/wp-content/uploads/2020/12/Beautiful-places-in-Pakistan-Hunza-Valley-undefinedGetty-CanvaPro.jpg'}
    //                     }/>
    //                     <Card.Actions>
    //                         <Button onPress={
    //                             () => navigation.navigate('Desc')
    //                         }>More Description</Button>

    //                     </Card.Actions>
    //                 </Card>


    //                 <Card>
    //                     <Card.Title titleStyle={
    //                             {color: "#e28743"}
    //                         }
    //                         title="Passu Cones"
    //                         subtitle="The most iconic view of the Cathedral is from the Karakoram Highway"/>
    //                     <Card.Cover source={
    //                         {uri: 'https://wander-lush.org/wp-content/uploads/2020/12/Beautiful-places-in-Pakistan-Passu-Cones-SiddiquiGetty-CanvaPro.jpg'}
    //                     }/>
    //                     <Card.Actions>
    //                         <Button onPress={
    //                             () => navigation.navigate('description')
    //                         }>More Description</Button>

    //                     </Card.Actions>
    //                 </Card>


    //                 <Card>
    //                     <Card.Title title="YARKHUN VALLEY" subtitle="Worth a detour"
    //                         titleStyle={
    //                             {color: "#e28743"}
    //                         }/>
    //                     <Card.Cover source={
    //                         {uri: 'https://wander-lush.org/wp-content/uploads/2020/01/YarkhunValleySamanthaIntentionalDetours.jpg'}
    //                     }/>
    //                     <Card.Actions>
    //                         <Button onPress={
    //                             () => navigation.navigate('description')
    //                         }>More Description</Button>

    //                     </Card.Actions>
    //                 </Card>


    //                 <Card>
    //                     <Card.Title title="HINGOL NATIONAL PARK" subtitle=" A Martian planet"
    //                         titleStyle={
    //                             {
    //                                 color: "#e28743",
    //                                 fontWeight: 'bold'
    //                             }
    //                         }/>
    //                     <Card.Cover source={
    //                         {uri: 'https://wander-lush.org/wp-content/uploads/2020/01/BamboretValleyPakistanPawopa3336CanvaPro.jpg'}
    //                     }/>
    //                     <Card.Actions>
    //                         <Button onPress={
    //                             () => navigation.navigate('description')
    //                         }>More Description</Button>

    //                     </Card.Actions>
    //                 </Card>
    //             </View>

    //         </ScrollView>
    //     </View>

}
export default Home;

