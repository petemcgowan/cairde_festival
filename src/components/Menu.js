import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Image } from 'react-native';

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() =>
          navigation.navigate('Stages', {
            userCategoryChoice: 'stages',
          })
        }
      >
        <Text>Stages</Text>
        <Image
          style={styles.iconStyle}
          source={{
            uri: 'https://img.icons8.com/stickers/90/000000/training.png',
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() =>
          navigation.navigate('Bar', {
            userCategoryChoice: 'bar',
          })
        }
      >
        <Text>Bars</Text>
        <Image
          style={styles.iconStyle}
          source={{
            uri: 'https://img.icons8.com/stickers/100/000000/conference.png',
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() =>
          navigation.navigate('Food', {
            userCategoryChoice: 'food',
          })
        }
      >
        <Text>Food</Text>
        <Image
          style={styles.iconStyle}
          source={{
            uri: 'https://img.icons8.com/stickers/100/000000/about.png',
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() =>
          navigation.navigate('Art', {
            userCategoryChoice: 'art',
          })
        }
      >
        <Text>Art</Text>
        <Image
          style={styles.iconStyle}
          source={{
            uri: 'https://img.icons8.com/stickers/100/000000/phone-office.png',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textStyle: {
    textTransform: 'uppercase',
  },
  iconStyle: {
    width: '100%',
    height: 50,
    aspectRatio: 1,
  },
});

export default Menu;
