import {
    View,
    ScrollView,
    Image,
    Text,
    Dimensions,
    StyleSheet,
} from 'react-native'

const { width } = Dimensions.get('window')
const offWhite = '#e2d8c6'
export const Separator = () => <View style={styles.separator} />

function PrincipleFunders() {
    return (
        <View style={styles.container}>
            <Text
                style={{
                    color: 'green',
                    fontSize: 26,
                    marginBottom: 13,
                    marginTop: 5,
                }}
            >
                Thank you to all of our Funders!
            </Text>
            <ScrollView nestedScrollEnabled={true}>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/principleFunders/Blue+Raincoat+logo+black.jpg')}
                ></Image>
                <Separator />
                <Image
                    style={styles.image}
                    source={require('../../assets/images/principleFunders/Con-Brio-Sligo-Music-Series.jpg')}
                ></Image>
                <Separator />
                <Image
                    style={styles.image}
                    source={require('../../assets/images/principleFunders/hawks_well_logo.png')}
                ></Image>
                <Separator />
                <Image
                    style={styles.image}
                    source={require('../../assets/images/principleFunders/HG+Mailchimp.jpg')}
                ></Image>
                <Separator />
                <Image
                    style={styles.image}
                    source={require('../../assets/images/principleFunders/the-model-sligo.png')}
                ></Image>
                <Separator />
                <Image
                    style={styles.image}
                    source={require('../../assets/images/principleFunders/juniper_logo_1.png')}
                ></Image>
                <Separator />
                <Image
                    style={styles.image}
                    source={require('../../assets/images/principleFunders/logo-yss-600px.png')}
                ></Image>
                <Separator />
                <Image
                    style={([styles.image], { marginBottom: 120 })}
                    source={require('../../assets/images/principleFunders/sligoairport-logo.jpeg')}
                ></Image>
                <Separator />
            </ScrollView>
        </View>
    )
}

export default PrincipleFunders

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e2d8c6',
    },
    image: {
        width: width * 0.85,
        height: 150,
        resizeMode: 'stretch',
        borderRadius: 10,
        margin: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: offWhite,
    },
    separator: {
        backgroundColor: 'rgba(51, 51, 51, 0.2)',
        height: 1,
    },
    touchableOpacity: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
        bottom: 180,
    },
    floatingButton: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
})
