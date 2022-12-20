import { View, Text, StyleSheet, Animated, TouchableOpacity, Image } from 'react-native'
import React, { useRef } from 'react'

const NextButton = ({onPress}) => {    
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
            {/* <Text>NextButton</Text> */}
            <Image source={require('../../assets/images/Next.png')} />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      position:'absolute',
      bottom:32,
      right:40
        
    },
});

export {NextButton}