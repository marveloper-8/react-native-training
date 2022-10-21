import React from 'react';
import {StyleSheet, Text} from 'react-native';

const AppComponent = () => {
  return (
    <Text style={styles.baseText}>
      I am bold
      <Text style={styles.innerText}> and red</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    marginTop: 50,
    fontWeight: 'bold',
  },
  innerText: {
    color: 'red',
  },
});

export default AppComponent;
