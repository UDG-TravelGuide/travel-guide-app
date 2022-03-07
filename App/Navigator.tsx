import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './Screens/Login/LoginScreen';
import HomeScreen from './Screens/Home/HomeScreen';

const MainStack = createNativeStackNavigator();
function Navigator() {
    return (
        <NavigationContainer>
            <MainStack.Navigator initialRouteName="Home">
                <MainStack.Screen name="Home" component={HomeScreen} />
                <MainStack.Screen name="Login" component={LoginScreen} />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}
export default Navigator;
