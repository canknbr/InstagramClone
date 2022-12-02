import { View, Text } from 'react-native';
import React from 'react';
import { Feather, Ionicons } from '@expo/vector-icons';
interface IPropsPostFooter {
  likes: number;
  caption: string;
  username: string;
  date: string;
}
const PostFooter = ({ likes, username, caption, date }: IPropsPostFooter) => {
  return (
    <View
      style={{
        padding: 10,

      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <Feather
          name="heart"
          size={24}
          color="white"
          style={{
            marginRight: 10,
          }}
        />
        <Ionicons
          name="chatbubble-outline"
          size={24}
          color="white"
          style={{
            marginRight: 10,
          }}
        />
        <Feather
          name="send"
          size={24}
          color="white"
          style={{
            marginRight: 10,
          }}
        />
        <Feather
          name="bookmark"
          size={24}
          color="white"
          style={{ marginHorizontal: 10, marginLeft: 'auto' }}
        />
      </View>
      <Text style={{ color: 'white' }}>{likes} likes</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}> {username} </Text>
        <Text style={{ color: 'white', fontSize: 14 }}> {caption} </Text>
      </View>
      <Text style={{ color: 'grey' }}>{date}</Text>
    </View>
  );
};

export default PostFooter;
