import React from 'react';
import {
  StyleSheet,
  View,
  Alert,
  TouchableHighlight,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

const AppComponent = () => {
  const _onPressButton = () => Alert.alert('You tapped the button!');
  const _onLongPressButton = () => Alert.alert('You long-pressed the button!');

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => _onPressButton()}
        underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableHighlight</Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity onPress={() => _onPressButton()}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableOpacity</Text>
        </View>
      </TouchableOpacity>
      <TouchableNativeFeedback
        onPress={() => _onPressButton()}
        background={
          Platform.OS === 'android'
            ? TouchableNativeFeedback.SelectableBackground()
            : ''
        }>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            TouchableNativeFeedback{' '}
            {Platform.OS !== 'android' ? '(Android only)' : ''}
          </Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableWithoutFeedback onPress={() => _onPressButton()}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableHighlight
        onPress={() => _onPressButton()}
        onLongPress={() => _onLongPressButton()}
        underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>Touchable with Long Press</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
});

export default AppComponent;
