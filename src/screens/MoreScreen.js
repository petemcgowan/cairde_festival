/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import MoreDetails from '../components/MoreDetails'
import MoreList from '../components/MoreList'
import PrincipleFunders from '../screens/PrincipleFunders'
import FestivalTeam from '../screens/FestivalTeam'
import FAQ from '../screens/FAQ'
import FAQDetail from '../screens/FAQDetail'

import Partners from '../screens/Partners'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'

const MoreStack = createStackNavigator()
const { width, height } = Dimensions.get('window')
const offWhite = '#e2d8c6'
const redTabBackgroundColor = '#FF5B53'

function MoreScreen({ navigation }) {
    return (
        <View style={{ width, height }}>
            <MoreStack.Navigator
                screenOptions={{
                    headerShown: true,
                    headerTitleStyle: {
                        color: offWhite,
                        fontSize: 26,
                        fontFamily: 'Poppins-Light',
                    },
                    headerStyle: {
                        backgroundColor: redTabBackgroundColor,
                    },
                    headerBackTitleVisible: false,
                    headerBackImage: () => (
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            size={36}
                            color={offWhite}
                        />
                    ),
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
                    options={({ route }) => {
                        return {
                            headerTitle: `${route.params.moreDetails.name}`,
                        }
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
                <MoreStack.Screen
                    name="FAQ"
                    component={FAQ}
                    options={({ route }) => {
                        return {
                            headerTitle: `FAQ`,
                        }
                    }}
                />
                <MoreStack.Screen
                    name="FAQDetail"
                    component={FAQDetail}
                    options={({ route }) => {
                        return {
                            headerTitle: `${route.params.faqItem.question}`,
                        }
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
