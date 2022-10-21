import React, {FC, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const AppComponent = () => {
  const [direction, setDirection] = useState('ltr');

  return (
    <PreviewLayout
      label="direction"
      values={['ltr', 'rtl']}
      selectedValue={direction}
      setSelectedValue={setDirection}>
      <View style={[styles.box, styles.one]} />
      <View style={[styles.box, styles.two]} />
      <View style={[styles.box, styles.three]} />
    </PreviewLayout>
  );
};

const PreviewLayout: FC<any> = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={styles.previewContainer}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value: any) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  previewContainer: {
    padding: 10,
    flex: 1,
    marginTop: 50,
  },
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
  one: {backgroundColor: 'powderblue'},
  two: {backgroundColor: 'skyblue'},
  three: {backgroundColor: 'steelblue'},
});

export default AppComponent;
