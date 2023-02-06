import { DrawerItem } from '@react-navigation/drawer';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const offWhite = '#e2d8c6';

export const Separator = () => <View style={styles.separator} />;

function MoreDetails({ route, moreDetails, navigation }) {
  console.log('MoreDetails, route.params.moreDetails:' + JSON.stringify(route.params.moreDetails));

  console.log('MoreDetails, route.params.moreDetails.qaList[0]:' + JSON.stringify(route.params.moreDetails.qaList[0]));
  return (
    <ScrollView style={{ backgroundColor: offWhite }}>
      {route.params.moreDetails.qaList.map((qaItem) => {
        return (
          <View style={{ margin: 10 }}>
            <Text>Question: {qaItem.question}</Text>
            <Text>Answer: {qaItem.answer}</Text>
            <Separator />
          </View>
        );
      })}
    </ScrollView>
  );
}

export default MoreDetails;

const styles = StyleSheet.create({
  separator: {
    backgroundColor: 'green',
    height: 1,
  },
});
