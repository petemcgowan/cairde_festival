/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import MoreDetails from '../components/MoreDetails'
import MoreList from '../components/MoreList'
import PrincipleFunders from '../screens/PrincipleFunders'
import FestivalTeam from '../screens/FestivalTeam'

import Partners from '../screens/Partners'

const MoreStack = createStackNavigator()
const { width, height } = Dimensions.get('window')

function MoreScreen({ navigation }) {
    return (
        <View style={{ width, height }}>
            <MoreStack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <MoreStack.Screen
                    name="MoreList"
                    component={MoreList}
                    style={styles.pageContainer}
                    options={{
                        headerTitle: 'More',
                    }}
                />
                <MoreStack.Screen
                    name="MoreDetails"
                    component={MoreDetails}
                    options={{
                        headerTitle: 'MoreDetails',
                    }}
                />
                <MoreStack.Screen
                    name="Partners"
                    component={Partners}
                    options={{
                        headerTitle: 'Partners',
                    }}
                />
                <MoreStack.Screen
                    name="PrincipleFunders"
                    component={PrincipleFunders}
                    options={{
                        headerTitle: 'PrincipleFunders',
                    }}
                />
                <MoreStack.Screen
                    name="FestivalTeam"
                    component={FestivalTeam}
                    options={{
                        headerTitle: 'FestivalTeam',
                    }}
                />
            </MoreStack.Navigator>
        </View>
    )
}

export default MoreScreen

const styles = StyleSheet.create({
    pageContainer: {
        // backgroundColor: "#e2d8c6",
        // color: '#FFF',
        // fontFamily: 'Karla_300Light',
    },
})
