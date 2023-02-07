import {
    View,
    ScrollView,
    Image,
    Text,
    Dimensions,
    Pressable,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons/faArrowCircleLeft'

const { width } = Dimensions.get('window')
const offWhite = '#e2d8c6'
const greenBackgroundColor = '#1e965a'

function PrincipleFunders({ navigation }) {
    const onPressBack = () => {
        navigation.goBack()
    }
    return (
        <View>
            {/* <View style={styles.backButtonView}>
                <Pressable onPress={() => onPressBack()}>
                    <Text style={styles.backButton}>Back</Text>
                </Pressable>
            </View> */}
            <ScrollView>
                <Text>PrincipleFunders text</Text>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/principleFunders/Blue+Raincoat+logo+black.jpg')}
                ></Image>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/principleFunders/Con-Brio-Sligo-Music-Series.jpg')}
                ></Image>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/principleFunders/hawks_well_logo.png')}
                ></Image>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/principleFunders/HG+Mailchimp.jpg')}
                ></Image>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/principleFunders/juniper_logo_1.png')}
                ></Image>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/principleFunders/logo-yss-600px.png')}
                ></Image>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/principleFunders/sligoairport-logo.jpeg')}
                ></Image>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/principleFunders/the-model-sligo.png')}
                ></Image>
            </ScrollView>
            <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={onPressBack}
            >
                <Text style={{ fontSize: 20, color: offWhite }}>Back</Text>
                <FontAwesomeIcon
                    icon={faArrowCircleLeft}
                    size={48}
                    color="green"
                />
            </TouchableOpacity>
        </View>
    )
}

export default PrincipleFunders

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
    },
    image: {
        width: width * 0.85,
        height: 150,
        borderRadius: 20,
        margin: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        // color: '#3a3a3a',
        color: offWhite,
    },
    backButtonView: {
        border: 0,
        width: '20%',
        height: 50,
        borderRadius: 40,
        backgroundColor: greenBackgroundColor,
        fontSize: 28,
        marginTop: 5,
        padding: 5,
        marginBottom: 5,
    },
    backButton: {
        color: offWhite,
        fontSize: 28,
    },
    touchableOpacity: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
        bottom: 180,
        // top: height - 250,
    },
    floatingButton: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
})
