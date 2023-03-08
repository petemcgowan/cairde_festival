import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    Linking,
    Pressable,
} from 'react-native'

const { width } = Dimensions.get('window')
const offWhite = '#e2d8c6'
const greenBackgroundColor = '#1e965a'
// const redTabBackgroundColor = '#FF5B53'

function FAQDetail({ route, navigation }) {
    console.log(
        'FAQDetail: route.params.faqItem' + JSON.stringify(route.params.faqItem)
    )

    return (
        <View style={styles.containerStyle}>
            <ScrollView nestedScrollEnabled={true}>
                <Text
                    style={{
                        fontSize: 19,
                        marginBottom: 15,
                        marginTop: 5,
                        fontFamily: 'Poppins-Light',
                        color: '#333333',
                    }}
                >
                    {route.params.faqItem.answer}
                </Text>
                {route.params.faqItem.links &&
                    route.params.faqItem.links.map((linkItem) => {
                        return (
                            <View key={linkItem.id}>
                                <Pressable
                                    onPress={async () => {
                                        await Linking.canOpenURL(
                                            linkItem.linkDestination
                                        )
                                        Linking.openURL(
                                            linkItem.linkDestination
                                        )
                                    }}
                                    style={[
                                        styles.container,
                                        {
                                            margin: 10,
                                        },
                                    ]}
                                >
                                    <Text
                                        style={{
                                            color: 'darkgreen',
                                            fontSize: 19,
                                            textDecorationLine: 'underline',
                                            fontFamily: 'Poppins-Light',
                                        }}
                                    >
                                        {linkItem.linkName}
                                    </Text>
                                </Pressable>
                            </View>
                        )
                    })}
            </ScrollView>
        </View>
    )
}

export default FAQDetail

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#e2d8c6',
        marginBottom: 70,
    },
})
