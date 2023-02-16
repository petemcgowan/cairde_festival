import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView,
    Pressable,
} from 'react-native'

const offWhite = '#e2d8c6'
const greenBackgroundColor = '#1e965a'
const { height } = Dimensions.get('window')

const WhatsOnDetails = ({ route, navigation }) => {
    console.log(
        'WhatsOnDetails, route.whatsOnDetails:' +
            JSON.stringify(route.params.whatsOnDetails)
    )

    const onPressBack = () => {
        navigation.goBack()
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.item} nestedScrollEnabled={true}>
                <View>
                    <Image
                        source={route.params.whatsOnDetails.image}
                        style={styles.image}
                    />
                </View>
                <View style={styles.titleView}>
                    <Text
                        style={[
                            styles.title,
                            { color: 'black', height: height * 0.1 },
                        ]}
                    >
                        {route.params.whatsOnDetails.title}
                    </Text>
                </View>
                <View style={styles.subTitleView}>
                    <Text
                        style={[
                            styles.subTitle,
                            { color: 'black', height: height * 0.1 },
                        ]}
                    >
                        {route.params.whatsOnDetails.subTitle}
                    </Text>
                </View>
                <View style={styles.descriptionView}>
                    <Text
                        style={[
                            styles.description,
                            { color: 'black', height: height * 0.2 },
                        ]}
                    >
                        {route.params.whatsOnDetails.description}
                    </Text>
                </View>
                <View style={styles.venueView}>
                    <Text
                        style={[
                            styles.venue,
                            { color: 'black', height: height * 0.1 },
                        ]}
                    >
                        Venue: {route.params.whatsOnDetails.venue}
                    </Text>
                </View>
                <View style={styles.backButtonView}>
                    <Pressable onPress={() => onPressBack()}>
                        <Text style={styles.backButton}>Back</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        // width: '100%',
        // height: '70%',
        width: '100%',
        height: 250,
    },
    item: {
        backgroundColor: offWhite,
        padding: 15,
        // marginVertical: 8,
        // marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    subTitle: {
        fontSize: 24,
    },
    description: {
        fontSize: 20,
    },
    venue: {
        fontSize: 20,
    },
    titleView: {
        border: 0,
        borderRadius: 40,
        backgroundColor: greenBackgroundColor,
    },
    subTitleView: {
        border: 0,
        borderRadius: 40,
        backgroundColor: greenBackgroundColor,
    },
    descriptionView: {
        border: 0,
        borderRadius: 40,
        backgroundColor: greenBackgroundColor,
    },
    venueView: {
        border: 0,
        borderRadius: 40,
        backgroundColor: greenBackgroundColor,
    },
    backButtonView: {
        alignItems: 'center',
        border: 0,
        borderRadius: 40,
        backgroundColor: greenBackgroundColor,
        fontSize: 28,
        margin: 5,
        padding: 3,
    },
    backButton: {
        color: offWhite,
        fontSize: 28,
    },
})

export default WhatsOnDetails
