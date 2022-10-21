import React, {FC, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const AppComponent = () => {
  const [powderblue, setPowderblue] = useState({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
  });

  const [skyblue, setSkyblue] = useState({
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 100,
  });

  const [steelblue, setSteelblue] = useState({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 200,
  });

  return (
    <View style={styles.container}>
      <View style={[styles.container, styles.container2]}>
        <BoxInfo color="powderblue" {...powderblue} setStyle={setPowderblue} />
        <BoxInfo color="skyblue" {...skyblue} setStyle={setSkyblue} />
        <BoxInfo color="steelblue" {...steelblue} setStyle={setSteelblue} />
      </View>
      <View style={styles.previewContainer}>
        <View
          style={[
            styles.box,
            styles.one,
            {
              flexBasis: powderblue.flexBasis,
              flexGrow: powderblue.flexGrow,
              flexShrink: powderblue.flexShrink,
            },
          ]}
        />
        <View
          style={[
            styles.box,
            styles.two,
            {
              flexBasis: skyblue.flexBasis,
              flexGrow: skyblue.flexGrow,
              flexShrink: skyblue.flexShrink,
            },
          ]}
        />
        <View
          style={[
            styles.box,
            styles.three,
            {
              flexBasis: steelblue.flexBasis,
              flexGrow: steelblue.flexGrow,
              flexShrink: steelblue.flexShrink,
            },
          ]}
        />
      </View>
    </View>
  );
};

const BoxInfo: FC<any> = ({
  color,
  flexBasis,
  flexShrink,
  setStyle,
  flexGrow,
}) => (
  <View style={[styles.row, styles.row2]}>
    <View style={[styles.boxLabel, {backgroundColor: color}]}>
      <Text style={styles.text}>Box</Text>
    </View>
    <Text style={styles.label}>flexBasis</Text>
    <TextInput
      value={flexBasis}
      style={styles.input}
      onChangeText={(fB: any) =>
        setStyle((value: any) => ({
          ...value,
          flexBasis: isNaN(parseInt(fB)) ? 'auto' : parseInt(fB),
        }))
      }
    />
    <Text style={styles.label}>flexShrink</Text>
    <TextInput
      value={flexShrink}
      style={styles.input}
      onChangeText={(fS: any) =>
        setStyle((value: any) => ({
          ...value,
          flexShrink: isNaN(parseInt(fS)) ? '' : parseInt(fS),
        }))
      }
    />
    <Text style={styles.label}>flexGrow</Text>
    <TextInput
      value={flexGrow}
      style={styles.input}
      onChangeText={(fG: any) =>
        setStyle((value: any) => ({
          ...value,
          flexGrow: isNaN(parseInt(fG)) ? '' : parseInt(fG),
        }))
      }
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 50,
  },
  box: {
    flex: 1,
    height: 50,
    width: 50,
  },
  boxLabel: {
    minWidth: 80,
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  label: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '100',
  },
  previewContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'aliceblue',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    paddingVertical: 3,
    width: 50,
    textAlign: 'center',
  },
  row2: {
    flexDirection: 'column',
  },
  text: {
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
  },
  container2: {
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  one: {backgroundColor: 'powderblue'},
  two: {backgroundColor: 'skyblue'},
  three: {backgroundColor: 'steelblue'},
});

export default AppComponent;
