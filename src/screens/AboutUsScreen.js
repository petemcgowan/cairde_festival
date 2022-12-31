import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
function AboutUsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.mainHeading}>
        Glycemic Index: What It Is and How to Use It
      </Text>
      <Text style={styles.paragraph}>
        Highlights include Crossing Skin, a new festival commission of an
        atmospheric and intimate dance installation from award winning dance
        innovators Junk Ensemble, Still Floating, the Irish premiere of BBC and
        Edinburgh Fringe award-winning Shôn Dale Jones’s witty and topical new
        play, writing workshops with Bernie McGill and Jan Carson, , the return
        of the Cairde in the Park, the Transcendent Documents, our first large
        scale open air exhibition and much more.
      </Text>
      <Text style={styles.paragraph}>
        Several factors influence the glycemic index of a food, including its
        nutrient composition, cooking method, ripeness, and the amount of
        processing it has undergone.
      </Text>
      <Text style={styles.paragraph}>
        The glycemic index can not only help increase your awareness of what
        you’re putting on your plate but also enhance weight loss, decrease your
        blood sugar levels, and reduce your cholesterol.
      </Text>
      <Text style={styles.paragraph}>
        This article takes a closer look at the glycemic index, including what
        it is, how it can affect your health, and how to use it.
      </Text>
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/images/cairde-about-us-2.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    lineHeight: 21,
    fontSize: 21,
    fontWeight: '200',
    color: '#4f4f4f',
    marginBottom: 12,
  },
  tinyLogo: {
    width: 324,
    height: 182,
    alignSelf: 'center',
    marginBottom: 12,
  },
});

export default AboutUsScreen;
