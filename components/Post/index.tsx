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
    caption: string;
  };
}
const Post = ({ post }: IPropsPost) => {
  return (
    <View
      style={{
        marginVertical: 10,
      }}
    >
      <PostHeader url={post.image} name={post.name} />
      <PostContent image={post.image} />
      <PostFooter
        likes={post.id}
        caption={post.caption}
        username={post.name}
        date="2 days ago"
      />
    </View>
  );
};

export default Post;
