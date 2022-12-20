import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SplashScreen from '../Components/SplashScreen';





const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



function MainAppRoutes(){
    return(
        <NavigationContainer>
            <MainStack.Navigator screenOptions={{
                headerShown:false,
            }}>
                <MainStack.Screen name='Splash Screen' component={SplashScreen} options={{
                    headerShown:false,
                }} />
                {/* <MainStack.Screen name='OnBoarding' component={OnBoarding} options={{
                    headerShown:false,
                }} /> */}
                {/* <MainStack.Screen name='HomeScreen' component={tabStack} /> */}
            </MainStack.Navigator>
        </NavigationContainer>
    )
}