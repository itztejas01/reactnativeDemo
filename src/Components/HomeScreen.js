import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

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
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.greetingText}>{greetings}</Text>
            <Text style={styles.welcomeText}>Welcome back</Text>
            <Image style={styles.headerImage} source={require('../assets/images/Premium.png')} />
            <View style={styles.bannerImage}>
                {/* <Text></Text>
                <Text></Text> */}
                <Image source={require('../assets/images/PremiumBanner.png')} />
            </View>
            <View style={styles.inputText}>
            <TextInput placeholderTextColor={'black'} placeholder={'Search through your scans'} />
            </View>
        </View>
        <View>

        </View>
    </KeyboardAvoidingView>
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
        flex:0.5,
        backgroundColor:'#F3F3F3',
        // opacity:0.7,
        backfaceVisibility:'hidden'

    },
    greetingText:{
        fontFamily:'SF Pro Rounded Regular',
        fontWeight:'700',
        fontStyle:'normal',
        fontSize:34,
        color:'#000000',
        marginTop:50,
        marginHorizontal:15
    },
    welcomeText:{
        fontFamily:'SF Pro Rounded Regular',
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
        margin:18
    },
    inputText:{
        backgroundColor:'#ffffff',
        borderRadius:20,
        marginVertical:10,
        height:40,
        marginHorizontal:24,
        paddingHorizontal:5
    }
})