import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuthStore } from '@/store/AuthStore';

export default function SignupScreen() {
  const router = useRouter();
  const [form, setForm] = useState({ username: '', email: '', password: '', confirmPassword: '' });
  const register = useAuthStore((state) => state.register);

  const handleSignUp = async () => {
    const { username, email, password, confirmPassword } = form;

    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields!');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }

    const success = register({ username, email, password });

    if (!success) {
      Alert.alert('Error', 'Username already taken!');
    } else {
      Alert.alert('Success', 'Account created successfully!', [
        { text: 'OK', onPress: () => router.replace('/') },
      ]);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Create your account</Text>

      <View style={styles.inputWrapper}>
        <Ionicons name="person-outline" size={20} color="#6b7280" />
        <TextInput
          placeholder="Username"
          value={form.username}
          onChangeText={(text) => setForm({ ...form, username: text })}
          style={styles.input}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Ionicons name="mail-outline" size={20} color="#6b7280" />
        <TextInput
          placeholder="Email"
          value={form.email}
          onChangeText={(text) => setForm({ ...form, email: text })}
          style={styles.input}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputWrapper}>
        <Ionicons name="lock-closed-outline" size={20} color="#6b7280" />
        <TextInput
          placeholder="Password"
          value={form.password}
          onChangeText={(text) => setForm({ ...form, password: text })}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.inputWrapper}>
        <Ionicons name="lock-closed-outline" size={20} color="#6b7280" />
        <TextInput
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => router.replace('/')}>
          <Text style={styles.footerLink}> Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#f8fafc' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 8, color: '#0f172a' },
  subtitle: { fontSize: 14, color: '#6b7280', marginBottom: 24 },
  inputWrapper: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#e0e7ff', borderRadius: 12, paddingHorizontal: 12, height: 50, marginBottom: 12, width: '100%', maxWidth: 400 },
  input: { marginLeft: 10, fontSize: 16, flex: 1, color: '#111827' },
  button: { backgroundColor: '#3b82f6', paddingVertical: 14, borderRadius: 12, alignItems: 'center', marginTop: 12, width: '100%', maxWidth: 400 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 24 },
  footerText: { fontSize: 14, color: '#6b7280' },
  footerLink: { fontSize: 14, color: '#3b82f6', fontWeight: '500' },
});



//ini sudah benar
// import { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useAuthStore } from '@/store/AuthStore';

// export default function SignupScreen() {
//   const router = useRouter();
//   const [form, setForm] = useState({ username: '', email: '', password: '', confirmPassword: '' });
//   const register = useAuthStore((state) => state.register);

//   const handleSignUp = async () => {
//     if (!form.username || !form.email || !form.password || !form.confirmPassword) {
//       Alert.alert('Error', 'Please fill all fields!');
//       return;
//     }

//     if (form.password !== form.confirmPassword) {
//       Alert.alert('Error', 'Passwords do not match!');
//       return;
//     }

//     const success = await register({
//       username: form.username,
//       email: form.email,
//       password: form.password,
//     });

//     if (success) {
//       Alert.alert('Success', 'Account created successfully! Please login.');
//       router.replace('/'); // kembali ke halaman login
//     } else {
//       Alert.alert('Error', 'Username already taken!');
//     }
//   };

//   return (
//     <View style={styles.wrapper}>
//       <Text style={styles.title}>Sign Up</Text>
//       <Text style={styles.subtitle}>Create your account</Text>

//       <View style={styles.inputWrapper}>
//         <Ionicons name="person-outline" size={20} color="#6b7280" />
//         <TextInput
//           placeholder="Username"
//           value={form.username}
//           onChangeText={(text) => setForm({ ...form, username: text })}
//           style={styles.input}
//         />
//       </View>

//       <View style={styles.inputWrapper}>
//         <Ionicons name="mail-outline" size={20} color="#6b7280" />
//         <TextInput
//           placeholder="Email"
//           value={form.email}
//           onChangeText={(text) => setForm({ ...form, email: text })}
//           style={styles.input}
//           keyboardType="email-address"
//         />
//       </View>

//       <View style={styles.inputWrapper}>
//         <Ionicons name="lock-closed-outline" size={20} color="#6b7280" />
//         <TextInput
//           placeholder="Password"
//           value={form.password}
//           onChangeText={(text) => setForm({ ...form, password: text })}
//           style={styles.input}
//           secureTextEntry
//         />
//       </View>

//       <View style={styles.inputWrapper}>
//         <Ionicons name="lock-closed-outline" size={20} color="#6b7280" />
//         <TextInput
//           placeholder="Confirm Password"
//           value={form.confirmPassword}
//           onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
//           style={styles.input}
//           secureTextEntry
//         />
//       </View>

//       <TouchableOpacity style={styles.button} onPress={handleSignUp}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>

