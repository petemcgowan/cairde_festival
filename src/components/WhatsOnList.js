import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'

const { width } = Dimensions.get('window')

const DATA = [
    {
        id: '1',
        name: 'Crossing Skin',
        subName: 'Junk Ensemble',
        title: 'A new Cairde Sligo Arts Festival Commission created by multi-award-winning dance innovators Junk Ensemble.',
        subTitle: '',
        image: require('../../assets/images/whatson/whatson01-crossingSkin.png'),
        description:
            'Crossing Skin is an immersive live dance installation examining the myth of the selkie and our conflicted connection to the sea. Working with an acclaimed creative team, this intimate performance combines live music, dance and a stunning visual design which explores themes of abandonment and our fascination and abuse of the sea.',
        grouping: ('one', 'two', 'three'),
        venue: 'The Factory Performance Space',
    },
    {
        id: '2',
        name: 'Transcendent Documents',
        subName: 'Outdoor Photography Exhibition in Rosses Point',
        title: 'Transcendent Documents',
        subTitle: 'Outdoor Photography Exhibition in Rosses Point',
        image: require('../../assets/images/whatson/whatson02-transcendentDocuments.jpeg'),
        description: `The American photographer Walker Evans (1903-1975) first referred to photographs as 'transcendent documents.' Evans believed that photographs could have recognisable content, resonance, and cultural meaning and still stand for or evoke a state of mind. The exhibition of Transcendent Documents will feature four Irish photographers working with images using a sense of place to evoke a particular state of mind.

        Cairde Sligo Arts Festival has invited photographers who have made photographic bodies of work in the North-West and West, including Jill Quigley (Co. Donegal), Linda Brownlee (Co. Mayo), Kenneth O’Halloran (Co. Clare) and Yvette Monahan (Co. Sligo)`,
        grouping: ('one', 'two', 'three'),
        venue: 'Rosses Point Village Green',
    },
    {
        id: '3',
        name: 'Visual Art Trail',
        title: 'Visual Art Trail',
        subTitle: 'A Visual Art Trail through Sligo town centre',
        image: require('../../assets/images/whatson/whatson03-visualArtTrail.jpeg'),
        description: `With this second iteration of the Visual Artist Trail we have chosen six artists both local and international to explore themes of how our surroundings can influence our practice. Whether that be our environment, people around us or even the news that we digest - It can all have an impact on the art we create.

      We have stationed exciting works using spaces dotted around Sligo town centre and invite you to enjoy art in your everyday.  Featured artists in 2022 are the Sligo based BaHa collective, Cecilia Danell, Fiona Harrington, Harry Walsh Foreman, Anna Spearman and Michael Wann.)`,
        grouping: ('one', 'two', 'three'),
        venue: 'Various',
    },
    {
        id: '4',
        name: 'Cairde in the Park',
        title: 'We are delighted to be back in Sligo’s Peace Park for a brand new and extended Cairde in the Park - Sligo’s favourite family day out (formerly known as Park Fest).',
        subTitle: 'subTitle',
        image: require('../../assets/images/whatson/whatson04-cairdeInThePark.jpeg'),
        description: `We are making up for lost time with this massive fun-filled day out featuring music, circus theatre, dance, DJ’s, family yoga, interactive play and delicious locally sourced food.

    Join us for Fanzini Production’s Spailp, Strong Women Science, Dr. Procter’s walkabout magic and much more. We can’t wait to welcome you back to this beautiful space for an incredible day out for all ages.

    Thank you to The Diocese of Elphin, St. Mary’s Presbytery and Sligo Social Services for facilitating our presence in the park.

    The structures for Cairde in the Park have been funded by County Sligo Leader Partnership. `,
        grouping: ('one', 'two', 'three'),
        venue: 'The Peace Park',
    },
    {
        id: '5',
        name: 'Derek Gripper Guitar workshop',
        title: '',
        subTitle: '',
        image: require('../../assets/images/whatson/whatson05-derekGripper.jpeg'),
        description: `Derek Gripper is known for his groundbreaking technique for evoking the West African kora on the guitar. He has transcribed the complex music of Malian kora player Toumani Diabaté and infuses his interpretations of Bach’s music with lessons from the oral traditions of Africa. He has performed with Toumani Diabaté’s Symmetric Orchestra and classical guitar legend John Williams, and tours worldwide.

        As a teacher Gripper combines the techniques of oral tradition learning with the pedagogy of Maria Montessori and FM Alexander and teaches workshops online and in person as well as hosting a global guitar group online with nine lessons a week and numerous online courses.`,
        grouping: ('one', 'two', 'three'),
        venue: `Hawk's Well Theatre`,
    },
    {
        id: '6',
        name: 'Basork',
        title: '',
        subTitle: 'Followed by DJ Cantina Bop',
        image: require('../../assets/images/whatson/whatson06-Basork.jpeg'),
        description: '',
        grouping: ('one', 'two', 'three'),
        venue: '',
    },
    {
        id: '7',
        name: 'In a Contrary Place',
        title: '',
        subTitle: 'Ruth Clinton & Niamh Moriarty',
        image: require('../../assets/images/whatson/whatson07-inAContraryPlace.jpeg'),
        description: '',
        grouping: ('one', 'two', 'three'),
        venue: '',
    },
    {
        id: '14',
        name: 'Jump | Flux | Reconstructing Memory',
        subName: 'Three Films by Cléa van der Grijn',
        title: '',
        subTitle: '',
        image: require('../../assets/images/whatson/whatson08-CvdgLux.jpeg'),
        description: '',
        grouping: ('one', 'two', 'three'),
        venue: '',
    },
    {
        id: '15',
        name: 'Ar Ais Arís VR',
        subName: 'Brú Theatre',
        title: '',
        subTitle: '',
        image: require('../../assets/images/whatson/whatson09-Ar-Ais-Aris.jpeg'),
        description: '',
        grouping: ('one', 'two', 'three'),
        venue: '',
    },
    {
        id: '16',
        name: 'The Whispering Gallery Love of Moving Parts',
        subName: 'By Cathal Roche',
        title: '',
        subTitle: '',
        image: require('../../assets/images/whatson/whatson10-CathalRoche.jpeg'),
        description: '',
        grouping: ('one', 'two', 'three'),
        venue: '',
    },
    {
        id: '17',
        name: 'Cycle Circus',
        subName: '',
        title: '',
        subTitle: '',
        image: require('../../assets/images/whatson/whatson11-Tumble_Circus.jpeg'),
        description: '',
        grouping: ('one', 'two', 'three'),
        venue: '',
    },
    {
        id: '19',
        name: 'Unearth',
        subName: 'UNDERCURRENT collective | Kate Wilson performance',
        title: '',
        subTitle: '',
        image: require('../../assets/images/whatson/whatson12-Unearth.png'),
        description: '',
        grouping: ('one', 'two', 'three'),
        venue: '',
    },
    {
        id: '20',
        name: 'In a Contrary Place',
        subName: 'Ruth Clinton & Niamh Moriarty',
        title: '',
        subTitle: '',
        image: require('../../assets/images/whatson/whatson07-inAContraryPlace.jpeg'),
        description: '',
        grouping: ('one', 'two', 'three'),
        venue: '',
    },
    {
        id: '21',
        name: 'Ar Ais Arís VR',
        subName: 'Brú Theatre',
        title: '',
        subTitle: '',
        image: require('../../assets/images/whatson/whatson09-Ar-Ais-Aris.jpeg'),
        description: '',
        grouping: ('one', 'two', 'three'),
        venue: '',
    },
]

const WhatsOnList = ({ navigation }) => {
    const renderItem = ({ item }) => {
        function onPress() {
            navigation.push('WhatsOnDetails', { whatsOnDetails: item })
        }
        return (
            <TouchableOpacity onPress={onPress} style={styles.container}>
                <View>
                    <Image source={item.image} style={styles.image} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.subtitle}>{item.subName}</Text>
                    <Text style={styles.venue}>{item.venue}</Text>
                </View>
                <View>
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        size={24}
                        color="orange"
                    />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}
export default WhatsOnList

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: '#e2d8c6',
        width: width,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 20,
        marginRight: 10,
    },
    row: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#3a3a3a',
    },
    subtitle: {
        color: '#666',
        fontSize: 16,
        marginTop: 2,
    },
    separator: {
        backgroundColor: '#ececec',
        height: 1,
    },
})
