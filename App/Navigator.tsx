//React Imports
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from './GlobalScreenStyles';
import Feather from 'react-native-vector-icons/Feather';
import { moderateScale } from 'react-native-size-matters';
//Screens
import LoginScreen from './Screens/Login/LoginScreen';
import HomeScreen from './Screens/Home/HomeScreen';
import RegisterScreen from './Screens/Register/RegisterScreen';
import MapScreen from './Screens/Map/MapScreen';
import ProfileScreen from './Screens/Profile/ProfileScreen';
import PublicationDetailScreen from './Screens/PublicationDetail/PublicationDetailScreen';
import PublicationsListScreen from './Screens/PublicationsList/PublicationsListScreen';
import NewPublicationName from './Screens/NewPublication/NewPublicationName/NewPublicationName';
import NewPublicationContent from './Screens/NewPublication/NewPublicationContent/NewPublicationContent';
import NewPublicationLocation from './Screens/NewPublication/NewPublicationLocation/NewPublicationLocation';
import EditProfileScreen from './Screens/Profile/EditProfile/EditProfileScreen';
//Context
import { NewPublicationProvider } from './Contexts/NewPublicationContext';
import { UserProvider } from './Contexts/UserContext';

export type MainNavigatorParams = {
    Home: any;
    Login: any;
    Register: any;
    Map: any;
    Profile: any;
    NewPublication: any;
    PublicationDetail: any;
    PublicationsList: any;
};

const NewPublicationStack = createNativeStackNavigator();
function NewPublicationNavigator() {
    return (
        <NewPublicationProvider>
            <NewPublicationStack.Navigator
                initialRouteName="NewPublicationName"
                screenOptions={{ headerShown: false }}
            >
                <NewPublicationStack.Screen
                    name="NewPublicationName"
                    component={NewPublicationName}
                />
                <NewPublicationStack.Screen
                    name="NewPublicationContent"
                    component={NewPublicationContent}
                />
                <NewPublicationStack.Screen
                    name="NewPublicationLocation"
                    component={NewPublicationLocation}
                />
            </NewPublicationStack.Navigator>
        </NewPublicationProvider>
    );
}
const LoggedTab = createBottomTabNavigator();
function LoggedNavigator() {
    return (
        <LoggedTab.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
            <LoggedTab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarActiveTintColor: colors.primaryOrange,
                    tabBarIcon: (tabInfo) => (
                        <Feather
                            name="user"
                            size={moderateScale(18)}
                            color={
                                tabInfo.focused ? colors.primaryOrange : 'gray'
                            }
                        />
                    ),
                    tabBarInactiveTintColor: 'gray',
                    tabBarLabel: 'Profile',
                }}
            />
            <LoggedTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarActiveTintColor: colors.primaryOrange,
                    tabBarIcon: (tabInfo) => (
                        <Feather
                            name="home"
                            size={moderateScale(18)}
                            color={
                                tabInfo.focused ? colors.primaryOrange : 'gray'
                            }
                        />
                    ),
                    tabBarInactiveTintColor: 'gray',
                    tabBarLabel: 'Home',
                }}
            />
            <LoggedTab.Screen
                name="EditProfile"
                component={EditProfileScreen}
                options={{
                    tabBarStyle: { display: 'none' },
                    tabBarButton: () => null,
                }}
            />
            <LoggedTab.Screen
                name="PublicationsList"
                component={PublicationsListScreen}
                options={{
                    tabBarActiveTintColor: colors.primaryOrange,
                    tabBarIcon: (tabInfo) => (
                        <Feather
                            name="menu"
                            size={moderateScale(18)}
                            color={
                                tabInfo.focused ? colors.primaryOrange : 'gray'
                            }
                        />
                    ),
                    tabBarInactiveTintColor: 'gray',
                    tabBarLabel: 'Routes',
                }}
            />
            <LoggedTab.Screen
                name="PublicationDetail"
                component={PublicationDetailScreen}
                options={{
                    tabBarStyle: { display: 'none' },
                    tabBarButton: () => null,
                }}
            />
            <LoggedTab.Screen
                name="NewPublication"
                component={NewPublicationNavigator}
                options={{
                    tabBarStyle: { display: 'none' },
                    tabBarButton: () => null,
                }}
            />
        </LoggedTab.Navigator>
    );
}

const LoggoutTab = createBottomTabNavigator();
function LoggoutNavigator() {
    return (
        <LoggoutTab.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false, showIcon: true }}
        >
            <LoggoutTab.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    tabBarActiveTintColor: colors.primaryOrange,
                    tabBarIcon: (tabInfo) => (
                        <Feather
                            name="unlock"
                            size={moderateScale(18)}
                            color={
                                tabInfo.focused ? colors.primaryOrange : 'gray'
                            }
                        />
                    ),
                    tabBarInactiveTintColor: 'gray',
                    tabBarLabel: 'Login',
                }}
            />
            <LoggoutTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarActiveTintColor: colors.primaryOrange,
                    tabBarIcon: (tabInfo) => (
                        <Feather
                            name="home"
                            size={moderateScale(18)}
                            color={
                                tabInfo.focused ? colors.primaryOrange : 'gray'
                            }
                        />
                    ),
                    tabBarInactiveTintColor: 'gray',
                    tabBarLabel: 'Home',
                }}
            />
            <LoggoutTab.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                    tabBarStyle: { display: 'none' },
                    tabBarButton: () => null,
                }}
            />
            <LoggoutTab.Screen
                name="NewPublication"
                component={NewPublicationNavigator}
                options={{
                    tabBarStyle: { display: 'none' },
                    tabBarButton: () => null,
                }}
            />
            <LoggoutTab.Screen
                name="PublicationDetail"
                component={PublicationDetailScreen}
                options={{
                    tabBarStyle: { display: 'none' },
                    tabBarButton: () => null,
                }}
            />
            <LoggoutTab.Screen
                name="PublicationsList"
                component={PublicationsListScreen}
                options={{
                    tabBarActiveTintColor: colors.primaryOrange,
                    tabBarIcon: (tabInfo) => (
                        <Feather
                            name="menu"
                            size={moderateScale(18)}
                            color={
                                tabInfo.focused ? colors.primaryOrange : 'gray'
                            }
                        />
                    ),
                    tabBarInactiveTintColor: 'gray',
                    tabBarLabel: 'Routes',
                }}
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
                </MainStack.Navigator>
            </NavigationContainer>
        </UserProvider>
    );
}
export default Navigator;
