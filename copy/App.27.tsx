import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Text,
  useWindowDimensions,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

const images = new Array(6).fill(
  'https://images.unsplash.com/photo-1556740749-887f6717d7e4',
);

const AppComponent = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const {width: windowWidth} = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {x: scrollX},
              },
            },
          ])}
          scrollEventThrottle={1}>
          {images.map((image: any, imageIndex: number) => {
            return (
              <View
                style={[styles.container2, {width: windowWidth}]}
                key={imageIndex}>
                <ImageBackground source={{uri: image}} style={styles.card}>
                  <View style={styles.textContainer}>
                    <Text style={styles.infoText}>
                      {'Image - ' + imageIndex}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((image: any, imageIndex: number) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 24, 8],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, {width}]}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    // height: 400,
    // width: 400,
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    height: 250,
  },
});

export default AppComponent;
