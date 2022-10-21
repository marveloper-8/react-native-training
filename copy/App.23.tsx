import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';

const AppComponent = () => {
  const [active, setActive] = useState(true);

  const buttonLabel = active ? 'Active' : 'Inactive';
  const icon = active
    ? require('../resources/images/icon-light.png')
    : require('../resources/images/icon-dark.png');

  return (
    <ScrollView>
      <ImageBackground
        source={{uri: 'http://wallpaperset.com/w/full/a/8/4/38610.jpg'}}
        style={styles.background}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setActive(!active)}>
          <Text style={styles.buttonLabel}>{buttonLabel}</Text>
        </TouchableOpacity>
        <Image source={icon} style={styles.image} />
        <Image
          source={{
            uri: 'https://reactjs.org/logo-og.png',
            cache: 'only-if-cached',
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: 'https://reactjs.org/logo-og.png',
            method: 'POST',
            headers: {
              Pragma: 'no-cache',
            },
            body: 'Your Body goes here',
          }}
          style={styles.image}
        />
        <Image
          style={styles.image2}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orangered',
    padding: 10,
    width: 150,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 50,
  },
  buttonLabel: {
    textAlign: 'center',
    color: 'white',
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginTop: 10,
  },
  image2: {
    width: 51,
    height: 51,
    resizeMode: 'contain',
  },
  background: {
    width: '100%',
    height: '100%',
  },
});

export default AppComponent;
