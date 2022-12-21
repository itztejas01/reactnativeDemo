import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import slides_data from '../slides_data'
export default function HomeScreen() {
    const [greetings,setGreetings]= useState('');
    useEffect(()=>{
        const greeting =  greetingMessage()
        setGreetings(greeting)
    },[])
    const greetingMessage = () => {
        const hour = new Date().getHours()
        
        if(hour > 5 && hour < 12){
            return 'Good Morning'
        }
        else if(hour > 11 && hour < 16){
            return 'Good Afternoon'
        }
        else if (hour < 21 && hour > 15){
            return "Good Evening"
        }
        else{
            return "Good Night"
        }
    }
    
    
  return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={'#F3F3F3'} />
        <View style={styles.header}>
            <Text style={styles.greetingText}>{greetings}</Text>
            <Text style={styles.welcomeText}>Welcome back</Text>
            <Image style={styles.headerImage} source={require('../assets/images/Premium.png')} />
            <View style={styles.bannerImage}>
                <Image source={require('../assets/images/PremiumBanner.png')} />
            </View>
            <View style={styles.inputText}>
            <TextInput placeholderTextColor={'#000000'} style={styles.textInput} placeholder={'Search through your scans'} />
            </View>
            <View style={styles.headerposter}>
                <View style={styles.poster}>
                <Image source={require('../assets/images/ScanSingle.png')} />
                <Text style={styles.posterText}>Single Scan</Text>
                </View>
                <View style={styles.poster}>
                <Image source={require('../assets/images/Frame62.png')} />
                <Text style={styles.posterText}>Batch Scan</Text>
                </View>
                <View style={styles.poster}>
                <Image source={require('../assets/images/Frame61.png')} />
                <Text style={styles.posterText}>Scan to Text</Text>
                </View>
            </View>
        </View>
        <View>
            <Text style={styles.navigateText}>Recent Scans</Text>
            <FlatList
            horizontal
            data={slides_data}
            renderItem={({item})=>(
                <View style={styles.slideView}>
                <Image style={styles.slideImage} source={item.image} />
                </View>
            )}
            showsHorizontalScrollIndicator={false}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        // justifyContent:'center',
        // alignItems:'center'
    },
    header:{
        // flex:0.5,
        height:"59%",
        backgroundColor:'#F3F3F3',
        // opacity:0.7,
        backfaceVisibility:'hidden'

    },
    greetingText:{
        fontFamily:'SF Pro Rounded',
        fontWeight:'700',
        fontStyle:'normal',
        fontSize:34,
        color:'#000000',
        marginTop:50,
        marginHorizontal:15
    },
    welcomeText:{
        fontFamily:'SF Pro Rounded',
        fontWeight:'500',
        fontStyle:'normal',
        fontSize:18,
        color:'#9B9B9B',
        // marginVertical:1,
        marginHorizontal:15
    },
    headerImage:{
        position:'absolute',
        top:70,
        right:30
    },
    bannerImage:{
        margin:25
    },
    inputText:{
        backgroundColor:'#ffffff',
        borderRadius:20,
        marginVertical:10,
        height:40,
        marginHorizontal:24,
        paddingHorizontal:5
    },
    textInput:{
        color:'#000000'
    },
    headerposter:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingVertical:20,
        // paddingHorizontal:10
    },
    poster:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
       
    },
    posterText:{
        color:'#000000',
        fontWeight:'700',
        fontFamily:'SF Pro Rounded',
        fontStyle:'normal',
        textAlign:'center',
        marginVertical:10
    },
    navigateText:{
        fontWeight:'700',
        fontFamily:'SF Pro Rounded',
        fontStyle:'normal',
        fontSize:20,
        color:'#000000',
        marginVertical:10,
        marginHorizontal:15
    },
    slideView:{       
        marginHorizontal:10 ,
        background: "rgba(255, 255, 255, 0)",
        
        // borderRadius:100
    },
    slideImage:{
        width:200,
        borderRadius:10,
        
        height:200,
    }
})