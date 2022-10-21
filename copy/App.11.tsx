import React from 'react';
import {View, StyleSheet} from 'react-native';

const FixedDimesnionBasics = () => {
  return (
    // <View style={styles.container}>
    //   <View style={styles.container1} />
    //   <View style={styles.container2} />
    //   <View style={styles.container3} />
    // </View>
    // <View style={styles.container0}>
    //   <View style={styles.container11} />
    //   <View style={styles.container21} />
    //   <View style={styles.container31} />
    // </View>
    <View style={styles.container00}>
      <View style={styles.container111} />
      <View style={styles.container211} />
      <View style={styles.container311} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  container1: {
    width: 50,
    height: 50,
    backgroundColor: 'powderblue',
  },
  container2: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
  },
  container3: {
    width: 150,
    height: 150,
    backgroundColor: 'steelblue',
  },
  container0: {
    marginTop: 50,
    flex: 1,
  },
  container11: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  container21: {
    flex: 2,
    backgroundColor: 'skyblue',
  },
  container31: {
    flex: 3,
    backgroundColor: 'steelblue',
  },
  container00: {
    marginTop: 50,
    height: '100%',
  },
  container111: {
    height: '15%',
    backgroundColor: 'powderblue',
  },
  container211: {
    width: '66%',
    height: '35%',
    backgroundColor: 'skyblue',
  },
  container311: {
    width: '33%',
    height: '50%',
    backgroundColor: 'steelblue',
  },
});

export default FixedDimesnionBasics;
