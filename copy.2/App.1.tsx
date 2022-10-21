import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const AppComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.one} />
      <View style={styles.two} />
      <Text>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: 'row',
    height: 100,
    padding: 20,
  },
  one: {
    flex: 0.3,
    backgroundColor: 'blue',
  },
  two: {
    flex: 0.5,
    backgroundColor: 'red',
  },
});

export default AppComponent;
