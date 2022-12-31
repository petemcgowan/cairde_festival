import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

function LocationsScreen({navigation}) {
  return (
    <View style={styles.containerStyle}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 54.26893667265477,
          longitude: -8.477183620237989,
          latitudeDelta: 0.2922,
          longitudeDelta: 0.2421,
        }}>
        <Marker
          key={1}
          coordinate={{
            latitude: 54.273920829148175,
            longitude: -8.477752671165007,
          }}
          title="The Factory"
          description="Performing arts theater"
        />
        <Marker
          key={2}
          coordinate={{
            latitude: 54.30545521345939,
            longitude: -8.564192261359873,
          }}
          title="Rosses Point"
        />
        <Marker
          key={3}
          coordinate={{
            latitude: 54.26952236871217,
            longitude: -8.477210055825038,
          }}
          title="Peace Park"
          description="Beautiful wooded area"
        />
        <Marker
          key={4}
          coordinate={{
            latitude: 54.26898366343254,
            longitude: -8.477167526990044,
          }}
          title="Hawk's Well Theatre"
          description="Performing arts theater"
        />
        <Marker
          key={5}
          coordinate={{
            latitude: 54.27200399967741,
            longitude: -8.47061388466003,
          }}
          title="Andersons Grill & Bar"
          description="Gastropub"
        />
        <Marker
          key={6}
          coordinate={{
            latitude: 54.27227036382098,
            longitude: -8.474996475331592,
          }}
          title="Hyde Bridge Gallery"
          description="Art gallery"
        />
        <Marker
          key={7}
          coordinate={{
            latitude: 54.26893667265477,
            longitude: -8.477183620237989,
          }}
          title="The Model"
          description="Art gallery"
        />
        <Marker
          key={8}
          coordinate={{
            latitude: 54.46691979148877,
            longitude: -8.45018320874362,
          }}
          title="Mullaghmore Schoolhouse"
          description="Small performance area"
        />
        <Marker
          key={9}
          coordinate={{
            latitude: 54.28475654775053,
            longitude: -8.478899457374844,
          }}
          title="The Nest (Branching Out Art CLG)"
          description="Art center"
        />
        <Marker
          key={10}
          coordinate={{
            latitude: 54.129379632905575,
            longitude: -8.398742369364895,
          }}
          title="Sligo Folk Park"
          description="Tourist attraction"
        />
        <Marker
          key={11}
          coordinate={{
            latitude: 54.239778037416556,
            longitude: -8.678581811650076,
          }}
          title="Skreen Dromard Community Preschool"
          description="Preschool"
        />
        <Marker
          key={12}
          coordinate={{
            latitude: 54.31597056597146,
            longitude: -8.479376142330016,
          }}
          title="Rathcormack National School"
          description="School"
        />
        <Marker
          key={13}
          coordinate={{
            latitude: 54.27227106896176,
            longitude: -8.474927144174961,
          }}
          title="The Yeat’s Building"
          description="Tourist attraction"
        />
        <Marker
          key={14}
          coordinate={{
            latitude: 54.2788940507563,
            longitude: -8.598945486548898,
          }}
          title="Sligo Airport"
          description="Airport"
        />
        <Marker
          key={15}
          coordinate={{
            latitude: 54.27293212656219,
            longitude: -8.47385135582504,
          }}
          title="Thomas Connolly Bar"
          description="Heritage building"
        />
        <Marker
          key={16}
          coordinate={{
            latitude: 54.27066549719921,
            longitude: -8.472949659404014,
          }}
          title="Hamilton Gallery"
          description="Art Gallery"
        />
        <Marker
          key={17}
          coordinate={{
            latitude: 54.11474657960274,
            longitude: -8.461925757555013,
          }}
          title="Juniper Barn"
          description="Event venue"
        />
        <Marker
          key={18}
          coordinate={{
            latitude: 54.2688600858389,
            longitude: -8.513792872894859,
          }}
          title="Woodville Farm"
          description="Building"
        />
        <Marker
          key={19}
          coordinate={{
            latitude: 54.27107315703048,
            longitude: -8.584187330567573,
          }}
          title="Dolly's Cottage"
          description="Strandhill"
        />
        <Marker
          key={20}
          coordinate={{
            latitude: 54.28405901385842,
            longitude: -8.550171589897188,
          }}
          title="Cummeen Strand"
          description="Wetland"
        />
      </MapView>
    </View>
  );
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },

  mapStyle: {
    left: 20,
    right: 0,
    width: '90%',
    height: '90%',
    top: 20,
    bottom: 0,
    position: 'absolute',
  },
};

export default LocationsScreen;
