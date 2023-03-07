import React, { useEffect, createContext, useState, useMemo } from 'react'
// import type { Node } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons/faCalendarAlt'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle'
import { faMap } from '@fortawesome/free-solid-svg-icons/faMap'

// import Menu from './components/Menu';

import HomeScreen from './screens/HomeScreen'
import MoreScreen from './screens/MoreScreen'
// import SignIn from './screens/SignIn';

import MapList from './components/MapList'
import MapScreen from './screens/MapScreen'
import WhatsOnScreen from './screens/WhatsOnScreen'

import SplashScreen from 'react-native-splash-screen'

const greenBackgroundColor = '#1e965a'
const offWhite = '#e2d8c6'
const redTabBackgroundColor = '#FF5B53'

const AppTabs = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
export const AppContext = createContext()

function MapTopStack() {
    return (
        <Stack.Navigator
            initialRouteName="Art"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Art"
                component={MapScreen}
                options={{
                    headerTitleStyle: {
                        fontSize: 26,
                        fontFamily: 'Poppins-Thin',
                    },
                    headerTitle: 'Art',
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name="Stages"
                component={MapScreen}
                // options={{
                // headerTitleStyle: {
                //   fontSize: 25,
                //   // fontFamily: 'Nunito_700Bold',
                // },
                // headerTitle: 'Stages',
                // headerTitleAlign: 'center',
                // }}
            />
            <Stack.Screen
                name="Bars"
                component={MapScreen}
                options={{
                    headerTitleStyle: {
                        fontSize: 26,
                        fontFamily: 'Poppins-Thin',
                    },
                    headerTitle: 'Bars',
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name="Food"
                component={MapScreen}
                options={{
                    headerTitleStyle: {
                        fontSize: 26,
                        fontFamily: 'Poppins-Thin',
                    },
                    headerTitle: 'Food',
                    headerTitleAlign: 'center',
                }}
            />
        </Stack.Navigator>
    )
}
function AppBottomStack() {
    return (
        <AppTabs.Navigator
            style={styles.container}
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'black',
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: offWhite,
                tabBarLabelStyle: {
                    fontSize: 13,
                    margin: 0,
                    padding: 0,
                },
                labelStyle: {
                    fontSize: 19,
                },
                // headerShown: false,
                tabBarShowLabel: true,
            }}
        >
            <AppTabs.Screen
                name="Cairde"
                component={HomeScreen}
                options={{
                    headerTitle: 'Cairde Festival',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon
                            icon={faInfoCircle}
                            size={24}
                            color={offWhite}
                        />
                    ),
                    headerTitleStyle: {
                        color: offWhite,
                        fontSize: 26,
                        fontFamily: 'Poppins-Light',
                    },
                    headerStyle: {
                        backgroundColor: redTabBackgroundColor,
                    },
                    tabBarItemStyle: {
                        backgroundColor: redTabBackgroundColor,
                    },
                    tabBarBadgeStyle: {
                        backgroundColor: '#2196F3',
                        color: '#BBBccc',
                    },
                }}
            />
            <AppTabs.Screen
                name="What's On"
                component={WhatsOnScreen}
                options={({ navigation }) => ({
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon
                            icon={faCalendarAlt}
                            size={24}
                            color={offWhite}
                        />
                    ),
                    headerTitleStyle: {
                        color: offWhite,
                        fontSize: 26,
                        fontFamily: 'Poppins-Light',
                    },
                    headerStyle: {
                        backgroundColor: redTabBackgroundColor,
                    },
                    tabBarItemStyle: {
                        backgroundColor: redTabBackgroundColor,
                    },
                })}
            />
            <AppTabs.Screen
                name="Map"
                component={MapTopStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon
                            icon={faMap}
                            size={24}
                            color={offWhite}
                        />
                    ),

                    // headerTitleStyle: {
                    //     color: offWhite,
                    //     fontSize: 26,
                    //     fontFamily: 'Poppins-Light',
                    // },
                    // headerStyle: {
                    //     backgroundColor: redTabBackgroundColor,
                    // },
                    tabBarItemStyle: {
                        backgroundColor: redTabBackgroundColor,
                    },
                    tabBarBadgeStyle: {
                        backgroundColor: '#2196F3',
                        color: '#BBBccc',
                    },
                }}
            />
            <AppTabs.Screen
                name="More"
                component={MoreScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon
                            icon={faEllipsis}
                            size={24}
                            color={offWhite}
                        />
                    ),
                    headerTitleStyle: {
                        color: offWhite,
                        fontSize: 26,
                        fontFamily: 'Poppins-Regular',
                    },
                    headerStyle: {
                        backgroundColor: redTabBackgroundColor,
                    },
                    tabBarItemStyle: {
                        backgroundColor: redTabBackgroundColor,
                    },
                    tabBarBadgeStyle: {
                        backgroundColor: '#2196F3',
                        color: '#BBBccc',
                    },
                }}
            />
        </AppTabs.Navigator>
    )
}

const App: () => Node = () => {
    const [userCategoryChoice, setUserCategoryChoice] = useState('art')
    const [mapMenuChosen, setMapMenuChosen] = useState('Art')
    const value = React.useMemo(
        () => ({
            userCategoryChoice,
            setUserCategoryChoice,
            mapMenuChosen,
            setMapMenuChosen,
        }),
        [userCategoryChoice, mapMenuChosen]
    )

    useEffect(() => {
        console.log('App:useEffect')
        SplashScreen.hide()
    }, [])

    return (
        <NavigationContainer>
            <AppContext.Provider value={value}>
                <AppBottomStack />
            </AppContext.Provider>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        color: '#FFF',
        // fontFamily: 'Karla_300Light',
    },
})

export default App
