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
export const GreySeparator = () => <View style={styles.greySeparator} />

const DATA = [
    {
        id: '1',
        name: 'Crossing Skin',
        title: 'Crossing Skin',
        subTitle: 'Junk Ensemble',
        image: require('../../assets/images/whatson/whatson01-crossingSkin.png'),
        description: `A new Cairde Sligo Arts Festival Commission created by multi-award-winning dance innovators Junk Ensemble.

Crossing Skin is an immersive live dance installation examining the myth of the selkie and our conflicted connection to the sea. Working with an acclaimed creative team, this intimate performance combines live music, dance and a stunning visual design which explores themes of abandonment and our fascination and abuse of the sea.`,
        grouping: ('one', 'two', 'three'),
        venue: 'The Factory Performance Space',
        igLink: 'https://www.instagram.com/junkensemble/?hl=en',
        fbLink: 'https://www.facebook.com/junkensemble/',
        ytLink: null,
        webLink: 'https://www.junkensemble.com/projects/view/2453988/1/5117866',
    },
    {
        id: '2',
        name: 'Transcendent Documents',
        title: 'Transcendent Documents',
        subTitle: 'Outdoor Photography Exhibition in Rosses Point',
        image: require('../../assets/images/whatson/whatson02-transcendentDocuments.jpeg'),
        description: `The American photographer Walker Evans (1903-1975) first referred to photographs as 'transcendent documents.' Evans believed that photographs could have recognisable content, resonance, and cultural meaning and still stand for or evoke a state of mind. The exhibition of Transcendent Documents will feature four Irish photographers working with images using a sense of place to evoke a particular state of mind.

Cairde Sligo Arts Festival has invited photographers who have made photographic bodies of work in the North-West and West, including Jill Quigley (Co. Donegal), Linda Brownlee (Co. Mayo), Kenneth O’Halloran (Co. Clare) and Yvette Monahan (Co. Sligo)`,
        grouping: ('one', 'two', 'three'),
        venue: 'Rosses Point Village Green',
        igLink: null,
        fbLink: null,
        ytLink: null,
        webLink: null,
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
        igLink: null,
        fbLink: null,
        ytLink: null,
        webLink: null,
    },
    {
        id: '4',
        name: 'Cairde in the Park',
        title: 'Cairde in the Park',
        subTitle: 'Party in the park',
        image: require('../../assets/images/whatson/whatson04-cairdeInThePark.jpeg'),
        description: `We are delighted to be back in Sligo’s Peace Park for a brand new and extended Cairde in the Park - Sligo’s favourite family day out (formerly known as Park Fest).

We are making up for lost time with this massive fun-filled day out featuring music, circus theatre, dance, DJ’s, family yoga, interactive play and delicious locally sourced food.

Join us for Fanzini Production’s Spailp, Strong Women Science, Dr. Procter’s walkabout magic and much more. We can’t wait to welcome you back to this beautiful space for an incredible day out for all ages.

Thank you to The Diocese of Elphin, St. Mary’s Presbytery and Sligo Social Services for facilitating our presence in the park.

The structures for Cairde in the Park have been funded by County Sligo Leader Partnership. `,
        grouping: ('one', 'two', 'three'),
        venue: 'The Peace Park',
        igLink: null,
        fbLink: null,
        ytLink: null,
        webLink: null,
    },
    {
        id: '5',
        name: 'Derek Gripper Guitar workshop',
        title: 'Derek Gripper',
        subTitle: 'Guitar workshop',
        image: require('../../assets/images/whatson/whatson05-derekGripper.jpeg'),
        description: `Join virtuoso guitar player Derek Gripper for a hands on guitar workshop aimed at guitar players with all levels of experience.

Derek Gripper is known for his groundbreaking technique for evoking the West African kora on the guitar. He has transcribed the complex music of Malian kora player Toumani Diabaté and infuses his interpretations of Bach’s music with lessons from the oral traditions of Africa.

He has performed with Toumani Diabaté’s Symmetric Orchestra and classical guitar legend John Williams, and tours worldwide.

As a teacher Gripper combines the techniques of oral tradition learning with the pedagogy of Maria Montessori and FM Alexander and teaches workshops online and in person as well as hosting a global guitar group online with nine lessons a week and numerous online courses.`,
        grouping: ('one', 'two', 'three'),
        venue: `Hawk's Well Theatre`,
        igLink: 'https://www.instagram.com/derek_gripper/?hl=en',
        fbLink: 'https://www.facebook.com/derekgripperguitar/',
        ytLink: 'https://www.youtube.com/@DerekGripperGuitar',
        webLink: 'https://www.derekgripper.com',
    },
    {
        id: '6',
        name: 'Basork',
        title: 'Basork',
        subTitle: 'Irish - European - Balkan - Fusion Ensemble',
        image: require('../../assets/images/whatson/whatson06-Basork.jpeg'),
        description: `BASORK, a fusion ensemble drawing on Irish, European and Middle Eastern music as the main influences and inspiration on their unique sound. Brass, Strings and Woodwind combine with powerful vocals, big melodies, and lots of improvisation!

            Followed by DJ Cantina Bop`,
        grouping: ('one', 'two', 'three'),
        venue: 'Andersons',
        igLink: 'https://www.instagram.com/basork/',
        fbLink: 'https://www.facebook.com/basorkmusic/',
        ytLink: 'https://www.youtube.com/user/BalkanAlienVideo?app=desktop',
        webLink: 'https://www.balkanaliensound.com/',
    },
    {
        id: '7',
        name: 'In a Contrary Place',
        title: 'In a Contrary Place',
        subTitle: 'Ruth Clinton & Niamh Moriarty',
        image: require('../../assets/images/whatson/whatson07-inAContraryPlace.jpeg'),
        description: `A body of performance and video work, four years in the making.

Since 2018, Ruth and Niamh have been exploring the impact of American culture on Irish narrative identities. They began this process by walking long abandoned sections of the Western Rail Corridor between Counties Sligo and Limerick. Here, the railway acts as a line of thought, along which ideas of western identity, binary political thinking, power, ecology and ‘Wild West’ film history intersect.

Going west is intrinsic to the Irish cultural narrative, from early American settlement through years of emigration. The artists take a long view of these complex tensions between progress and nostalgia, optimism and fear, as they play out both in our immediate present and throughout our history and culture.

Presenting their new short film and accompanying performance, Ruth Clinton and Niamh Moriarty, pursue an ongoing interest in the construction of official and folk records and how they can contribute to a collective sense of possibility or paralysis.

Through a process of self-reflexive storytelling, Niamh and Ruth will inhabit narratives of progress and nostalgia, complicity and solidarity, in their search for moments of unrealised potential in Irish history.`,
        grouping: ('one', 'two', 'three'),
        venue: 'Hyde Bridge Gallery',
        igLink: null,
        fbLink: null,
        ytLink: 'https://www.youtube.com/channel/UC9EqBWFUq4enzwtnEznWpeQ',
        webLink: 'https://www.ruthandniamh.info/',
    },
    {
        id: '14',
        name: 'Jump | Flux | Reconstructing Memory',
        title: 'Jump | Flux | Reconstructing Memory',
        subTitle: 'Three Films by Cléa van der Grijn',
        image: require('../../assets/images/whatson/whatson08-CvdgLux.jpeg'),
        description: `Cléa van der Grijn’s films have screened internationally and garnered awards at Melbourne International Underground Film Festival, Barcelona International Film Festival (2021), Toronto International Women Film Festival (2021) and Video Art and Experimental Film Festival New York.

Award winning visual artist and filmmaker Clea van der Grijn presents for the first time in Sligo her three most recent films.`,
        grouping: ('one', 'two', 'three'),
        venue: 'The Model',
        igLink: 'https://www.instagram.com/cleaelisa/?hl=en',
        fbLink: null,
        ytLink: null,
        webLink: 'http://www.cleavandergrijn.com/filmography/',
    },
    {
        id: '15',
        name: 'Ar Ais Arís VR',
        title: 'Ar Ais Arís VR',
        subTitle: 'Brú Theatre',
        image: require('../../assets/images/whatson/whatson09-Ar-Ais-Aris.jpeg'),
        description: `A moment of departure. A moment of return. A moment of reckoning.
        Irish language literature and visual poetry are combined in virtual reality, inspired by texts from Máirtín Ó Cadhain, Pádraic Ó Conaire and Nuala Ní Dhomhnaill around the theme of migration.

Brú’s team of performers, creators, designers and composers have come together to create three unique 180° films, immersing audiences in a fusion of movement, text, music and Connemara landscape through the use of VR headsets. Lose yourself in this evocative, contemporary take on some of the finest writing in the Irish language.

Ar Ais Arís is a commission as part of Galway 2020/ NUIG’s Aistriú project`,
        grouping: ('one', 'two', 'three'),
        venue: 'Sligo Airport',
        igLink: 'https://www.instagram.com/bru_theatre/?hl=en',
        fbLink: 'https://www.facebook.com/brutheatre/',
        ytLink: 'https://www.youtube.com/channel/UCSPDlJpkDRlU761rACakHZA',
        webLink: 'https://brutheatre.com/ar-ais-ars-1',
    },
    {
        id: '16',
        name: 'The Whispering Gallery Love of Moving Parts',
        title: 'The Whispering Gallery Love of Moving Parts',
        subTitle: 'By Cathal Roche',
        image: require('../../assets/images/whatson/whatson10-CathalRoche.jpeg'),
        description: `An immersive music performance-installation for solo performer, community voices & woodwind octet.

Over the past two years composer and saxophonist Cathal Roche invited the people of Sligo to leave anonymous voice messages describing their experiences of discovery and loss during the pandemic. The Whispering Gallery project, based at The Model Sligo, invited people to visit and record their voices in person or online.

The resulting collection of bits and scraps of transatlantic testimony offers the listener a rainbow of moving voices, woven together.. pulled apart.. in search of music, love, healing and understanding.. Roche on 9 woodwind instruments (bass flute to baritone saxophone) plays counterpoint to feeling and leads when the words fail.`,
        grouping: ('one', 'two', 'three'),
        venue: 'The Nest',
        igLink: 'https://www.instagram.com/cathalrochemusic/',
        fbLink: 'https://www.facebook.com/cathal.roche.saxophone/',
        ytLink: 'https://www.youtube.com/watch?v=YARi1ya6WmI',
        webLink: 'https://cathalroche.com/the-whispering-gallery',
    },
    {
        id: '17',
        name: 'Cycle Circus',
        title: 'Cycle Circus',
        subTitle: 'Coming to a village near you!',
        image: require('../../assets/images/whatson/whatson11-Tumble_Circus.jpeg'),
        description: `Cairde Sligo Arts Festival is delighted to welcome back award winning circus company Tumble Circus to bring circus by bicycle directly into your community.

Cycle Circus is an accessible outdoor show for all the family. It’s all human, high energy and loads of craic, celebrating circus, the human body and the bicycle! How would you explain it to a child: There is a circus coming to town on bikes. It’s going to be deadly.

Tumble Circus new show Cycle Circus will be criss-crossing Sligo on their bikes for a series of live ticketed shows and a few private shows in various care settings.`,
        grouping: ('one', 'two', 'three'),
        venue: 'Various',
        igLink: 'https://www.instagram.com/tumblecircus/?hl=en',
        fbLink: 'https://www.facebook.com/tumblecircus/',
        ytLink: 'https://www.youtube.com/channel/UCS36cG6dEDB5MSqXd_GeHyg',
        webLink: 'https://www.tumblecircus.com/',
    },
    {
        id: '19',
        name: 'Unearth',
        title: 'Unearth',
        subTitle: 'UNDERCURRENT collective | Kate Wilson performance',
        image: require('../../assets/images/whatson/whatson12-Unearth.png'),
        description: `This visually stunning performance weaves dance and narrative in a journey of gentle support and empowerment, finding joy and strength in our differences, and power in our collective connection to earth.

Bringing together an intergenerational ensemble, including Irish and international performers with ages ranging from 12-50 years and directed by Kate Wilson, Unearth is the result of a year-long collaborative process created in the context of the current health and environmental crisis. The performance blends visceral imagery and dance with narrative and music and invites the viewer to find strength in connection, both with each other, and with the land that holds us.

An uplifting and timely new performance which embraces diverse voices and perspectives and invites the audience into an intimate world celebrating the positive power of union and collaboration. `,
        grouping: ('one', 'two', 'three'),
        venue: `Hawk's Well Theatre`,
        igLink: 'https://www.instagram.com/hawkswelltheatre/?hl=en',
        fbLink: 'https://www.facebook.com/thehawkswelltheatre/',
        ytLink: null,
        webLink: 'https://www.hawkswell.com/information',
    },
    {
        id: '20',
        name: 'Still Floating',
        title: 'Still Floating',
        subTitle: 'Ruth Clinton & Niamh Moriarty',
        image: require('../../assets/images/whatson/whatson07-inAContraryPlace.jpeg'),
        description: `STILL FLOATING is a brand new piece of warm-hearted comic storytelling by BBC award-winning writer/performer Shôn Dale-Jones. A story about love, resilience and laughing at the things that should make us cry.

When someone suggests that Shôn should remount his 2006 Total Theatre award-winning hit show FLOATING (Barbican, Sydney Opera House) about the Isle of Anglesey floating away from mainland Britain, he is sure it isn’t what the world needs right now. 2006 is not 2022.

As Shôn explains why he shouldn’t present the show, we find out that sometimes going backwards helps us move forewords. Told by two-time Fringe First winner, this is a funny, uplifting and moving story, making the real and unreal fit together in one surprising whole.`,
        grouping: ('one', 'two', 'three'),
        venue: 'The Factory Performance Space',
        igLink: null,
        fbLink: null,
        ytLink: 'https://www.youtube.com/channel/UC9EqBWFUq4enzwtnEznWpeQ',
        webLink: 'https://www.ruthandniamh.info/',
    },
    {
        id: '21',
        name: 'Novel Writing: Getting Started',
        title: 'Novel Writing: Getting Started',
        subTitle: 'Writing Workshop with Bernie McGill',
        image: require('../../assets/images/whatson/whatson09-Ar-Ais-Aris.jpeg'),
        description: `Do you have an idea for a novel but don’t know how to get started? Or have you started a novel but become stuck part of the way through? Would you like some guidance from a professional writer on how to continue or how to begin?

This workshop, led by Bernie McGill will incorporate practical advice on structuring a novel, developing setting, building characters and refining point of view. Suitable for writers who are beginning or developing a novel. Early booking is advised due to limited spaces (max. 10)`,
        grouping: ('one', 'two', 'three'),
        venue: `The Yeat’s Building`,
        igLink: null,
        fbLink: 'https://www.facebook.com/BernieMcGillWriter/',
        ytLink: null,
        webLink: 'https://berniemcgill.com',
    },
]

