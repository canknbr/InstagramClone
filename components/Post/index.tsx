import { View, Text } from 'react-native';
import React from 'react';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostFooter from './PostFooter';
interface IPropsPost {
  post: {
    id: number;
    image: string;
    name: string;
  };
}
const Post = ({ post }: IPropsPost) => {
  return (
    <View
      style={{
        marginVertical: 10,
      }}
    >
      <PostHeader url={post.image} />
      <PostContent image={post.image} />
      <PostFooter />
    </View>
  );
};

export default Post;
