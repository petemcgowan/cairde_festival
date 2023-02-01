/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Pressable, Linking } from 'react-native';

function MoreScreen({ navigation }) {
  const onPressBookNow = async () => {
    const url = 'https://cairdefestival.ticketsolve.com/shows';
    await Linking.canOpenURL(url);
    Linking.openURL(url);
  };

  const onPressDonate = async () => {
    const url = 'https://www.idonate.ie/donation_widget/register-donor-anonymous.php?pid=5404';
    await Linking.canOpenURL(url);
    Linking.openURL(url);
  };

  const onPressNewsletter = async () => {
    const url = 'https://www.cairdefestival.com/home#newsletter';
    await Linking.canOpenURL(url);
    Linking.openURL(url);
  };

  const onPressNews = async () => {
    const url = 'https://www.cairdefestival.com/news';
    await Linking.canOpenURL(url);
    Linking.openURL(url);
  };

  const onPressSponsorUs = async () => {
    const url = 'https://www.cairdefestival.com/support-us';
    await Linking.canOpenURL(url);
    Linking.openURL(url);
  };

  return (
    <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e2d8c6' }]}>
      <View
        style={{
          backgroundColor: '#FF5B53',
          justifyContent: 'center',
          width: '80%',
          margin: 15,
          padding: 10,
          height: '10%',
        }}
      >
        <Pressable onPress={() => onPressBookNow()}>
          <Text
            style={{
              color: '#e2d8c6',
              fontFamily: 'Effra',
              fontSize: 20,
              textAlign: 'center',
              textAlignVertical: 'center',
            }}
          >
            Book Now
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          backgroundColor: '#FF5B53',
          justifyContent: 'center',
          width: '80%',
          margin: 15,
          padding: 10,
          height: '10%',
        }}
      >
        <Pressable onPress={() => onPressDonate()}>
          <Text style={{ color: '#e2d8c6', fontFamily: 'Effra', fontSize: 20, textAlign: 'center' }}>Donate</Text>
        </Pressable>
      </View>
      <View
        style={{
          backgroundColor: '#FF5B53',
          justifyContent: 'center',
          width: '80%',
          margin: 15,
          padding: 10,
          height: '10%',
        }}
      >
        <Pressable onPress={() => onPressNewsletter()}>
          <Text style={{ color: '#e2d8c6', fontFamily: 'Effra', fontSize: 20, textAlign: 'center' }}>Newsletter</Text>
        </Pressable>
      </View>
      <View
        style={{
          backgroundColor: '#FF5B53',
          justifyContent: 'center',
          width: '80%',
          margin: 15,
          padding: 10,
          height: '10%',
        }}
      >
        <Pressable onPress={() => onPressNews()}>
          <Text style={{ color: '#e2d8c6', fontFamily: 'Effra', fontSize: 20, textAlign: 'center' }}>News</Text>
        </Pressable>
      </View>
      <View
        style={{
          backgroundColor: '#FF5B53',
          justifyContent: 'center',
          width: '80%',
          margin: 15,
          padding: 10,
          height: '10%',
        }}
      >
        <Pressable onPress={() => onPressSponsorUs()}>
          <Text style={{ color: '#e2d8c6', fontFamily: 'Effra', fontSize: 20, textAlign: 'center' }}>Sponsors</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default MoreScreen;

const styles = StyleSheet.create({
  pageContainer: {
    // backgroundColor: "#e2d8c6",
    // color: '#FFF',
    // fontFamily: 'Karla_300Light',
  },
});
