/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, Button, FlatList} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import WhatsOnDetails from '../components/WhatsOnDetails';
import WhatsOnList from '../components/WhatsOnList';

const WhatsOnStack = createStackNavigator();
function WhatsOnScreen({}) {
  return (
    <WhatsOnStack.Navigator>
      <WhatsOnStack.Screen
        name="WhatsOnList"
        component={WhatsOnList}
        options={{
          headerTitle: 'Whats On',
        }}
      />
      <WhatsOnStack.Screen
        name="WhatsOnDetails"
        component={WhatsOnDetails}
        options={({route}) => {
          return {
            headerTitle: `${route.params.contact.name} - ${route.params.contact.subName}`,
          };
        }}
      />
    </WhatsOnStack.Navigator>
  );
}

export default WhatsOnScreen;
