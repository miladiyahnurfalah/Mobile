import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import useProfileStore from "@/store/ProfileStore";

const ProfileImage: React.FC = () => {
  const { image } = useProfileStore();

  return (
    <View>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    // borderRadius: 50, // agar gambar bulat (opsional)
  },
});

// import useProfileStore from "@/store/ProfileStore";
// import React from 'react';
// import { Image, StyleSheet, View } from 'react-native';


// const ProfileImage: React.FC= () => {
//   return (
//     <View>
//       {/* <Image source={{ uri: image }} style={{ width: 100, height: 100}} /> */}
//     </View>
//   );
// };

// export default ProfileImage;

// const styles = StyleSheet.create({})