import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Linking,
    Dimensions,
} from 'react-native'

export const Separator = () => <View style={styles.separator} />
const { height } = Dimensions.get('window')

const offWhite = '#e2d8c6'

function MoreDetails({ route }) {
    return (
        <View style={styles.container}>
            <ScrollView
                style={{ backgroundColor: offWhite }}
                key={{}}
                nestedScrollEnabled={true}
            >
                {route.params.moreDetails.qaList.map((qaItem) => {
                    return route.params.moreDetails.linkTree ? (
                        <View key={qaItem.id}>
                            <TouchableOpacity
                                onPress={async () => {
                                    await Linking.canOpenURL(qaItem.answer)
                                    Linking.openURL(qaItem.answer)
                                }}
                                style={[{ margin: 10 }]}
                            >
                                <Text
                                    style={{
                                        color: 'darkgreen',
                                        fontSize: 18,
                                        textDecorationLine: 'underline',
                                        fontFamily: 'Poppins-Regular',
                                    }}
                                >
                                    {qaItem.question}
                                </Text>
                                <Separator />
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View key={qaItem.id}>
                            <Text
                                style={[
                                    styles.questionTextStyle,
                                    { fontSize: 18, color: '#333333' },
                                ]}
                            >
                                {qaItem.question}
                            </Text>
                            <Separator />
                            <Text
                                style={[
                                    styles.answerTextStyle,
                                    { fontSize: 17, color: '#333333' },
                                ]}
                            >
                                {qaItem.answer}
                            </Text>
                            <Separator />
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default MoreDetails

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        backgroundColor: '#e2d8c6',
        marginBottom: 75,
    },
    greenSeparator: {
        backgroundColor: 'green',
        height: 1,
    },
    separator: {
        backgroundColor: 'rgba(51, 51, 51, 0.2)',
        height: 1,
    },
    questionTextStyle: {
        fontFamily: 'Poppins-ExtraLight',
    },
    answerTextStyle: {
        fontFamily: 'Poppins-Light',
    },
    touchableOpacity: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
        bottom: height * 0.21,
    },
    floatingButton: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
})
