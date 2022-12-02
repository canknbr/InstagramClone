import { View, Text } from 'react-native';
import React from 'react';
import ProfilePicture from '../ProfilePicture';
interface IPropsStory {
  story: {
    id: number;
    name: string;
    image: string;
  };
}
const Story = ({ story }: IPropsStory) => {
  return (
    <View
      style={{
        alignItems: 'center',
        marginHorizontal: 3,
      }}
    >
      <ProfilePicture url={story.image} size={70} />
      <Text
        style={{
          color: 'white',
          marginTop: 6,
        }}
      >
        {story.name}
      </Text>
    </View>
  );
};

export default Story;
