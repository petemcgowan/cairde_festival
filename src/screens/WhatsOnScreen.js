import React from 'react'
import { StyleSheet, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import WhatsOnDetails from '../components/WhatsOnDetails'
import WhatsOnList from '../components/WhatsOnList'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'

const offWhite = '#e2d8c6'
const redTabBackgroundColor = '#FF5B53'

const WhatsOnStack = createStackNavigator()
function WhatsOnScreen() {
    return (
        <WhatsOnStack.Navigator
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
                tabBarItemStyle: {
                    backgroundColor: redTabBackgroundColor,
                },
            }}
        >
            <WhatsOnStack.Screen
                name="WhatsOnList"
                component={WhatsOnList}
                style={styles.pageContainer}
                options={() => ({
                    headerTitle: "What's On",
                })}
            />
            <WhatsOnStack.Screen
                name="WhatsOnDetails"
                component={WhatsOnDetails}
                options={({ route }) => {
                    return {
                        headerTitle: `${route.params.whatsOnDetails.name}`,
                        headerBackTitle: null,
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
