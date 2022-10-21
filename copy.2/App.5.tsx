import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const AppComponent = () => {
  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.tinyLogo}
        source={require('@expo/snack-static/react-native-logo.png')}
      /> */}
      <Image
        style={styles.largeImage}
        source={{
          uri: 'https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png/revision/latest/scale-to-width-down/300?cb=20170716092103',
        }}
        blurRadius={7}
      />
      <Image
        style={styles.tinyLogo}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      />
      <Image
        style={styles.stretch}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      />
      <Image
        style={styles.logo}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
  largeImage: {
    width: 200,
    height: 150,
  },
});

export default AppComponent;
