import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

function SplashScreen({navigation}) {
  useEffect(()=>{
    setTimeout(()=>{
      
      navigation.replace('OnBoarding')
    },2000)
    // setInterval(()=>{
    //   console.log('navigatei',navigation);
    //   navigation.replace('OnBoarding')
    // },[300])
  },[])
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Created By Tejas Chaplot</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:"center"
  },
  text:{
    fontFamily:'FontsFree-Net-SF-Pro-Rounded-Regular',
    fontSize:25,
    color:'#000000',
    fontWeight:'bold',
    textAlign:'center'
  }

})

export default SplashScreen