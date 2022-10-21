import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, Animated, Text, Easing} from 'react-native';

const FadeInView = (props: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animated.timing(fadeAnim, {
    //   toValue: 1,
    //   duration: 10000,
    //   useNativeDriver: false,
    // }).start();
    Animated.timing(fadeAnim, {
      toValue: 100,
      easing: Easing.back(100),
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

const AppComponent = () => (
  <View style={styles.container}>
    <FadeInView style={styles.fadeInView}>
      <Text style={styles.text}>Fading in</Text>
    </FadeInView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fadeInView: {
    width: 250,
    height: 50,
    backgroundColor: 'powderblue',
  },
  text: {
    margin: 10,
    textAlign: 'center',
    fontSize: 28,
  },
});

export default AppComponent;
