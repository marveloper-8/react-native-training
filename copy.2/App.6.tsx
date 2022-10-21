/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, TextInput, SafeAreaView, View} from 'react-native';

const UselessTextInput = (props: any) => {
  return <TextInput {...props} editable maxLength={40} />;
};

const AppComponent = () => {
  const [text, onChangeText] = useState('Useless Text');
  const [number, onChangeNumber]: any = useState(null);
  const [value, onChangeValue] = useState('Useless Multiline Placeholder');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        blurOnSubmit
        dataDetectorTypes={'all'}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
        autoFocus
        dataDetectorTypes={['phoneNumber', 'link', 'address', 'calendarEvent']}
      />
      <View
        style={{
          borderBottomColor: '#000000',
          borderBottomWidth: 1,
          backgroundColor: value,
        }}>
        <UselessTextInput
          multiline
          editable
          maxLength={40}
          numberOfLines={4}
          caretHidden
          clearTextOnFocus
          contextMenuHidden
          dataDetectorTypes={'none'}
          onChangeText={onChangeValue}
          value={value}
          style={styles.input2}
          enablesReturnKeyAutomatically
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textArea: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  input2: {padding: 10},
});

export default AppComponent;
