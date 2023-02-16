/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import WhatsOnDetails from '../components/WhatsOnDetails'
import WhatsOnList from '../components/WhatsOnList'

const WhatsOnStack = createStackNavigator()
function WhatsOnScreen({}) {
    return (
        <WhatsOnStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <WhatsOnStack.Screen
                name="WhatsOnList"
                component={WhatsOnList}
                style={styles.pageContainer}
                options={{
                    headerTitle: 'Whats On',
                }}
            />
            <WhatsOnStack.Screen
                name="WhatsOnDetails"
                component={WhatsOnDetails}
                options={({ route }) => {
                    return {
                        headerTitle: `${route.params.whatsOnDetails.name} - ${route.params.whatsOnDetails.subTitle}`,
                    }
                }}
            />
        </WhatsOnStack.Navigator>
    )
}

export default WhatsOnScreen

const styles = StyleSheet.create({
    pageContainer: {
        backgroundColor: '#e2d8c6',
        // color: '#FFF',
        fontFamily: 'Karla_300Light',
    },
})
