//React Imports
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserProvider } from './Contexts/UserContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Screens
import LoginScreen from './Screens/Login/LoginScreen';
import HomeScreen from './Screens/Home/HomeScreen';
import RegisterScreen from './Screens/Register/RegisterScreen';
import MapDirections from './Screens/MapDirections/MapDirections';
import MapScreen from './Screens/Map/MapScreen';
import ProfileScreen from './Screens/Profile/ProfileScreen';
import NewPublicationScreen from './Screens/NewPublication/NewPublicationScreen';

export type MainNavigatorParams = {
    Home: any;
    Login: any;
    Register: any;
    Map: any;
    MapDirections: any;
    Profile: any;
};

const LoggedTab = createBottomTabNavigator();
function LoggedNavigator() {
    return (
        <LoggedTab.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
            <LoggedTab.Screen name="Home" component={HomeScreen} />
            <LoggedTab.Screen name="Profile" component={ProfileScreen} />
            <LoggedTab.Screen
                name="NewPublication"
                component={NewPublicationScreen}
            />
        </LoggedTab.Navigator>
    );
}

const LoggoutTab = createBottomTabNavigator();
function LoggoutNavigator() {
    return (
        <LoggoutTab.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
            <LoggoutTab.Screen name="Home" component={HomeScreen} />
            <LoggoutTab.Screen name="Login" component={LoginScreen} />
            <LoggoutTab.Screen name="Register" component={RegisterScreen} />
            <LoggoutTab.Screen
                name="NewPublication"
                component={NewPublicationScreen}
            />
        </LoggoutTab.Navigator>
    );
}

const MainStack = createNativeStackNavigator();
function Navigator() {
    return (
        <UserProvider>
            <NavigationContainer>
                <MainStack.Navigator
                    initialRouteName="Loggout"
                    screenOptions={{ headerShown: false }}
                >
                    <MainStack.Screen
                        name="Loggout"
                        component={LoggoutNavigator}
                    />
                    <MainStack.Screen
                        name="Logged"
                        component={LoggedNavigator}
                    />
                    <MainStack.Screen name="Map" component={MapScreen} />
                    <MainStack.Screen
                        name="MapDirections"
                        component={MapDirections}
                    />
                </MainStack.Navigator>
            </NavigationContainer>
        </UserProvider>
    );
}
export default Navigator;
