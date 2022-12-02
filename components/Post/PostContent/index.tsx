import { View, Text, Image } from 'react-native';
import React from 'react';
interface IImageProps {
  image: string;
}
const PostContent = ({ image }: IImageProps) => {
  return (
    <View>
      <Image
        source={{ uri: image }}
        style={{ width: '100%', aspectRatio: 1 / 1.2, resizeMode: 'cover' }}
      />
    </View>
  );
};

export default PostContent;
