import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default ({route, contact, onPress}) => {
  // const contactInfo = route.params.contact;
  console.log('WhatsOnDetails, contact:' + contact);
  console.log('WhatsOnDetails, route.contact:' + route.params.contact);
  return (
    <ScrollView style={styles.item}>
      <View>
        <Image source={route.params.contact.image} style={styles.image} />
      </View>
      <Text style={styles.title}>{route.params.contact.title}</Text>
      <Text style={styles.line2}>{route.params.contact.subTitle}</Text>
      <Text style={styles.description}>{route.params.contact.description}</Text>
    </ScrollView>
  );
};

// function WhatsOnDetails({route, onPress}) {
//   const item = route.params.contact;
//   return (
//     <TouchableOpacity onPress={onPress} style={styles.container}>
//       <View style={styles.item}>
//         <Text style={styles.title}>{item.image}</Text>
//         <Text style={styles.title}>{item.title}</Text>
//         <Text style={styles.line2}>{item.subTitle}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// }

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
