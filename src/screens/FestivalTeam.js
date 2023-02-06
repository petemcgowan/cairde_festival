import { View, ScrollView, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const offWhite = '#e2d8c6';

function FestivalTeam({ route, navigation }) {
  return (
    <ScrollView>
      <Text style={{ fontSize: 20 }}>Festival Team</Text>

      <Text style={{ fontWeight: 'bold' }}>Director</Text>
      <Text>Tara McGowan</Text>
      <Text style={{ fontWeight: 'bold' }}>Administrator</Text>
      <Text>Stéphanie Pawula</Text>
      <Text style={{ fontWeight: 'bold' }}>Production + Technical Team</Text>
      <Text>Barry McKinney, Terry Markey, Aaron Robinson, Pete Vamos, Patrick Curley</Text>

      <Text style={{ fontWeight: 'bold' }}>Communications</Text>
      <Text>Bowe Communications</Text>
      <Text style={{ fontWeight: 'bold' }}>Marketing Co-ordinator</Text>
      <Text>Edel Doherty</Text>
      <Text style={{ fontWeight: 'bold' }}>Sound Engineers</Text>
      <Text>Dickon Whitehead, Luke Devaney, Daniel Bannon</Text>
      <Text style={{ fontWeight: 'bold' }}>Programme Assistant</Text>
      <Text>Sandy Porter</Text>

      <Text style={{ fontWeight: 'bold' }}>Volunteer Coordinator</Text>
      <Text>Suzanne Donnelly</Text>
      <Text style={{ fontWeight: 'bold' }}>Cairde in the Park Design</Text>
      <Text>Vanya Lambrecht Ward & Gillian Ní Chaisaide</Text>
      <Text style={{ fontWeight: 'bold' }}>Cairde in the Park Production Team</Text>
      <Text>Dicky Gable, Chan Kin, Vincent Sweeney, Aaron Robinson</Text>
      <Text style={{ fontWeight: 'bold' }}>Visual Art Trail Co-ordinators </Text>
      <Text>Hannah Dobson & Barry McHugh</Text>
      <Text style={{ fontWeight: 'bold' }}>Transcendent Documents Curator </Text>
      <Text>Yvette Monahan</Text>
      <Text style={{ fontWeight: 'bold' }}>Cairde Visual Committee</Text>
      <Text>Marilin North, Cormac O’Leary, Lorna Watkins & Heidi Wickham</Text>
      <Text style={{ fontWeight: 'bold' }}>Cairde Young Curators:Facilitators:</Text>
      <Text>Andy Parsons and Sinéad Sexton</Text>
      <Text style={{ fontWeight: 'bold' }}>CYC:</Text>
      <Text>Caoimhe Davidson, Megan Oldham, Ava Pastor</Text>

      <Image style={styles.image} source={require('../../assets/images/Cairde-Visual-Launch-8785.jpg')}></Image>

      <Text style={{ fontSize: 20 }}>Board of Directors</Text>

      <Text style={{ fontWeight: 'bold' }}>Chairperson</Text>
      <Text>Denise Rushe</Text>
      <Text style={{ fontWeight: 'bold' }}>Directors:</Text>
      <Text>Noreen Callaghan, Jennifer Donovan, Niall Henry & Marie O’Byrne </Text>
      <Text style={{ fontWeight: 'bold' }}>Company Secretary:</Text>
      <Text>Midwest Corporate</Text>
    </ScrollView>
  );
}

export default FestivalTeam;

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
