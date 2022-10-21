import {FC} from 'react';
import {Text} from 'react-native';

const ProfileScreen: FC<any> = ({route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default ProfileScreen;
