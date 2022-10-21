import React from 'react';
import {StyleSheet, View, Button, Alert} from 'react-native';

const AppComponent = () => {
  const _onPressButton = () => Alert.alert('You tapped the button!');

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={() => _onPressButton()} title="Press Me" />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => _onPressButton()}
          title="Press Me"
          color="#841584"
        />
      </View>
      <View style={styles.alternativeLayoutButtonContainer}>
        <Button onPress={() => _onPressButton()} title="This looks great!" />
        <Button onPress={() => _onPressButton()} title="OK!" color="#841584" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default AppComponent;
