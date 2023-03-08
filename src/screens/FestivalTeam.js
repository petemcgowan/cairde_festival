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

function FestivalTeam() {
    return (
        <View style={styles.container}>
            <ScrollView nestedScrollEnabled={true}>
                <Text style={styles.titleText}>Director</Text>

                <Text style={styles.peopleText}>Tara McGowan</Text>
                <Text style={styles.titleText}>Administrator</Text>
                <Text style={styles.peopleText}>Stéphanie Pawula</Text>
                <Text style={styles.titleText}>
                    Production + Technical Team
                </Text>
                <Text style={styles.peopleText}>
                    Barry McKinney, Terry Markey, Aaron Robinson, Pete Vamos,
                    Patrick Curley
                </Text>

                <Text style={styles.titleText}>Communications</Text>
                <Text style={styles.peopleText}>Bowe Communications</Text>
                <Text style={styles.titleText}>Marketing Co-ordinator</Text>
                <Text style={styles.peopleText}>Edel Doherty</Text>
                <Text style={styles.titleText}>Sound Engineers</Text>
                <Text style={styles.peopleText}>
                    Dickon Whitehead, Luke Devaney, Daniel Bannon
                </Text>
                <Text style={styles.titleText}>Programme Assistant</Text>
                <Text style={styles.peopleText}>Sandy Porter</Text>

                <Text style={styles.titleText}>Volunteer Coordinator</Text>
                <Text style={styles.peopleText}>Suzanne Donnelly</Text>
                <Text style={styles.titleText}>Cairde in the Park Design</Text>
                <Text style={styles.peopleText}>
                    Vanya Lambrecht Ward & Gillian Ní Chaisaide
                </Text>
                <Text style={styles.titleText}>
                    Cairde in the Park Production Team
                </Text>
                <Text style={styles.peopleText}>
                    Dicky Gable, Chan Kin, Vincent Sweeney, Aaron Robinson
                </Text>
                <Text style={styles.titleText}>
                    Visual Art Trail Co-ordinators
                </Text>
                <Text style={styles.peopleText}>
                    Hannah Dobson & Barry McHugh
                </Text>
                <Text style={styles.titleText}>
                    Transcendent Documents Curator
                </Text>
                <Text style={styles.peopleText}>Yvette Monahan</Text>
                <Text style={styles.titleText}>Cairde Visual Committee</Text>
                <Text style={styles.peopleText}>
                    Marilin North, Cormac O’Leary, Lorna Watkins & Heidi Wickham
                </Text>
                <Text style={styles.titleText}>
                    Cairde Young Curators:Facilitators:
                </Text>
                <Text style={styles.peopleText}>
                    Andy Parsons and Sinéad Sexton
                </Text>
                <Text style={styles.titleText}>CYC:</Text>
                <Text style={styles.peopleText}>
                    Caoimhe Davidson, Megan Oldham, Ava Pastor
                </Text>

                <Image
                    style={styles.image}
                    source={require('../../assets/images/Cairde-Visual-Launch-8785.jpg')}
                ></Image>

                <Text style={styles.titleText}>Board of Directors</Text>

                <Text style={styles.titleText}>Chairperson</Text>
                <Text style={styles.peopleText}>Denise Rushe</Text>
                <Text style={styles.titleText}>Directors:</Text>
                <Text style={styles.peopleText}>
                    Noreen Callaghan, Jennifer Donovan, Niall Henry & Marie
                    O’Byrne
                </Text>
                <Text style={styles.titleText}>Company Secretary:</Text>
                <Text style={styles.peopleText}>Midwest Corporate</Text>
            </ScrollView>
        </View>
    )
}

export default FestivalTeam

const styles = StyleSheet.create({
    container: {
        width: width,
        flex: 1,
        backgroundColor: '#e2d8c6',
    },
    image: {
        width: width * 0.85,
        height: 150,
        borderRadius: 20,
        margin: 20,
    },
    titleText: {
        fontSize: 19,
        color: '#FC5C58', //'#FD708E',
        fontWeight: '500',
    },
    peopleText: {
        fontSize: 16,
        color: '#333333',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: offWhite,
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
})
