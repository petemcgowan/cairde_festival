import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { faCloud } from '@fortawesome/free-solid-svg-icons/faCloud';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const blueBackground = '#1382ac';
const orangeBackground = '#fc842d';
const offWhite = '#e2d8c6';
const greenBackgroundColor = '#1e965a';

function HomeScreen({ navigation }) {
  const onPressFacebook = async () => {
    const url = 'https://facebook.com/CairdeFestival';
    await Linking.canOpenURL(url);
    Linking.openURL(url);
  };

  const onPressInstagram = async () => {
    const url = 'https://instagram.com/CairdeFestival';
    await Linking.canOpenURL(url);
    Linking.openURL(url);
  };

  const onPressYoutube = async () => {
    const url = 'https://www.youtube.com/@CairdeFestival';
    await Linking.canOpenURL(url);
    Linking.openURL(url);
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: offWhite, fontFamily: 'Effra_Std_Lt' }}>
        <Image
          style={styles.mainImage}
          source={require('../../assets/images/main/Crossing-Skin-Main-Photo-Junk-Ensemble.jpg')}
        />
        <Pressable onPress={() => onPressFacebook()}>
          <View style={{ backgroundColor: blueBackground, flexDirection: 'row' }}>
            <View style={{ width: '80%' }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: offWhite,
                  lineHeight: 22,
                  fontSize: 23,
                  margin: 8,
                  fontFamily: 'Effra',
                }}
              >
                Join our community on Facebook
              </Text>
              <Text style={{ color: offWhite, lineHeight: 27, fontSize: 20, margin: 8, fontFamily: 'Effra' }}>
                Like our Facebook page and keep up with all the latest news and updates.
              </Text>
            </View>
            <View style={{ width: '20%', justifyContent: 'center' }}>
              <ImageBackground
                style={{ width: '100%', height: 58, alignItems: 'center', justifyContent: 'center' }}
                source={require('../../assets/images/NicePng_black-cloud-png_805444.png')}
              >
                <Image style={{ width: 32, height: 32 }} source={require('../../assets/images/facebook_logo.png')} />
              </ImageBackground>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => onPressInstagram()}>
          <View style={{ backgroundColor: orangeBackground, flexDirection: 'row' }}>
            <View style={{ width: '80%' }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: offWhite,
                  lineHeight: 22,
                  fontSize: 23,
                  margin: 12,
                  fontFamily: 'Effra',
                }}
              >
                Follow us on Instagram
              </Text>
              <Text style={{ color: offWhite, lineHeight: 27, fontSize: 20, margin: 12, fontFamily: 'Effra' }}>
                Follow us on Instagram and don't miss out on any moments.
              </Text>
            </View>
            <View style={{ width: '20%', justifyContent: 'center' }}>
              <ImageBackground
                style={{ width: '100%', height: 58, alignItems: 'center', justifyContent: 'center' }}
                source={require('../../assets/images/NicePng_black-cloud-png_805444.png')}
              >
                <Image
                  style={{ width: 32, height: 32 }}
                  source={require('../../assets/images/instagram-mobile-icon.png')}
                />
              </ImageBackground>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => onPressYoutube()}>
          <View style={{ backgroundColor: greenBackgroundColor, flexDirection: 'row' }}>
            <View style={{ width: '80%' }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: offWhite,
                  lineHeight: 22,
                  fontSize: 23,
                  margin: 10,
                  fontFamily: 'Effra',
                }}
              >
                Explore our Youtube channel
              </Text>
              <Text style={{ color: offWhite, lineHeight: 27, fontSize: 20, margin: 10, fontFamily: 'Effra' }}>
                We have a lot of fun stuff lined up for you, discover our official YouTube channel here.
              </Text>
            </View>
            <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center' }}>
              <ImageBackground
                style={{ width: '100%', height: 58, alignItems: 'center', justifyContent: 'center' }}
                source={require('../../assets/images/NicePng_black-cloud-png_805444.png')}
              >
                <Image
                  style={{ width: 42, height: 42 }}
                  source={require('../../assets/images/youtube-logo-on-transparent-background.png')}
                />
              </ImageBackground>
            </View>
          </View>
        </Pressable>
        <View>
          <Text style={styles.paragraph}>Highlights include: </Text>
          <Text style={styles.paragraph}>
            {'\u2022'}Crossing Skin, a new festival commission of an atmospheric and intimate dance installation from
            award-winning dance innovators Junk Ensemble,{' '}
          </Text>
          <Text style={styles.paragraph}>
            {'\u2022'}Still Floating, the Irish premiere of BBC and Edinburgh Fringe award-winning Shôn Dale Jones’s
            witty and topical new play, writing workshops with Bernie McGill and{' '}
          </Text>
          <Text style={styles.paragraph}>
            {'\u2022'}Jan Carson, the return of the Cairde in the Park, the Transcendent Documents, our first large
            scale open air exhibition and much more.
          </Text>
          <Text style={styles.paragraph}>
            Several factors influence the glycemic index of a food, including its nutrient composition, cooking method,
            ripeness, and the amount of processing it has undergone.
          </Text>
          <Text style={styles.paragraph}>
            The glycemic index can not only help increase your awareness of what you’re putting on your plate but also
            enhance weight loss, decrease your blood sugar levels, and reduce your cholesterol.
          </Text>
          <Text style={styles.paragraph}>
            This article takes a closer look at the glycemic index, including what it is, how it can affect your health,
            and how to use it.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: offWhite,
    // color: '#FFF',
  },
  paragraph: {
    // lineHeight: 21,
    fontFamily: 'Effra',
    // fontFamily: 'Effra Light',
    fontSize: 21,
    // fontWeight: '200',
    color: '#4f4f4f',
    marginBottom: 12,
  },
  mainImage: {
    width: '100%',
    height: 182,
    alignSelf: 'center',
    marginBottom: 12,
  },
});

export default HomeScreen;
