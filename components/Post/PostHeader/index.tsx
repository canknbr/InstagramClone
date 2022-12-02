import { View, Text } from 'react-native';
import React from 'react';
import ProfilePicture from '../../ProfilePicture';
import { Entypo } from '@expo/vector-icons';
interface IPropsPost {
  url: string;
  name: string;
}
const PostHeader = ({ url, name }: IPropsPost) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <ProfilePicture url={url} size={55} />
        <Text style={{ color: 'white', marginLeft: 6 }}>{name}</Text>
      </View>
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
