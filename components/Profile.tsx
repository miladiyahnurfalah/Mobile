import { StyleSheet, View } from 'react-native';
import React from 'react';
import ProfileImage from './ProfileImage';
import ProfileName from './ProfileName';

const Profile: React.FC = () => {
  return (
    <View >
      <ProfileImage />
      <ProfileName />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});

// import { StyleSheet, View } from 'react-native';
// import React from 'react';
// import ProfileImage from "./ProfileImage";
// import ProfileName from "./ProfileName";

// interface Props {
//     name: string;
// }

// const Profile: React.FC<Props> = ({ name }) => {
//   return (
//     <View>
//       <ProfileImage />
//       <ProfileName name={name} />
//     </View>
//   );
// };

// export default Profile;

// const styles = StyleSheet.create({})