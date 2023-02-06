import { View, ScrollView, Image, Text, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
const offWhite = '#e2d8c6';

function PrincipleFunders({ route, navigation }) {
  return (
    <ScrollView>
      <Text>PrincipleFunders text</Text>
      <Image
        style={styles.image}
        source={require('../../assets/images/principleFunders/Blue+Raincoat+logo+black.jpg')}
      ></Image>
      <Image
        style={styles.image}
        source={require('../../assets/images/principleFunders/Con-Brio-Sligo-Music-Series.jpg')}
      ></Image>
      <Image style={styles.image} source={require('../../assets/images/principleFunders/hawks_well_logo.png')}></Image>
      <Image style={styles.image} source={require('../../assets/images/principleFunders/HG+Mailchimp.jpg')}></Image>
      <Image style={styles.image} source={require('../../assets/images/principleFunders/juniper_logo_1.png')}></Image>
      <Image style={styles.image} source={require('../../assets/images/principleFunders/logo-yss-600px.png')}></Image>
      <Image
        style={styles.image}
        source={require('../../assets/images/principleFunders/sligoairport-logo.jpeg')}
      ></Image>
      <Image style={styles.image} source={require('../../assets/images/principleFunders/the-model-sligo.png')}></Image>
    </ScrollView>
  );
}

export default PrincipleFunders;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width,
  },
  image: {
    width: width * 0.85,
    height: 150,
    borderRadius: 20,
    margin: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    // color: '#3a3a3a',
    color: offWhite,
  },
});
