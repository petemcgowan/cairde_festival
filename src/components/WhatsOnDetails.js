import React from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';

export default ({ route, whatsOnDetails, onPress }) => {
  console.log('WhatsOnDetails, whatsOnDetails:' + whatsOnDetails);
  console.log('WhatsOnDetails, route.whatsOnDetails:' + route.params.whatsOnDetails);
  return (
    <ScrollView style={styles.item}>
      <View>
        <Image source={route.params.whatsOnDetails.image} style={styles.image} />
      </View>
      <Text style={styles.title}>{route.params.whatsOnDetails.title}</Text>
      <Text style={styles.line2}>{route.params.whatsOnDetails.subTitle}</Text>
      <Text style={styles.description}>{route.params.whatsOnDetails.description}</Text>
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
});

// export default WhatsOnDetails;
