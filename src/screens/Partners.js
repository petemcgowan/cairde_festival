import { View, ScrollView, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const offWhite = '#e2d8c6';

function Partners({ route, navigation }) {
  return (
    <ScrollView>
      <Text>Our Partners are wonderful text </Text>
      <Image
        style={styles.image}
        source={require('../../assets/images/partners/1321_RGB_Colour_Transparent.jpeg')}
      ></Image>
      <Image style={styles.image} source={require('../../assets/images/partners/AC_70_Year_Logo_Black.png')}></Image>
      <Image
        style={styles.image}
        source={require('../../assets/images/partners/ac-funding-festivals-ke-rgb-black.png')}
      ></Image>
      <Image style={styles.image} source={require('../../assets/images/partners/ClarEileIldanach.png')}></Image>
      <Image style={styles.image} source={require('../../assets/images/partners/download.png')}></Image>
      <Image style={styles.image} source={require('../../assets/images/partners/FI_logo.png')}></Image>
      <Image style={styles.image} source={require('../../assets/images/partners/govt-2040.png')}></Image>
      <Image style={styles.image} source={require('../../assets/images/partners/LCDC_SligoLogo.jpg')}></Image>
      <Image style={styles.image} source={require('../../assets/images/partners/leader-logo-300x278.png')}></Image>
      <Image style={styles.image} source={require('../../assets/images/partners/LEO_Master_LS_Pos_.jpg')}></Image>
      <Image style={styles.image} source={require('../../assets/images/partners/logo-sligococo2x.png')}></Image>
      <Image style={styles.image} source={require('../../assets/images/partners/logo.jpg')}></Image>
      <Image style={styles.image} source={require('../../assets/images/partners/Sligo_Go_See.jpeg')}></Image>
      <Image style={styles.image} source={require('../../assets/images/partners/sligoleader-logo-v1.png')}></Image>
      <Image
        style={styles.image}
        source={require('../../assets/images/partners/wdcif-community-team-sligo-724x476.png')}
      ></Image>
      <Image
        style={styles.image}
        source={require('../../assets/images/partners/wild-atlantic-way-logo-1024x384.jpg')}
      ></Image>
    </ScrollView>
  );
}

export default Partners;

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
