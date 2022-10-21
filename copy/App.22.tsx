import React, {FC, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const AppComponent = () => {
  const [position, setPosition]: any = useState('relative');

  return (
    <PreviewLayout
      label="position"
      values={['relative', 'absolute']}
      selectedValue={position}
      setSelectedValue={setPosition}>
      <View style={[styles.box, styles.one, {position}]} />
      <View style={[styles.box, styles.two, {position}]} />
      <View style={[styles.box, styles.three, {position}]} />
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
    <View style={styles.container}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  previewContainer: {
    marginTop: 50,
    padding: 10,
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
    minHeight: 200,
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
  one: {
    backgroundColor: 'powderblue',
    top: 25,
    left: 25,
  },
  two: {
    backgroundColor: 'skyblue',
    top: 50,
    left: 50,
  },
  three: {
    backgroundColor: 'steelblue',
    top: 75,
    left: 75,
  },
});

export default AppComponent;
