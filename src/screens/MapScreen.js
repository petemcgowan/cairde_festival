/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    Dimensions,
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import MapDetails from '../components/MapDetails'
import MapList from '../components/MapList'
// import Menu from '../components/Menu';
import { AppContext } from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'

const { width, height } = Dimensions.get('window')
const offWhite = '#e2d8c6'
const redTabBackgroundColor = '#FF5B53'

const MapStack = createStackNavigator()

function MapScreen({ route }) {
    const { setUserCategoryChoice, setMapMenuChosen } = useContext(AppContext)

    useEffect(() => {
        console.log('MapScreen enter')
        console.log('MapScreen, route.params:' + JSON.stringify(route.params))
        if (route.params) {
            console.log(
                'Setting Context userCategoryChoice to' +
                    route.params.userCategoryChoice
            )
            setUserCategoryChoice(route.params.userCategoryChoice)
            setMapMenuChosen(route.params.menuChosen)
        }
    }, [route.params])

    return (
        <MapStack.Navigator
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
            <MapStack.Screen
                name="MapList"
                component={MapList}
                style={styles.pageContainer}
                options={{
                    headerTitle: 'Map',
                }}
            />
            <MapStack.Screen
                name="MapDetails"
                component={MapDetails}
                options={({ route }) => {
                    return {
                        headerTitle: `${route.params.mapDetails.name}`,
                    }
                }}
            />
        </MapStack.Navigator>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    pageContainer: {
        backgroundColor: '#e2d8c6',
        width: width,
        height: height,

        // color: '#FFF',
        // fontFamily: 'Karla_300Light',
    },
})
