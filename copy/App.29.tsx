import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  NativeModules,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const AppComponent = () => {
  const [state, setState] = useState({
    w: 100,
    h: 100,
  });

  const _onPress = () => {
    LayoutAnimation.spring();
    setState({
      w: state.w + 15,
      h: state.h + 15,
    });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.box, {width: state.w, height: state.h}]} />
      <TouchableOpacity onPress={() => _onPress()}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Press me!</Text>
        </View>
      </TouchableOpacity>
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
