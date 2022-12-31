/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import WhatsOnDetails from '../components/WhatsOnDetails';
import Row from '../components/Row';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';

const DATA = [
  {
    id: '1',
    name: 'Crossing Skin',
    subName: 'Junk Ensemble',
    title:
      'A new Cairde Sligo Arts Festival Commission created by multi-award-winning dance innovators Junk Ensemble.',
    subTitle: '',
    line2: '',
    image: require('../../assets/images/whatson01-crossingSkin.png'),
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
    image: require('../../assets/images/whatson02-transcendentDocuments.jpeg'),
    description: 'description',
    grouping: ('one', 'two', 'three'),
    venue: 'Rosses Point Village Green',
  },
  {
    id: '3',
    name: 'Visual Art Trail',
    subName: 'A Visual Art Trail through Sligo town centre',
    title: 'Visual Art Trail',
    subTitle: '',
    image: require('../../assets/images/whatson03-visualArtTrail.jpeg'),
    description: `With this second iteration of the Visual Artist Trail we have chosen six artists both local and international to explore themes of how our surroundings can influence our practice. Whether that be our environment, people around us or even the news that we digest - It can all have an impact on the art we create.

      We have stationed exciting works using spaces dotted around Sligo town centre and invite you to enjoy art in your everyday.  Featured artists in 2022 are the Sligo based BaHa collective, Cecilia Danell, Fiona Harrington, Harry Walsh Foreman, Anna Spearman and Michael Wann.)`,
    grouping: ('one', 'two', 'three'),
    venue: 'Various',
  },
  {
    id: '4',
    name: 'Cairde in the Park',
    subName: '',
    title:
      'We are delighted to be back in Sligo’s Peace Park for a brand new and extended Cairde in the Park - Sligo’s favourite family day out (formerly known as Park Fest).',
    subTitle: 'subTitle',
    image: require('../../assets/images/whatson04-cairdeInThePark.jpeg'),
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
    subName: '',
    title: '',
    subTitle: '',
    image: require('../../assets/images/whatson05-derekGripper.jpeg'),
    description: '',
    grouping: ('one', 'two', 'three'),
    venue: `Hawk's Well Theatre`,
  },
  {
    id: '6',
    name: 'Basork',
    subName: 'Followed by DJ Cantina Bop',
    title: '',
    subTitle: '',
    image: require('../../assets/images/whatson06-Basork.jpeg'),
    description: '',
    grouping: ('one', 'two', 'three'),
    venue: '',
  },
  {
    id: '7',
    name: 'In a Contrary Place',
    subName: 'Ruth Clinton & Niamh Moriarty',
    title: '',
    subTitle: '',
    image: require('../../assets/images/whatson07-inAContraryPlace.jpeg'),
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
    image: require('../../assets/images/whatson08-CvdgLux.jpeg'),
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
    image: require('../../assets/images/whatson09-Ar-Ais-Aris.jpeg'),
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
    image: require('../../assets/images/whatson10-CathalRoche.jpeg'),
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
    image: require('../../assets/images/whatson11-Tumble_Circus.jpeg'),
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
    image: require('../../assets/images/whatson12-Unearth.png'),
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
    image: require('../../assets/images/whatson07-inAContraryPlace.jpeg'),
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
    image: require('../../assets/images/whatson09-Ar-Ais-Aris.jpeg'),
    description: '',
    grouping: ('one', 'two', 'three'),
    venue: '',
  },
];

export default ({navigation}) => {
  const renderItem = ({item}) => {
    function onPress() {
      console.log('WhatsOnList renderItem onPress');
      navigation.push('WhatsOnDetails', {contact: item});
    }
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <View>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.subtitle}>{item.subName}</Text>
          <Text style={styles.venue}>{item.venue}</Text>
        </View>
        <View>
          <FontAwesomeIcon icon={faChevronRight} size={24} color="orange" />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
// export default WhatsOnList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 20,
    marginRight: 10,
  },
  content: {
    alignItems: 'flex-start',
    justifyContent: 'center',
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
  right: {
    alignItems: 'flex-end',
    flex: 1,
  },
});
