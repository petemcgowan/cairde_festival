import React, { useContext, useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import Menu from './Menu'
import { AppContext } from '../App'

const { width } = Dimensions.get('window')
const offWhite = '#e2d8c6'

const DATA = [
    {
        id: '1',
        name: 'The Factory',
        title: 'The Factory',
        image: require('../../assets/images/map/Map01_The_Factory_Sligo.jpg'),
        description: 'Performing arts theater',
        category: 'stages',
        mapLocations: [
            {
                key: 1,
                coordinate: {
                    latitude: 54.273920829148175,
                    longitude: -8.477752671165007,
                },
            },
        ],
    },
    {
        id: '2',
        name: 'Rosses Point',
        title: 'Rosses Point',
        image: require('../../assets/images/map/Map02_Rosses_Point.jpg'),
        description: 'Village Green',
        category: 'stages',
        mapLocations: [
            {
                key: 2,
                coordinate: {
                    latitude: 54.30545521345939,
                    longitude: -8.564192261359873,
                },
            },
        ],
    },
    {
        id: '3',
        name: 'Peace Park',
        title: 'Peace Park',
        image: require('../../assets/images/map/Map03_PeacePark.jpg'),
        description: `Beautiful wooded area`,
        category: 'food',
        mapLocations: [
            {
                key: 1,
                coordinate: {
                    latitude: 54.26952236871217,
                    longitude: -8.477210055825038,
                },
            },
        ],
    },
    {
        id: '4',
        name: `Hawk's Well Theatre`,
        title: `Hawk's Well Theatre`,
        image: require('../../assets/images/map/Map04_HawksWellTheatre.jpg'),
        description: `Performing arts theater`,
        category: 'stages',
        mapLocations: [
            {
                key: 1,
                coordinate: {
                    latitude: 54.26898366343254,
                    longitude: -8.477167526990044,
                },
            },
        ],
    },
    {
        id: '5',
        name: 'Andersons Grill & Bar',
        title: `Andersons Grill & Bar`,
        image: require('../../assets/images/map/Map05_Andersons.jpg'),
        description: `Gastropub`,
        category: 'food',
        mapLocations: [
            {
                key: 1,
                coordinate: {
                    latitude: 54.27200399967741,
                    longitude: -8.47061388466003,
                },
            },
        ],
    },
    {
        id: '6',
        name: 'Hyde Bridge Gallery',
        title: `Hyde Bridge Gallery`,
        image: require('../../assets/images/map/Map06_HydeBridgeGallery2.jpg'),
        description: `Art gallery`,
        category: 'art',
        mapLocations: [
            {
                key: 1,
                coordinate: {
                    latitude: 54.27227036382098,
                    longitude: -8.474996475331592,
                },
            },
        ],
    },
    {
        id: '7',
        name: 'The Model',
        title: `The Model`,
        image: require('../../assets/images/map/Map07_TheModel.jpg'),
        description: `Art gallery`,
        category: 'art',
        mapLocations: [
            {
                key: 1,
                coordinate: {
                    latitude: 54.26893667265477,
                    longitude: -8.477183620237989,
                },
            },
        ],
    },
    {
        id: '8',
        name: 'Mullaghmore Schoolhouse',
        title: `Mullaghmore Schoolhouse`,
        image: require('../../assets/images/map/Map08_MullaghmoreSchoolhouse.png'),
        description: `Small performance area`,
        category: 'stages',
        mapLocations: [
            {
                key: 1,
                coordinate: {
                    latitude: 54.46691979148877,
                    longitude: -8.45018320874362,
                },
            },
        ],
    },
    {
        id: '9',
        name: 'The Nest (Branching Out Art CLG)',
        title: `The Nest (Branching Out Art CLG)`,
        image: require('../../assets/images/map/Map09_The_Nest2.jpeg'),
        description: `Art center`,
        category: 'food',
        mapLocations: [
            {
                key: 1,
                coordinate: {
                    latitude: 54.28475654775053,
                    longitude: -8.398742369364895,
                },
            },
        ],
    },
    {
        id: '10',
        name: 'Sligo Folk Park',
        title: `Sligo Folk Park`,
        image: require('../../assets/images/map/Map10_SligoFolkPark.jpeg'),
        description: `Tourist attraction`,
        category: 'stages',
        mapLocations: [
            {
                key: 1,
                coordinate: {
                    latitude: 54.129379632905575,
                    longitude: -8.398742369364895,
                },
            },
        ],
    },
    {
        id: '11',
        name: 'Skreen Dromard Community Preschool',
        title: `Skreen Dromard Community Preschool`,
        image: require('../../assets/images/map/Map11_Dromard.jpeg'),
        description: `Preschool`,
        category: 'stages',
        mapLocations: [
            {
                key: 1,
                coordinate: {
                    latitude: 54.239778037416556,
                    longitude: -8.678581811650076,
                },
            },
        ],
    },
    {
        id: '12',
        name: 'Rathcormack National School',
        title: `Rathcormack National School`,
        image: require('../../assets/images/map/Map12_Rathcormac.jpeg'),
        description: `School`,
        category: 'stages',
        mapLocations: [
            {
                key: 1,
                coordinate: {
                    latitude: 54.31597056597146,
                    longitude: -8.479376142330016,
                },
            },
        ],
    },
    {
        id: '13',
        name: `The Yeat’s Building`,
        title: `The Yeat’s Building`,
        image: require('../../assets/images/map/Map13_SligoYeatsBuilding.jpeg'),
        description: `Tourist attraction`,
        category: 'art',
        mapLocations: [
            {
                key: 1,
                coordinate: {
                    latitude: 54.27227106896176,
                    longitude: -8.474927144174961,
                },
            },
        ],
    },
    {
        id: '14',
        name: 'Sligo Airport',
        title: `Sligo Airport`,
        image: require('../../assets/images/map/Map14_SligoAirport.jpeg'),
        description: `Airport`,
        category: 'stages',
        mapLocations: [
            {
                key: 1,
                coordinate: {
                    latitude: 54.2788940507563,
                    longitude: -8.598945486548898,
                },
            },
        ],
    },
    {
        id: '15',
        name: 'Thomas Connolly Bar',
        title: `Thomas Connolly Bar`,
        image: require('../../assets/images/map/Map15_ThomasConnolly.jpeg'),
        description: `Heritage building`,
        category: 'bar',
        mapLocations: [
            {
                key: 1,
                coordinate: {
                    latitude: 54.27293212656219,
                    longitude: -8.47385135582504,
                },
            },
        ],
    },
    {
        id: '16',
        name: 'Hamilton Gallery',
        title: `Hamilton Gallery`,
        image: require('../../assets/images/map/Map16_HamiltonGallery.jpeg'),
        description: `Art Gallery`,
        category: 'art',
        mapLocations: [
            {
                key: 1,
                coordinate: {
                    latitude: 54.27066549719921,
                    longitude: -8.461925757555013,
                },
            },
        ],
    },
    {
        id: '17',
        name: 'Juniper Barn',
        title: `Juniper Barn`,
        image: require('../../assets/images/map/Map17_JuniperBarn2.jpg'),
        description: `Event venue`,
        category: 'food',
        mapLocations: [
            {
                key: 1,
                coordinate: {
                    latitude: 54.11474657960274,
                    longitude: -8.461925757555013,
                },
            },
        ],
    },
    {
        id: '18',
        name: 'Woodville Farm',
        title: `Woodville Farm`,
        image: require('../../assets/images/map/Map18_WoodvilleFarm.jpeg'),
        description: `Building`,
        category: 'food',
        mapLocations: [
            {
                key: 1,
                coordinate: {
                    latitude: 54.2688600858389,
                    longitude: -8.513792872894859,
                },
            },
        ],
    },
    {
        id: '19',
        name: `Dolly's Cottage`,
        title: `Dolly's Cottage`,
        image: require('../../assets/images/map/Map19_DollysCottage.jpeg'),
        description: `Strandhill`,
        category: 'art',
        mapLocations: [
            {
                key: 1,
                coordinate: {
                    latitude: 54.27107315703048,
                    longitude: -8.584187330567573,
                },
            },
        ],
    },
    {
        id: '20',
        name: 'Cummeen Strand',
        title: `Cummeen Strand`,
        image: require('../../assets/images/map/Map20_CumeenStrand.jpeg'),
        description: `Wetland`,
        category: 'stages',
        mapLocations: [
            {
                key: 1,
                coordinate: {
                    latitude: 54.28405901385842,
                    longitude: -8.550171589897188,
                },
            },
        ],
    },
]

const MapList = ({ navigation }) => {
    // console.log('MapList, filteredData:' + JSON.stringify(filteredData)); // 7
    const [filteredData, setFilteredData] = useState([])
    var categoryChoice = 'stages'
    const { userCategoryChoice } = useContext(AppContext)
    useEffect(() => {
        // if (!userCategoryChoice || userCategoryChoice === '') categoryChoice = 'stages';
        console.log('MapScreen, userCategoryChoice:' + userCategoryChoice)
        categoryChoice = userCategoryChoice
        console.log('MapList,categoryChoice:' + JSON.stringify(categoryChoice))
        setFilteredData(
            DATA.filter((object) => object.category === categoryChoice)
        )
    }, [userCategoryChoice])

    console.log('MapList, filteredData:' + filteredData)

    const renderItem = ({ item }) => {
        console.log('MapList, renderItem' + JSON.stringify(item))

        function onPressItem() {
            console.log('MapList renderItem onPress')
            navigation.push('MapDetails', { mapDetails: item })
        }

        return (
            <TouchableOpacity onPress={onPressItem} style={styles.container}>
                <View>
                    <ImageBackground source={item.image} style={styles.image}>
                        <View style={styles.content}>
                            <Text style={styles.title}>{item.name}</Text>
                            <Text style={styles.subtitle}>{item.subName}</Text>
                            <Text style={styles.venue}>{item.venue}</Text>
                        </View>
                    </ImageBackground>
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
            <Menu />
            <FlatList
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default MapList

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // paddingHorizontal: 20,
        // paddingVertical: 10,
        alignItems: 'center',
        // backgroundColor: '#e2d8c6',
        width: width,
    },
    image: {
        // flex: 0.5,
        width: width,
        height: 200,
        borderRadius: 40,
        marginRight: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        // color: '#3a3a3a',
        color: offWhite,
    },
    content: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        flex: 1,
        color: offWhite,
        // width: 1,
        // flexWrap: 'wrap',
        // flexShrink: 1,
    },
    subtitle: {
        color: '#666',
        flexWrap: 'wrap',
        // flexShrink: 1,
        // flex: 1,
        // width: 1,
        fontSize: 16,
        marginTop: 2,
        color: offWhite,
    },
    separator: {
        backgroundColor: '#ececec',
        height: 1,
    },
    right: {
        alignItems: 'flex-end',
        flex: 1,
    },
})