//       <View style={styles.footer}>
//         <Text style={styles.footerText}>Already have an account?</Text>
//         <TouchableOpacity onPress={() => router.replace('/')}>
//           <Text style={styles.footerLink}> Login</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   wrapper: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f8fafc',
//     paddingHorizontal: 24,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 8,
//     color: '#0f172a',
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#6b7280',
//     textAlign: 'center',
//     marginBottom: 24,
//   },
//   inputWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#e0e7ff',
//     borderRadius: 12,
//     paddingHorizontal: 12,
//     height: 50,
//     marginBottom: 12,
//     width: '100%',
//     maxWidth: 400,
//   },
//   input: {
//     marginLeft: 10,
//     fontSize: 16,
//     flex: 1,
//     color: '#111827',
//   },
//   button: {
//     backgroundColor: '#3b82f6',
//     paddingVertical: 14,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginTop: 12,
//     width: '100%',
//     maxWidth: 400,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 24,
//   },
//   footerText: {
//     fontSize: 14,
//     color: '#6b7280',
//   },
//   footerLink: {
//     fontSize: 14,
//     color: '#3b82f6',
//     fontWeight: '500',
//   },
// });




// import { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { dummyUsers } from './index';

// export default function SignupScreen() {
//   const router = useRouter();
//   const [form, setForm] = useState({ username: '', email: '', password: '', confirmPassword: '' });

//   const handleSignUp = () => {
//     if (form.password !== form.confirmPassword) {
//       Alert.alert('Error', 'Password tidak sama!');
//       return;
//     }
//     const userExists = dummyUsers.some(u => u.username === form.username);
//     if (userExists) {
//       Alert.alert('Error', 'Username sudah dipakai!');
//       return;
//     }
//     dummyUsers.push({ username: form.username, password: form.password });
//     Alert.alert('Sukses', 'Akun berhasil dibuat!');
//     router.push('/');
//   };

//   return (
//     <View style={styles.wrapper}>
//       <Text style={styles.title}>Sign Up</Text>
//       <Text style={styles.subtitle}>Create your account</Text>

//       {/* Username */}
//       <View style={styles.inputWrapper}>
//         <Ionicons name="person-outline" size={20} color="#6b7280" />
//         <TextInput
//           placeholder="Username"
//           placeholderTextColor="#6b7280"
//           value={form.username}
//           onChangeText={(text) => setForm({ ...form, username: text })}
//           style={styles.input}
//         />
//       </View>

//       {/* Email */}
//       <View style={styles.inputWrapper}>
//         <Ionicons name="mail-outline" size={20} color="#6b7280" />
//         <TextInput
//           placeholder="Email"
//           placeholderTextColor="#6b7280"
//           value={form.email}
//           onChangeText={(text) => setForm({ ...form, email: text })}
//           style={styles.input}
//           keyboardType="email-address"
//         />
//       </View>

//       {/* Password */}
//       <View style={styles.inputWrapper}>
//         <Ionicons name="lock-closed-outline" size={20} color="#6b7280" />
//         <TextInput
//           placeholder="Password"
//           placeholderTextColor="#6b7280"
//           value={form.password}
//           onChangeText={(text) => setForm({ ...form, password: text })}
//           secureTextEntry
//           style={styles.input}
//         />
//       </View>

//       {/* Confirm Password */}
//       <View style={styles.inputWrapper}>
//         <Ionicons name="lock-closed-outline" size={20} color="#6b7280" />
//         <TextInput
//           placeholder="Confirm Password"
//           placeholderTextColor="#6b7280"
//           value={form.confirmPassword}
//           onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
//           secureTextEntry
//           style={styles.input}
//         />
//       </View>

//       {/* Submit Button */}
//       <TouchableOpacity style={styles.button} onPress={handleSignUp}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>

//       {/* Link to Login */}
//       <View style={styles.footer}>
//         <Text style={styles.footerText}>Already have an account?</Text>
//         <TouchableOpacity onPress={() => router.push('/')}>
//           <Text style={styles.footerLink}> Login</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   wrapper: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f8fafc',
//     paddingHorizontal: 24,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 8,
//     color: '#0f172a',
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#6b7280',
//     textAlign: 'center',
//     marginBottom: 24,
//   },
//   inputWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#e0e7ff',
//     borderRadius: 12,
//     paddingHorizontal: 12,
//     height: 50,
//     marginBottom: 12,
//     width: '100%',
//     maxWidth: 400,
//   },
//   input: {
//     marginLeft: 10,
//     fontSize: 16,
//     flex: 1,
//     color: '#111827',
//   },
//   button: {
//     backgroundColor: '#3b82f6',
//     paddingVertical: 14,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginTop: 12,
//     width: '100%',
//     maxWidth: 400,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 24,
//   },
//   footerText: {
//     fontSize: 14,
//     color: '#6b7280',
//   },
//   footerLink: {
//     fontSize: 14,
//     color: '#3b82f6',
//     fontWeight: '500',
//   },
// });