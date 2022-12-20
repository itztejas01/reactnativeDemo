import React from 'react'
import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'



function OnBoardingItem({item}) {
    const {width} = useWindowDimensions()
  return (
    <View style={[styles.container,{width}]}>
        <Image source={item.image} style={[styles.image,{width:width/1.5,resizeMode:'contain'}]} />
        <View style={{flex:0.3}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        flex:0.5,
        justifyContent:'center'
    },
    title:{
        fontFamily:'SF Pro Rounded',
        fontWeight:'500',
        fontSize:18,
        color:'#000000',
        textAlign:'center',
        paddingHorizontal:15,
        paddingVertical:30
    },
    desc:{
        // fontFamily:'SF Pro Rounded',
        fontWeight:'500',
        textAlign:'center',
        color:'#000000',
        paddingHorizontal:64,
        fontSize:12
    },
})

export {OnBoardingItem}