import {FC} from 'react';
import {Button} from 'react-native';

const HomeScreen: FC<any> = ({navigation}) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
    />
  );
};

export default HomeScreen;
