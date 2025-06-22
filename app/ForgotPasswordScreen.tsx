import { useAuthStore } from '@/store/AuthStore';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userFound, setUserFound] = useState(false);

  const users = useAuthStore((state) => state.users);
  const updatePassword = useAuthStore((state) => state.updatePassword);
  const logout = useAuthStore((state) => state.logout);

  const handleCheckUsername = () => {
    const userExists = users.find((u) => u.username === username.trim());
    if (userExists) {
      setUserFound(true);
    } else {
      Alert.alert('Error', 'Username not found!');
    }
  };

  const handleResetPassword = async () => {
    if (!newPassword || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all password fields!');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }

    const success = await updatePassword(username.trim(), newPassword);
    if (success) {
      Alert.alert('Success', 'Password has been reset!');
      logout(); // pastikan status login direset agar tidak langsung ke produk
      router.replace('/'); // kembali ke halaman login
    } else {
      Alert.alert('Error', 'Failed to reset password!');
    }
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>
        {userFound
          ? 'Set your new password'
          : 'Enter your username to reset your password'}
      </Text>

      <View style={styles.formContainer}>
        {!userFound ? (
          <>
            <TextInput
              placeholder="Username"
              placeholderTextColor="#6b7280"
              value={username}
              onChangeText={setUsername}
              style={styles.input}
              autoCapitalize="none"
            />
            <TouchableOpacity style={styles.button} onPress={handleCheckUsername}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TextInput
              placeholder="New Password"
              placeholderTextColor="#6b7280"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
              style={styles.input}
            />
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#6b7280"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
              <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      <TouchableOpacity onPress={() => {
        logout(); // untuk pastikan tidak langsung ke produk
        router.replace('/');
      }} style={styles.backLink}>
        <Text style={styles.backLinkText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 24,
  },
  formContainer: {
    width: '80%',
    maxWidth: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
    backgroundColor: '#eef2ff',
    color: '#111827',
    width: '100%',
  },
  button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  backLink: {
    marginTop: 24,
    alignItems: 'center',
  },
  backLinkText: {
    color: '#3b82f6',
    fontSize: 14,
  },
});












// ini sudah benar
// import { useAuthStore } from '@/store/AuthStore'; // sesuaikan path jika perlu
// import { useRouter } from 'expo-router';
// import { useState } from 'react';
// import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// export default function ForgotPasswordScreen() {
//   const router = useRouter();
//   const [username, setUsername] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [userFound, setUserFound] = useState(false);

//   const users = useAuthStore((state) => state.registeredUsers);
//   const updatePassword = useAuthStore((state) => state.updatePassword);

//   const handleCheckUsername = () => {
//     const userExists = users.find((u) => u.username === username);

//     if (userExists) {
//       setUserFound(true);
//     } else {
//       Alert.alert('Error', 'Username not found!');
//     }
//   };

//   const handleResetPassword = () => {
//     if (!newPassword || !confirmPassword) {
//       Alert.alert('Error', 'Please fill in all password fields!');
//       return;
//     }

//     if (newPassword !== confirmPassword) {
//       Alert.alert('Error', 'Passwords do not match!');
//       return;
//     }

//     updatePassword(username, newPassword);
//     Alert.alert('Success', 'Password has been reset!');
//     router.push('/');
//   };

//   return (
//     <View style={styles.screen}>
//       <Text style={styles.title}>Forgot Password</Text>
//       <Text style={styles.subtitle}>
//         {userFound
//           ? 'Set your new password'
//           : 'Enter your username to reset your password'}
//       </Text>

//       <View style={styles.formContainer}>
//         {!userFound ? (
//           <>
//             <TextInput
//               placeholder="Username"
//               placeholderTextColor="#6b7280"
//               value={username}
//               onChangeText={setUsername}
//               style={styles.input}
//             />
//             <TouchableOpacity style={styles.button} onPress={handleCheckUsername}>
//               <Text style={styles.buttonText}>Next</Text>
//             </TouchableOpacity>
//           </>
//         ) : (
//           <>
//             <TextInput
//               placeholder="New Password"
//               placeholderTextColor="#6b7280"
//               value={newPassword}
//               onChangeText={setNewPassword}
//               secureTextEntry
//               style={styles.input}
//             />
//             <TextInput
//               placeholder="Confirm Password"
//               placeholderTextColor="#6b7280"
//               value={confirmPassword}
//               onChangeText={setConfirmPassword}
//               secureTextEntry
//               style={styles.input}
//             />
//             <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
//               <Text style={styles.buttonText}>Reset Password</Text>
//             </TouchableOpacity>
//           </>
//         )}
//       </View>

//       <TouchableOpacity onPress={() => router.back()} style={styles.backLink}>
//         <Text style={styles.backLinkText}>Back to Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 24,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 8,
//     color: '#111827',
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#6b7280',
//     textAlign: 'center',
//     marginBottom: 24,
//   },
//   formContainer: {
//     width: '80%',
//     maxWidth: 400,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 12,
//     padding: 14,
//     marginBottom: 16,
//     backgroundColor: '#eef2ff',
//     color: '#111827',
//     width: '100%',
//   },
//   button: {
//     backgroundColor: '#3b82f6',
//     paddingVertical: 14,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginTop: 8,
//     width: '100%',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   backLink: {
//     marginTop: 24,
//     alignItems: 'center',
//   },
//   backLinkText: {
//     color: '#3b82f6',
//     fontSize: 14,
//   },
// });




// import { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { useRouter } from 'expo-router';
// import { dummyUsers } from './index';

// export default function ForgotPasswordScreen() {
//   const router = useRouter();
//   const [username, setUsername] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [userFound, setUserFound] = useState(false);

//   const handleCheckUsername = () => {
//     const userExists = dummyUsers.find(u => u.username === username);

//     if (userExists) {
//       setUserFound(true);
//     } else {
//       Alert.alert('Error', 'Username not found!');
//     }
//   };

//   const handleResetPassword = () => {
//     if (newPassword !== confirmPassword) {
//       Alert.alert('Error', 'Passwords do not match!');
//       return;
//     }

//     const userIndex = dummyUsers.findIndex(u => u.username === username);
//     if (userIndex !== -1) {
//       dummyUsers[userIndex].password = newPassword;
//       Alert.alert('Success', 'Password has been reset!');
//       router.push('/');
//     } else {
//       Alert.alert('Error', 'Unexpected error occurred!');
//     }
//   };

//   return (
//     <View style={styles.screen}>
//       <Text style={styles.title}>Forgot Password</Text>
//       <Text style={styles.subtitle}>
//         {userFound ? 'Set your new password' : 'Enter your username to reset your password'}
//       </Text>

//       <View style={styles.formContainer}>
//         {!userFound ? (
//           <>
//             <TextInput
//               placeholder="Username"
//               placeholderTextColor="#6b7280"
//               value={username}
//               onChangeText={setUsername}
//               style={styles.input}
//             />
//             <TouchableOpacity style={styles.button} onPress={handleCheckUsername}>
//               <Text style={styles.buttonText}>Next</Text>
//             </TouchableOpacity>
//           </>
//         ) : (
//           <>
//             <TextInput
//               placeholder="New Password"
//               placeholderTextColor="#6b7280"
//               value={newPassword}
//               onChangeText={setNewPassword}
//               secureTextEntry
//               style={styles.input}
//             />
//             <TextInput
//               placeholder="Confirm Password"
//               placeholderTextColor="#6b7280"
//               value={confirmPassword}
//               onChangeText={setConfirmPassword}
//               secureTextEntry
//               style={styles.input}
//             />
//             <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
//               <Text style={styles.buttonText}>Reset Password</Text>
//             </TouchableOpacity>
//           </>
//         )}
//       </View>

//       <TouchableOpacity onPress={() => router.back()} style={styles.backLink}>
//         <Text style={styles.backLinkText}>Back to Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     justifyContent: 'center', 
//     alignItems: 'center', 
//     padding: 24,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 8,
//     color: '#111827',
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#6b7280',
//     textAlign: 'center',
//     marginBottom: 24,
//   },
//   formContainer: {
//     width: '80%', 
//     maxWidth: 400,
//     alignItems: 'center', 
//     justifyContent: 'center', 
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 12,
//     padding: 14,
//     marginBottom: 16,
//     backgroundColor: '#eef2ff',
//     color: '#111827',
//     width: '100%', 
//   },
//   button: {
//     backgroundColor: '#3b82f6',
//     paddingVertical: 14,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginTop: 8,
//     width: '100%', 
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   backLink: {
//     marginTop: 24,
//     alignItems: 'center',
//   },
//   backLinkText: {
//     color: '#3b82f6',
//     fontSize: 14,
//   },
// });
