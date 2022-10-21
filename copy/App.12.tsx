import React from 'react';
import {View, StyleSheet} from 'react-native';

const Flex = () => {
  return (
    <View style={[styles.container, styles.container2]}>
      <View style={styles.one} />
      <View style={styles.two} />
      <View style={styles.three} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    padding: 20,
  },
  container2: {
    flexDirection: 'column',
  },
  one: {
    flex: 1,
    backgroundColor: 'red',
  },
  two: {
    flex: 2,
    backgroundColor: 'darkorange',
  },
  three: {
    flex: 3,
    backgroundColor: 'green',
  },
});

export default Flex;
