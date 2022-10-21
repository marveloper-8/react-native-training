import React, {useState} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';

const AppComponent = () => {
  const [count, setCount] = useState(1);
  return (
    <View style={styles.baseText}>
      <Text onLongPress={() => Alert.alert('long press')}>
        <Text>First part and </Text>
        <Text>second part</Text>
      </Text>
      <View
        // onMoveShouldSetResponder={() => Alert.alert('Hello')}
        onResponderGrant={() => Alert.alert('hi')}
        onResponderMove={() => setCount(count + 1)}>
        <Text>First part and </Text>
        <Text>second part</Text>
      </View>
      <Text allowFontScaling numberOfLines={1}>
        On iOS, these roles map to corresponding Accessibility Traits. Image
        button has the same functionality as if the trait was set to both
        'image' and 'button'. See the Accessibility guide for more information.
      </Text>
      <Text style={styles.big}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    marginTop: 50,
  },
  innerText: {
    color: 'red',
  },
  big: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AppComponent;
