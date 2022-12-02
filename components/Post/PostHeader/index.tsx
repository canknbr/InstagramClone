import { View, Text } from 'react-native';
import React from 'react';
import ProfilePicture from '../../ProfilePicture';
import { Entypo } from '@expo/vector-icons';
interface IPropsPost {
  url: string;
}
const PostHeader = ({ url }: IPropsPost) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
      }}
    >
      <ProfilePicture url={url} size={55} />
      <Entypo
        name="dots-three-vertical"
        size={24}
        color="grey"
        style={{
          marginRight: 10,
        }}
      />
    </View>
  );
};

export default PostHeader;
