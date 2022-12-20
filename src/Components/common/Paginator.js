import {Animated, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React from 'react';

const Paginator = ({data, scrollX}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={{flexDirection: 'row', height: 64}}>
      {data.map((item, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        

        const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange:[10,20,10],
            extrapolate:'clamp',
        })

        const opacity = scrollX.interpolate({
            inputRange,
            outputRange:[0.3,1,0.3],
            extrapolate:'clamp'
        })

        const bgColor = scrollX.interpolate({
            inputRange,
            outputRange:['#9B9B9B','#49A6FC','#9B9B9B'],
            extrapolate:'clamp'
        })
        return <Animated.View style={[styles.dot, {width: dotWidth,opacity:opacity,backgroundColor:bgColor}]} key={index} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: 10,
    borderRadius: 5,    
    marginHorizontal: 8,
  },
});
export {Paginator};
