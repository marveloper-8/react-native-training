import React from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const AppComponent = () => {
  return (
    <View style={styles.container}>
      <View accessible={true}>
        <Text>text one</Text>
        <Text>text two</Text>
      </View>
      <TouchableOpacity
        accessible={true}
        accessibilityLabel="Tap me!"
        onPress={() => Alert.alert('Hello')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Press me!</Text>
        </View>
      </TouchableOpacity>
      <Text nativeID="formLabel">Label for Input Field</Text>
      <TextInput
        accessibilityLabel="input"
        accessibilityLabelledBy="formLabel"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 200,
    width: 200,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AppComponent;
