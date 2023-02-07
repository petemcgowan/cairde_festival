import {
    View,
    ScrollView,
    Text,
    Image,
    Pressable,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons/faArrowCircleLeft'

const { width } = Dimensions.get('window')
const offWhite = '#e2d8c6'
const greenBackgroundColor = '#1e965a'

function Partners({ navigation }) {
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
                <Text key="1">Our Partners are wonderful text </Text>
                <Image
                    key="2"
                    style={styles.image}
                    source={require('../../assets/images/partners/1321_RGB_Colour_Transparent.jpeg')}
                ></Image>
                <Image
                    key="3"
                    style={styles.image}
                    source={require('../../assets/images/partners/AC_70_Year_Logo_Black.png')}
                ></Image>
                <Image
                    key="4"
                    style={styles.image}
                    source={require('../../assets/images/partners/ac-funding-festivals-ke-rgb-black.png')}
                ></Image>
                <Image
                    key="5"
                    style={styles.image}
                    source={require('../../assets/images/partners/ClarEileIldanach.png')}
                ></Image>
                <Image
                    key="6"
                    style={styles.image}
                    source={require('../../assets/images/partners/download.png')}
                ></Image>
                <Image
                    key="7"
                    style={styles.image}
                    source={require('../../assets/images/partners/FI_logo.png')}
                ></Image>
                <Image
                    key="8"
                    style={styles.image}
                    source={require('../../assets/images/partners/govt-2040.png')}
                ></Image>
                <Image
                    key="9"
                    style={styles.image}
                    source={require('../../assets/images/partners/LCDC_SligoLogo.jpg')}
                ></Image>
                <Image
                    key="10"
                    style={styles.image}
                    source={require('../../assets/images/partners/leader-logo-300x278.png')}
                ></Image>
                <Image
                    key="11"
                    style={styles.image}
                    source={require('../../assets/images/partners/LEO_Master_LS_Pos_.jpg')}
                ></Image>
                <Image
                    key="12"
                    style={styles.image}
                    source={require('../../assets/images/partners/logo-sligococo2x.png')}
                ></Image>
                <Image
                    key="13"
                    style={styles.image}
                    source={require('../../assets/images/partners/logo.jpg')}
                ></Image>
                <Image
                    key="14"
                    style={styles.image}
                    source={require('../../assets/images/partners/Sligo_Go_See.jpeg')}
                ></Image>
                <Image
                    key="15"
                    style={styles.image}
                    source={require('../../assets/images/partners/sligoleader-logo-v1.png')}
                ></Image>
                <Image
                    key="16"
                    style={styles.image}
                    source={require('../../assets/images/partners/wdcif-community-team-sligo-724x476.png')}
                ></Image>
                <Image
                    key="17"
                    style={styles.image}
                    source={require('../../assets/images/partners/wild-atlantic-way-logo-1024x384.jpg')}
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

export default Partners

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
