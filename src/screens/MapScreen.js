/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MapDetails from '../components/MapDetails';
import MapList from '../components/MapList';
// import Menu from '../components/Menu';

const { width, height } = Dimensions.get('window');

const MapStack = createStackNavigator();

function MapScreen({}) {
  console.log('MapScreen enter');

  return (
    <MapStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MapStack.Screen
        name="MapList"
        component={MapList}
        style={styles.pageContainer}
        options={{
          headerTitle: 'Map',
        }}
      />
      <MapStack.Screen
        name="MapDetails"
        component={MapDetails}
        options={({ route }) => {
          return {
            headerTitle: `${route.params.mapDetails.name} - ${route.params.mapDetails.subName}`,
          };
        }}
      />
    </MapStack.Navigator>
  );
}

export default MapScreen;

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: '#e2d8c6',
    width: width,
    height: height,

    // color: '#FFF',
    // fontFamily: 'Karla_300Light',
  },
});
