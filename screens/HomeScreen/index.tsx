import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Stories from '../../components/Stories';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Stories />
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default HomeScreen;
