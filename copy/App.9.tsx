import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';

const Hello = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}: any) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 150,
  },
});

export default Hello;
