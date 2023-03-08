import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Linking,
} from 'react-native'

const { width } = Dimensions.get('window')
const offWhite = '#e2d8c6'
const greenBackgroundColor = '#1e965a'
// const redTabBackgroundColor = '#FF5B53'
export const PinkSeparator = () => <View style={styles.pinkSeparator} />
export const GreenSeparator = () => <View style={styles.greenSeparator} />
export const Separator = () => <View style={styles.separator} />

function FAQ({ route, navigation }) {
    return (
        <View style={styles.containerStyle}>
            <ScrollView
                style={{ backgroundColor: offWhite }}
                key={{}}
                nestedScrollEnabled={true}
            >
                {route.params.moreDetails.qaList.map((qaItem) => {
                    return (
                        <View key={qaItem.id}>
                            <TouchableOpacity
                                onPress={async () => {
                                    navigation.navigate('FAQDetail', {
                                        faqItem: qaItem,
                                    })
                                }}
                                style={[styles.container, { margin: 8 }]}
                            >
                                <Text
                                    style={{
                                        fontFamily: 'Poppins-Light',
                                        fontSize: 19,
                                        color: '#333333',
                                    }}
                                >
                                    {qaItem.question}
                                </Text>
                                <Separator />
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default FAQ

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#e2d8c6',
        marginBottom: 70,
    },
    separator: {
        backgroundColor: 'rgba(51, 51, 51, 0.3)',
        // backgroundColor: 'green',
        height: 1,
    },
})
