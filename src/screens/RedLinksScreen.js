/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, Button, Linking} from 'react-native';

function RedLinksScreen({navigation}) {
  const onPressBookNow = async () => {
    const url = 'https://cairdefestival.ticketsolve.com/shows';
    await Linking.canOpenURL(url);
    Linking.openURL(url);
  };

  const onPressDonate = async () => {
    const url =
      'https://www.idonate.ie/donation_widget/register-donor-anonymous.php?pid=5404';
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
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          backgroundColor: '#FF5B53',
          width: '80%',
          margin: 15,
          padding: 10,
          height: '10%',
        }}>
        <Button
          title="Book Now"
          color="white"
          style={{backgroundColor: '#FF5B53'}}
          backgroundColor="#FF5B53"
          onPress={() => onPressBookNow()}
        />
      </View>
      <View
        style={{
          backgroundColor: '#FF5B53',
          width: '80%',
          margin: 15,
          padding: 10,
          height: '10%',
        }}>
        <Button
          title="Donate"
          backgroundColor="#FF5B53"
          style={{backgroundColor: '#FF5B53'}}
          color="#FF5B53"
          onPress={() => onPressDonate()}
        />
      </View>
      <View
        style={{
          backgroundColor: '#FF5B53',
          width: '80%',
          margin: 15,
          padding: 10,
          height: '10%',
        }}>
        <Button
          title="Newsletter"
          backgroundColor="#FF5B53"
          color="white"
          style={{backgroundColor: '#FF5B53'}}
          onPress={() => onPressNewsletter()}
        />
      </View>
      <View
        style={{
          backgroundColor: '#FF5B53',
          width: '80%',
          margin: 15,
          padding: 10,
          height: '10%',
        }}>
        <Button
          title="News"
          backgroundColor="#FF5B53"
          style={{backgroundColor: '#FF5B53'}}
          color="white"
          onPress={() => onPressNews()}
        />
      </View>
      <View
        style={{
          backgroundColor: '#FF5B53',
          width: '80%',
          margin: 15,
          padding: 10,
          height: '10%',
        }}>
        <Button
          title="Sponsors"
          color="white"
          backgroundColor="#FF5B53"
          style={{backgroundColor: '#FF5B53'}}
          onPress={() => onPressSponsorUs()}
        />
      </View>
    </View>
  );
}

export default RedLinksScreen;
