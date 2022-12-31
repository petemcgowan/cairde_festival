/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons/faCalendarAlt';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';
import AboutUsScreen from './screens/AboutUsScreen';
import RedLinksScreen from './screens/RedLinksScreen';
import LocationsScreen from './screens/LocationsScreen';
import WhatsOnScreen from './screens/WhatsOnScreen';
import {
  faDrum,
  faInfo,
  faInfoCircle,
  faMapPin,
} from '@fortawesome/free-solid-svg-icons';
import SplashScreen from 'react-native-splash-screen';

// const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

// const Drawer = createDrawerNavigator();
// function AppDrawerStack() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="NewsScreen" component={WhatsOnScreen} />
//       <Drawer.Screen name="LocationsScreen" component={LocationsScreen} />
//       <Drawer.Screen name="RedLinksScreen" component={RedLinksScreen} />
//       <Drawer.Screen name="AboutUsScreen" component={AboutUsScreen} />
//       <Drawer.Screen name="AppBottomStack" component={AppBottomStack} />
//     </Drawer.Navigator>
//   );
// }

const AppTabs = createBottomTabNavigator();
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
      }}>
      <AppTabs.Screen
        name="What's On"
        component={WhatsOnScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faCalendarAlt} size={24} color="white" />
          ),
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#FF5B53',
          },
          tabBarItemStyle: {
            // backgroundColor: '#1b1344',
            backgroundColor: '#FF5B53',
          },
        }}
      />
      <AppTabs.Screen
        name="Event Locations"
        component={LocationsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faMapPin} size={24} color="white" />
          ),
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#FF5B53',
          },
          tabBarItemStyle: {
            // backgroundColor: '#1b1344',
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
        component={RedLinksScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faStar} size={24} color="white" />
          ),
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#FF5B53',
          },
          tabBarItemStyle: {
            // backgroundColor: '#1b1344',
            backgroundColor: '#FF5B53',
          },
          tabBarBadgeStyle: {
            backgroundColor: '#2196F3',
            color: '#BBBccc',
          },
        }}
      />
      <AppTabs.Screen
        name="About Us"
        component={AboutUsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faInfoCircle} size={24} color="white" />
          ),
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#FF5B53',
          },
          tabBarItemStyle: {
            // backgroundColor: '#1b1344',
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
      {/* <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={AppBottomStack} />
        <Drawer.Screen name="ButtonTabsTest" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    color: '#FFF',
    fontFamily: 'Karla_300Light',
  },
});

export default App;

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
//  * LTI update could not be added via codemod */
// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