const WhatsOnList = ({ navigation }) => {
    const renderItem = ({ item }) => {
        function onPress() {
            navigation.push('WhatsOnDetails', { whatsOnDetails: item })
        }
        return (
            <View>
                <GreySeparator />

                <TouchableOpacity onPress={onPress} style={styles.container}>
                    <View>
                        <Image source={item.image} style={styles.image} />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.subTitle}>{item.subTitle}</Text>
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
            </View>
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
        paddingHorizontal: 10,
        paddingVertical: 8,
        alignItems: 'center',
        backgroundColor: '#e2d8c6',
        width: width,
    },
    image: {
        width: 130,
        height: 130,
        borderRadius: 20,
        marginRight: 10,
    },
    row: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        flex: 1,
        border: 25,
        borderRadius: 5,
        borderColor: 'pink',
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        color: '#333333',
        // color: '#3a3a3a',
        fontFamily: 'Poppins-Light',
        // fontFamily: 'Effra',
    },
    venue: {
        fontSize: 16,
        // fontWeight: '600',
        color: '#3a3a3a',
        fontFamily: 'Poppins-ExtraLight',
    },

    subTitle: {
        color: '#666',
        fontSize: 15,
        marginTop: 2,
        fontFamily: 'Poppins-Light',
    },
    separator: {
        backgroundColor: '#ececec',
        height: 1,
    },
    greySeparator: {
        backgroundColor: 'rgba(51, 51, 51, 0.4)',
        height: 1.2,
    },
})
