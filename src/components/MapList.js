/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import MapDetails from '../components/MapDetails';
import Row from '../components/Row';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');
const offWhite = '#e2d8c6';

const DATA = [
  {
    id: '1',
    name: 'Crossing Skin',
    subName: 'Junk Ensemble',
    title: 'A new Cairde Sligo Arts Festival Commission created by multi-award-winning dance innovators Junk Ensemble.',
    subTitle: '',
    line2: '',
    image: require('../../assets/images/whatson01-crossingSkin.png'),
    description:
      'Crossing Skin is an immersive live dance installation examining the myth of the selkie and our conflicted connection to the sea. Working with an acclaimed creative team, this intimate performance combines live music, dance and a stunning visual design which explores themes of abandonment and our fascination and abuse of the sea.',
    category: ('food', 'bar'),
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
    category: ('food', 'bar'),
    venue: 'Rosses Point Village Green',
  },
];

export default ({ navigation }) => {
  const renderItem = ({ item }) => {
    console.log('MapList, renderItem' + JSON.stringify(item));

    function onPress() {
      console.log('MapList renderItem onPress');
      navigation.push('MapDetails', { mapDetails: item });
    }

    return (
      <View>
        <TouchableOpacity onPress={onPress} style={styles.container}>
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
            <FontAwesomeIcon icon={faChevronRight} size={24} color="orange" />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

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
    height: 340,
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
});
