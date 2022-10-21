import React, {FC, useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';

const AppComponent = () => {
  const [widthType, setWidthType] = useState('auto');
  const [heightType, setHeightType] = useState('auto');

  return (
    <PreviewLayout
      widthType={widthType}
      heightType={heightType}
      widthValues={['auto', 300, '80%']}
      heightValues={['auto', 200, '60%']}
      setWidthType={setWidthType}
      setHeightType={setHeightType}>
      <View style={[styles.container1, {height: heightType, width: widthType}]}>
        <View style={[styles.box, styles.one]} />
        <View style={[styles.box, styles.two]} />
        <View style={[styles.box, styles.three]} />
      </View>
    </PreviewLayout>
  );
};

const PreviewLayout: FC<any> = ({
  children,
  widthType,
  heightType,
  widthValues,
  heightValues,
  setWidthType,
  setHeightType,
}) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.row}>
      <Text style={styles.label}>width </Text>
      {widthValues.map((value: any) => (
        <TouchableOpacity
          key={value}
          onPress={() => setWidthType(value)}
          style={[styles.button, widthType === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              widthType === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>height </Text>
      {heightValues.map((value: any) => (
        <TouchableOpacity
          key={value}
          onPress={() => setHeightType(value)}
          style={[styles.button, heightType === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              heightType === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    {children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 50,
  },
  container1: {
    alignSelf: 'flex-start',
    backgroundColor: 'aliceblue',
    padding: 15,
  },
  box: {
    height: 50,
    width: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginRight: 10,
    marginBottom: 10,
  },
  selected: {
    backgroundColor: 'coral',
    shadowOpacity: 0,
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
