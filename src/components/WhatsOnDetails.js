import React from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity, ScrollView, Pressable } from 'react-native';

const offWhite = '#e2d8c6';
const greenBackgroundColor = '#1e965a';

export default ({ route, whatsOnDetails, onPress, navigation }) => {
  console.log('WhatsOnDetails, whatsOnDetails:' + whatsOnDetails);
  console.log('WhatsOnDetails, route.whatsOnDetails:' + route.params.whatsOnDetails);

  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.item}>
      <View>
        <Image source={route.params.whatsOnDetails.image} style={styles.image} />
      </View>
      <Text style={styles.title}>{route.params.whatsOnDetails.title}</Text>
      <Text style={styles.line2}>{route.params.whatsOnDetails.subTitle}</Text>
      <Text style={styles.description}>{route.params.whatsOnDetails.description}</Text>
      <View style={styles.backButtonView}>
        <Pressable onPress={() => onPressBack()}>
          <Text style={styles.backButton}>Back</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '70%',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  backButtonView: {
    alignItems: 'center',
    border: 0,
    borderRadius: 40,
    backgroundColor: greenBackgroundColor,
    fontSize: 28,
    margin: 5,
    padding: 3,
  },
  backButton: {
    color: offWhite,

    fontSize: 28,
  },
});

// export default WhatsOnDetails;
