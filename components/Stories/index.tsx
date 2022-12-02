import { View, Text, FlatList } from 'react-native';
import React from 'react';
import Story from '../Story';
import { users } from '../../assets/data/user.json';
const Stories = () => {
  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={({ id }) => id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Story story={item} />}
      />
    </View>
  );
};

export default Stories;
