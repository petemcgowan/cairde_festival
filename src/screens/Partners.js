import {
    View,
    ScrollView,
    Text,
    Image,
    StyleSheet,
    Dimensions,
} from 'react-native'

const { width } = Dimensions.get('window')
const offWhite = '#e2d8c6'
export const Separator = () => <View style={styles.separator} />

function Partners() {
    return (
        <View style={styles.containerStyle}>
            <Text
                style={{
                    color: 'green',
                    fontSize: 26,
                    marginBottom: 13,
                    marginTop: 5,
                }}
            >
                Thank you to all of our Partners!
            </Text>
            <ScrollView nestedScrollEnabled={true}>
                <Image
                    key="2"
                    style={styles.image}
                    source={require('../../assets/images/partners/1321_RGB_Colour_Transparent.jpeg')}
                ></Image>
                <Separator />
                <Image
                    key="3"
                    style={styles.image}
                    source={require('../../assets/images/partners/AC_70_Year_Logo_Black.png')}
                ></Image>
                <Separator />
                <Image
                    key="4"
                    style={styles.image}
                    source={require('../../assets/images/partners/ac-funding-festivals-ke-rgb-black.png')}
                ></Image>
                <Separator />
                <Image
                    key="5"
                    style={styles.image}
                    source={require('../../assets/images/partners/ClarEileIldanach.png')}
                ></Image>
                <Separator />
                <Image
                    key="6"
                    style={styles.image}
                    source={require('../../assets/images/partners/download.png')}
                ></Image>
                <Separator />
                <Image
                    key="7"
                    style={styles.image}
                    source={require('../../assets/images/partners/FI_logo.png')}
                ></Image>
                <Separator />
                <Image
                    key="8"
                    style={styles.image}
                    source={require('../../assets/images/partners/govt-2040.png')}
                ></Image>
                <Separator />
                <Image
                    key="9"
                    style={styles.image}
                    source={require('../../assets/images/partners/LCDC_SligoLogo.jpg')}
                ></Image>
                <Separator />
                <Image
                    key="10"
                    style={styles.image}
                    source={require('../../assets/images/partners/leader-logo-300x278.png')}
                ></Image>
                <Separator />
                <Image
                    key="11"
                    style={styles.image}
                    source={require('../../assets/images/partners/LEO_Master_LS_Pos_.jpg')}
                ></Image>
                <Separator />
                <Image
                    key="12"
                    style={styles.image}
                    source={require('../../assets/images/partners/logo-sligococo2x.png')}
                ></Image>
                <Separator />
                <Image
                    key="13"
                    style={styles.image}
                    source={require('../../assets/images/partners/logo.jpg')}
                ></Image>
                <Separator />
                <Image
                    key="14"
                    style={styles.image}
                    source={require('../../assets/images/partners/Sligo_Go_See.jpeg')}
                ></Image>
                <Separator />
                <Image
                    key="15"
                    style={styles.image}
                    source={require('../../assets/images/partners/sligoleader-logo-v1.png')}
                ></Image>
                <Separator />
                <Image
                    key="16"
                    style={styles.image}
                    source={require('../../assets/images/partners/wdcif-community-team-sligo-724x476.png')}
                ></Image>
                <Separator />
                <Image
                    key="17"
                    style={([styles.image], { marginBottom: 200 })}
                    source={require('../../assets/images/partners/wild-atlantic-way-logo-1024x384.jpg')}
                ></Image>
                <Separator />
            </ScrollView>
        </View>
    )
}

export default Partners

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#e2d8c6',
    },
    image: {
        width: width * 0.85,
        height: 150,
        resizeMode: 'stretch',
        borderRadius: 20,
        margin: 20,
    },
    separator: {
        backgroundColor: 'rgba(51, 51, 51, 0.2)',
        height: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: offWhite,
    },
})
