import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import { AppContext } from '../App'

const Menu = () => {
    const navigation = useNavigation()

    const { mapMenuChosen, setMapMenuChosen } = useContext(AppContext)

    const onPressSubMenu = (menuChosen, userCategory) => {
        setMapMenuChosen(menuChosen)
        navigation.navigate(menuChosen, {
            userCategoryChoice: userCategory,
            menuChosen: menuChosen,
        })
    }

    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity
                style={[styles.buttonStyle, { width: '25%', margin: 5 }]}
                onPress={() => {
                    onPressSubMenu('Art', 'art')
                }}
            >
                <Text
                    style={{
                        fontFamily: 'Poppins-SemiBold',
                        textAlign: 'center',
                        fontSize: 20,
                        color: mapMenuChosen === 'Art' ? 'green' : 'black',
                    }}
                >
                    Art
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.buttonStyle,
                    {
                        width: '25%',
                        paddingLeft: 5,
                        margin: 5,
                    },
                ]}
                onPress={() => {
                    onPressSubMenu('Stages', 'stages')
                }}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: 20,
                        color: mapMenuChosen === 'Stages' ? 'orange' : 'black',
                    }}
                >
                    Stages
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.buttonStyle, { width: '25%', margin: 5 }]}
                onPress={() => {
                    onPressSubMenu('Bars', 'bar')
                }}
            >
                <Text
                    style={{
                        fontFamily: 'Poppins-SemiBold',
                        textAlign: 'center',
                        fontSize: 20,
                        color: mapMenuChosen === 'Bars' ? 'orange' : 'black',
                    }}
                >
                    Bars
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.buttonStyle, { width: '25%', margin: 5 }]}
                onPress={() => {
                    onPressSubMenu('Food', 'food')
                }}
            >
                <Text
                    style={{
                        fontFamily: 'Poppins-SemiBold',
                        textAlign: 'center',
                        fontSize: 20,
                        color: mapMenuChosen === 'Food' ? 'orange' : 'black',
                    }}
                >
                    Food
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'pink',
    },
    textStyle: {
        textTransform: 'uppercase',
    },
    iconStyle: {
        width: '100%',
        height: 50,
        aspectRatio: 1,
    },
})

export default Menu
