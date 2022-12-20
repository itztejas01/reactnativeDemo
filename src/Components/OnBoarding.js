import React, { useRef, useState } from 'react';
import {Animated, FlatList, StyleSheet, Text, View} from 'react-native';
import data from '../data';
import {NextButton, OnBoardingItem,Paginator} from './common';


function OnBoarding() {
    const [currentIndex,setCurrentIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current

    const slideRef = useRef(null)

    const viewableItemChanges = useRef(({viewableItems})=>{
        setCurrentIndex(viewableItems[0].index)
    }).current;

    const viewChange = useRef(({viewAreaCoveragePercentThreshold:50})).current;

    const navigate = () => {

    }
    // console.log('currentIndex',currentIndex,currentIndex == data.length-1);
  return (
    <View style={styles.container}>
        <View style={{flex:3}}>
            <FlatList
                data={data}
                horizontal
                renderItem={({item}) => <OnBoardingItem item={item} />}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={item=>item.id}
                onScroll = {Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}] , {
                    useNativeDriver:false
                })}
                scrollEventThrottle={32}
                onViewableItemsChanged={viewableItemChanges}
                viewabilityConfig={viewChange}
                ref={slideRef}
            />
      </View>
      <Paginator data={data} scrollX={scrollX} /> 
      {currentIndex == (data.length-1)&& (
        <NextButton onPress={navigate} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnBoarding;
