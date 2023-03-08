import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Pressable,
    Image,
    Linking,
    ScrollView,
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe'

const offWhite = '#e2d8c6'
const grayBackgroundColor = '#333333'

const WhatsOnDetails = ({ route }) => {
    const whatsOnDetails = route.params.whatsOnDetails

    const onPressLink = async (url) => {
        await Linking.canOpenURL(url)
        Linking.openURL(url)
    }
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.item} nestedScrollEnabled={true}>
                <ImageBackground
                    source={whatsOnDetails.image}
                    style={styles.image}
                >
                    {/* <View style={styles.content}></View> */}
                </ImageBackground>
                <View style={styles.titleView}>
                    <Text
                        style={[
                            styles.title,
                            {
                                textAlign: 'left',
                            },
                        ]}
                    >
                        {whatsOnDetails.title}
                    </Text>
                </View>
                <View style={styles.subTitleView}>
                    <Text style={[styles.subTitle]}>
                        {whatsOnDetails.subTitle}
                    </Text>
                </View>
                <View style={styles.descriptionView}>
                    <Text style={[styles.description, { color: 'black' }]}>
                        {whatsOnDetails.description}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 16 }}>
                    {whatsOnDetails.igLink && (
                        <Pressable
                            onPress={() => onPressLink(whatsOnDetails.igLink)}
                        >
                            <Image
                                style={{
                                    width: 42,
                                    height: 42,
                                    padding: 10,
                                    margin: 10,
                                }}
                                source={require('../../assets/images/instagram-mobile-icon.png')}
                            />
                        </Pressable>
                    )}
                    {whatsOnDetails.fbLink && (
                        <Pressable
                            onPress={() => onPressLink(whatsOnDetails.fbLink)}
                        >
                            <Image
                                style={{
                                    width: 42,
                                    height: 42,
                                    padding: 10,
                                    margin: 10,
                                }}
                                source={require('../../assets/images/facebook_logo.png')}
                            />
                        </Pressable>
                    )}
                    {whatsOnDetails.ytLink && (
                        <Pressable
                            onPress={() => onPressLink(whatsOnDetails.ytLink)}
                        >
                            <Image
                                style={{
                                    width: 42,
                                    height: 42,
                                    padding: 10,
                                    margin: 10,
                                }}
                                source={require('../../assets/images/youtube-logo-on-transparent-background.png')}
                            />
                        </Pressable>
                    )}
                    {whatsOnDetails.webLink && (
                        <Pressable
                            onPress={() => onPressLink(whatsOnDetails.webLink)}
                        >
                            <FontAwesomeIcon
                                icon={faGlobe}
                                size={37}
                                style={{ padding: 10, margin: 10 }}
                                color={'black'}
                            />
                        </Pressable>
                    )}
                </View>
                <View style={styles.venueView}>
                    <Text style={[styles.venue]}>
                        Venue: {whatsOnDetails.venue}
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 250,
        marginBottom: 8,
    },
    item: {
        backgroundColor: offWhite,
        padding: 15,
    },
    titleView: {
        border: 0,
        borderRadius: 0,
        backgroundColor: grayBackgroundColor,
        marginBottom: 8,
    },
    title: {
        fontSize: 22,
        fontFamily: 'Poppins-Light',
        color: '#fff',
    },
    subTitleView: {
        border: 0,
        borderRadius: 0,
        backgroundColor: grayBackgroundColor,
        marginBottom: 8,
    },
    subTitle: {
        fontSize: 24,
        fontFamily: 'Poppins-Light',
        color: '#fff',
    },
    descriptionView: {
        marginBottom: 8,
    },
    description: {
        fontSize: 18,
        fontFamily: 'Poppins-Light',
    },
    venueView: {
        border: 0,
        borderRadius: 10,
        backgroundColor: grayBackgroundColor,
        marginBottom: 16,
    },
    venue: {
        fontSize: 20,
        fontFamily: 'Poppins-ExtraLight',
        color: '#fff',
    },
})

export default WhatsOnDetails
