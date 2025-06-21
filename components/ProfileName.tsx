import useProfileStore from "@/store/ProfileStore";
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


const ProfileName: React.FC = () => {
  const { name } = useProfileStore();
  return (
    <View>
      <Text>Nama saya adalah {name} </Text>
    </View>
  );
};

export default ProfileName;

const styles = StyleSheet.create({}); 