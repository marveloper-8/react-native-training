import React from 'react';
import {Text, Platform, View, SectionList, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'green',
      },
      default: {
        backgroundColor: 'blue',
      },
    }),
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247, 247, 247, 1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: Platform.OS === 'ios' ? 77 : 44,
  },
});

const SectionListBasics = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {
            title: 'D',
            data: ['Devin', 'Dan', 'Dominic'],
          },
          {
            title: 'J',
            data: [
              'Jackson',
              'James',
              'Jillian',
              'Jimmy',
              'Joel',
              'John',
              'Julie',
            ],
          },
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item: any) => `basicListEntry-${item.title}`}
      />
    </View>
  );
};

export default SectionListBasics;
