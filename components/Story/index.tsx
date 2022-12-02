import { View, Text } from 'react-native';
import React from 'react';
import ProfilePicture from '../ProfilePicture';

const Story = ({ story }) => {
  return (
    <View>
      <ProfilePicture url={story.image} size={70} />
      <Text>{story.name}</Text>
    </View>
  );
};

export default Story;
