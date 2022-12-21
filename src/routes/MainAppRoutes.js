import * as React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SplashScreen from '../Components/SplashScreen';
import OnBoarding from '../Components/OnBoarding'
import HomeScreen from '../Components/HomeScreen'





const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function BottomTabNavigator(){
    return(
        <Tab.Navigator screenOptions={{
            tabBarShowLabel:false,
            headerShown:false
        }}>
            <Tab.Screen name='Home' component={HomeScreen}  options={{
                
                tabBarIcon:({color,focused,size})=>{                    
                    return (
                    <Image source={require('../assets/images/VectorStack.png')} style={focused ? {opacity:1} : {opacity:0.5}} />
                )
            }
            }} />
            <Tab.Screen name='Setting' component={OnBoarding} options={{
                tabBarIcon:({color,focused,size})=>(
                    <Image source={require('../assets/images/setting.png')} style={focused ? {opacity:1} : {opacity:0.5}}  />
                )
            }} />
        </Tab.Navigator>
    )
}


function MainAppRoutes(){
    return(
        <NavigationContainer>
            <MainStack.Navigator screenOptions={{
                headerShown:false,
            }}>
                <MainStack.Screen name='Splash Screen' component={SplashScreen} />
                <MainStack.Screen name='OnBoarding' component={OnBoarding}  />
                <MainStack.Screen name='HomeScreen' component={BottomTabNavigator} options={{
                    headerShown:false,
                }} />
                {/* <MainStack.Screen name='HomeScreen' component={tabStack} /> */}
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default MainAppRoutes