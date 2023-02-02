import React, { useEffect } from 'react';
import type { Node } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons/faCalendarAlt';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { faMap } from '@fortawesome/free-solid-svg-icons/faMap';
// import Menu from './components/Menu';

import HomeScreen from './screens/HomeScreen';
import MoreScreen from './screens/MoreScreen';
// import SignIn from './screens/SignIn';

// import MapList from './components/MapList';
import MapScreen from './screens/MapScreen';
import WhatsOnScreen from './screens/WhatsOnScreen';

import SplashScreen from 'react-native-splash-screen';

const greenBackgroundColor = '#1e965a';
const offWhite = '#e2d8c6';

const AppTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MapTopStack() {
  return (
    <View>
      {/* <Menu /> */}

      <Stack.Navigator initialRouteName="Sligo">
        <Stack.Screen
          name="Sligo"
          component={MapScreen}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              // fontFamily: 'Nunito_700Bold',
            },
            headerTitle: 'Sligo',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Bar"
          component={MapScreen}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              // fontFamily: 'Nunito_700Bold',
            },
            headerTitle: 'Bar',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Food"
          component={MapScreen}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              // fontFamily: 'Nunito_700Bold',
            },
            headerTitle: 'Food',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Monkeys"
          component={MapScreen}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              // fontFamily: 'Nunito_700Bold',
            },
            headerTitle: 'Monkeys',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </View>
  );
}
function AppBottomStack() {
  return (
    <AppTabs.Navigator
      style={styles.container}
      screenOptions={{
        cardStyle: {
          backgroundColor: 'black',
        },
        // headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <AppTabs.Screen
        name="Cairde Festival"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesomeIcon icon={faInfoCircle} size={24} color={offWhite} />,
          headerTitleStyle: {
            color: offWhite,
            fontSize: 26,
            fontFamily: 'Effra',
          },
          headerStyle: {
            backgroundColor: '#FF5B53',
          },
          tabBarItemStyle: {
            backgroundColor: '#FF5B53',
          },
          tabBarBadgeStyle: {
            backgroundColor: '#2196F3',
            color: '#BBBccc',
          },
        }}
      />
      <AppTabs.Screen
        name="What's On"
        component={WhatsOnScreen}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesomeIcon icon={faCalendarAlt} size={24} color={offWhite} />,
          headerTitleStyle: {
            color: offWhite,
            fontSize: 26,
            fontFamily: 'Effra',
          },
          headerStyle: {
            backgroundColor: '#FF5B53',
          },
          tabBarItemStyle: {
            backgroundColor: '#FF5B53',
          },
        }}
      />
      <AppTabs.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesomeIcon icon={faMap} size={24} color={offWhite} />,
          headerTitleStyle: {
            color: offWhite,
            fontSize: 26,
            fontFamily: 'Effra',
          },
          headerStyle: {
            backgroundColor: '#FF5B53',
          },
          tabBarItemStyle: {
            backgroundColor: '#FF5B53',
          },
          tabBarBadgeStyle: {
            backgroundColor: '#2196F3',
            color: '#BBBccc',
          },
        }}
      />
      <AppTabs.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesomeIcon icon={faEllipsis} size={24} color={offWhite} />,
          headerTitleStyle: {
            color: offWhite,
            fontSize: 26,
            fontFamily: 'Effra',
          },
          headerStyle: {
            backgroundColor: '#FF5B53',
          },
          tabBarItemStyle: {
            backgroundColor: '#FF5B53',
          },
          tabBarBadgeStyle: {
            backgroundColor: '#2196F3',
            color: '#BBBccc',
          },
        }}
      />
    </AppTabs.Navigator>
  );
}

const App: () => Node = () => {
  useEffect(() => {
    console.log('App:useEffect');
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <AppBottomStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    color: '#FFF',
    // fontFamily: 'Karla_300Light',
  },
});

export default App;
