import React, {FC, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const AppComponent = () => {
  const [flexWrap, setFlexWrap]: any = useState('wrap');

  return (
    <PreviewLayout
      label="flexWrap"
      values={['wrap', 'nowrap']}
      selectedValue={flexWrap}
      setSelectedValue={setFlexWrap}>
      <View style={[styles.box, styles.one]} />
      <View style={[styles.box, styles.two]} />
      <View style={[styles.box, styles.three]} />
      <View style={[styles.box, styles.four]} />
      <View style={[styles.box, styles.five]} />
      <View style={[styles.box, styles.six]} />
      <View style={[styles.box, styles.seven]} />
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
    flexWrap: 'wrap',
    marginTop: 8,
    backgroundColor: 'aliceblue',
    maxHeight: 200,
  },
  box: {
    width: 50,
    height: 80,
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
  one: {backgroundColor: 'orangered'},
  two: {backgroundColor: 'orange'},
  three: {backgroundColor: 'mediumseagreen'},
  four: {backgroundColor: 'deepskyblue'},
  five: {backgroundColor: 'mediumturquoise'},
  six: {backgroundColor: 'mediumslateblue'},
  seven: {backgroundColor: 'purple'},
});

export default AppComponent;
