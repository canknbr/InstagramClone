import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
interface IProfilePictureProps {
  url: string;
  size?: number;
}
const ProfilePicture = ({ url, size = 70 }: IProfilePictureProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: size + 10,
          height: size + 10,
        },
      ]}
    >
      <Image
        source={{
          uri: url,
        }}
        style={[
          styles.image,
          {
            width: size + 5,
            height: size + 5,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#ae22e0',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  image: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
});
export default ProfilePicture;
