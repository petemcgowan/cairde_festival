import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Linking,
} from 'react-native'

const offWhite = '#e2d8c6'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons/faArrowCircleLeft'

export const PinkSeparator = () => <View style={styles.pinkSeparator} />
export const GreenSeparator = () => <View style={styles.greenSeparator} />

const greenBackgroundColor = '#1e965a'

function MoreDetails({ route, navigation }) {
    const onPressBack = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            {/* <View style={styles.backButtonView}>
                <Pressable onPress={() => onPressBack()}>
                    <Text style={styles.backButton}>Back</Text>
                </Pressable>
            </View> */}
            <ScrollView style={{ backgroundColor: offWhite }} key={{}}>
                {route.params.moreDetails.qaList.map((qaItem) => {
                    return route.params.moreDetails.linkTree ? (
                        <View key={qaItem.key}>
                            <TouchableOpacity
                                onPress={async () => {
                                    await Linking.canOpenURL(qaItem.answer)
                                    Linking.openURL(qaItem.answer)
                                }}
                                style={[styles.container, { margin: 10 }]}
                            >
                                <Text>{qaItem.question}</Text>
                                <PinkSeparator />
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View key={qaItem.key}>
                            <Text
                                style={[
                                    styles.questionTextStyle,
                                    { fontSize: 18 },
                                ]}
                            >
                                {qaItem.question}
                            </Text>
                            <PinkSeparator />
                            <Text
                                style={[
                                    styles.questionTextStyle,
                                    { fontSize: 16 },
                                ]}
                            >
                                {qaItem.answer}
                            </Text>
                            <GreenSeparator />
                        </View>
                    )
                })}
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

export default MoreDetails

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        margin: 10,
    },
    greenSeparator: {
        backgroundColor: 'green',
        height: 1,
    },
    pinkSeparator: {
        backgroundColor: 'brown',
        height: 1,
    },
    questionTextStyle: {
        fontFamily: 'Effra',
    },
    answerTextStyle: {
        fontFamily: 'Effra',
    },
    backButtonView: {
        // bottom: 100,
        // left: 0,
        // marginBottom: 100,
        // alignItems: 'center',
        border: 0,
        width: '20%',
        height: 50,
        borderRadius: 40,
        // width: 66,
        // height: 66,
        backgroundColor: greenBackgroundColor,
        fontSize: 28,
        // margin: 5,
        marginTop: 5,
        padding: 5,
        // flex: 1,
        // justifyContent: 'flex-end',
        marginBottom: 5,
    },
    backButton: {
        // bottom: 100,
        // left: 0,
        // marginBottom: 100,
        // width: 66,
        // height: 66,
        // position: 'absolute',
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
