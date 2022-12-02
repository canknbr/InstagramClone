import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import Stories from '../../components/Stories';
import Post from '../../components/Post';
import { users } from '../../assets/data/user.json';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Stories />
      <FlatList
        data={users}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default HomeScreen;
