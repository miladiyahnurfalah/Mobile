import { useEffect, useState } from 'react';
import { Alert, View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useAuthStore } from '@/store/AuthStore';

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);

  const login = useAuthStore((state) => state.login);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const restoreSession = useAuthStore((state) => state.restoreSession);

  useEffect(() => {
    const init = async () => {
      await restoreSession();
      setLoading(false);
    };
    init();
  }, []);

  useEffect(() => {
    if (!loading && isLoggedIn) {
      router.replace('/ProductScreen');
    }
  }, [isLoggedIn, loading]);

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Login Error', 'Please fill in both username and password!');
      return;
    }

    const result = login(username, password);

    if (result === 'not_found') {
      Alert.alert('Login Failed', 'Username not found!');
    } else if (result === 'wrong_password') {
      Alert.alert('Login Failed', 'Incorrect password!');
    } else if (result === 'success') {
      Alert.alert('Login Successful', 'Welcome back!', [
        {
          text: 'OK',
          onPress: () => router.replace('/ProductScreen'),
        },
      ]);
    }
  };

  if (loading) {
    return (
      <View style={styles.wrapper}>
        <ActivityIndicator size="large" color="#3b82f6" />
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputWrapper}>
        <Ionicons name="person-outline" size={20} color="#6b7280" />
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Ionicons name="lock-closed-outline" size={20} color="#6b7280" />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Tambahan tombol forgot password */}
      <TouchableOpacity onPress={() => router.push('/ForgotPasswordScreen')}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => router.push('/SignupScreen')}>
          <Text style={styles.footerLink}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e7ff',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 50,
    marginBottom: 12,
    width: '100%',
    maxWidth: 400,
  },
  input: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
    color: '#111827',
  },
  button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
    width: '100%',
    maxWidth: 400,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  forgotPasswordText: {
    marginTop: 16,
    fontSize: 14,
    color: '#3b82f6',
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 24,
  },
  footerLink: {
    fontWeight: 'bold',
    color: '#3b82f6',
  },
});







//ini sudah benar
// import { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useAuthStore } from '@/store/AuthStore'; // pastikan path ini sesuai

// export default function Index() {
//   const router = useRouter();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [loading, setLoading] = useState(true);

//   const login = useAuthStore((state) => state.login);
//   const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
//   const restoreSession = useAuthStore((state) => state.restoreSession);

//   useEffect(() => {
//     const init = async () => {
//       await restoreSession();
//       setLoading(false);
//     };
//     init();
//   }, []);

//   useEffect(() => {
//     if (!loading && isLoggedIn) {
//       router.replace('/ProductScreen');
//     }
//   }, [isLoggedIn, loading]);

//   const handleLogin = () => {
//     if (!username || !password) {
//       setErrorMessage('Username and Password must be filled!');
//       return;
//     }

//     const success = login(username, password);
//     if (!success) {
//       setErrorMessage('Username or password incorrect!');
//     } else {
//       setErrorMessage('');
//       router.replace('/ProductScreen');
//     }
//   };

//   if (loading) {
//     return (
//       <View style={styles.wrapper}>
//         <ActivityIndicator size="large" color="#3b82f6" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.wrapper}>
//       <Text style={styles.title}>Welcome Back</Text>
//       <Text style={styles.subtitle}>Enter your credential to login</Text>

//       <View style={styles.inputWrapper}>
//         <Ionicons name="person-outline" size={20} color="#6b7280" />
//         <TextInput
//           placeholder="Username"
//           value={username}
//           onChangeText={(text) => {
//             setUsername(text);
//             setErrorMessage('');
//           }}
//           style={styles.input}
//         />
//       </View>

//       <View style={styles.inputWrapper}>
//         <Ionicons name="lock-closed-outline" size={20} color="#6b7280" />
//         <TextInput
//           placeholder="Password"
//           value={password}
//           onChangeText={(text) => {
//             setPassword(text);
//             setErrorMessage('');
//           }}
//           secureTextEntry
//           style={styles.input}
//         />
//       </View>

//       {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => router.push('/ForgotPasswordScreen')}>
//         <Text style={styles.forgotPasswordText}>Forgot password?</Text>
//       </TouchableOpacity>

//       <View style={styles.footer}>
//         <Text style={styles.footerText}>Don't have an account?</Text>
//         <TouchableOpacity onPress={() => router.push('/SignupScreen')}>
//           <Text style={styles.footerLink}> Sign Up</Text>
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
//   errorText: {
//     color: 'red',
//     fontSize: 12,
//     marginTop: 4,
//     marginBottom: 8,
//     textAlign: 'center',
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
//   forgotPasswordText: {
//     fontSize: 14,
//     color: '#3b82f6',
//     fontWeight: '500',
//     textAlign: 'center',
//     marginTop: 16,
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
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';

// // Dummy data user
// const dummyUsers: { username: string; password: string }[] = [];

// export default function LoginScreen() {
//   const router = useRouter();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleLogin = () => {
//     if (!username || !password) {
//       setErrorMessage('Username and Password must be filled!');
//       return;
//     }

//     const user = dummyUsers.find(u => u.username === username);

//     if (!user) {
//       setErrorMessage('Username not found!');
//     } else if (user.password !== password) {
//       setErrorMessage('Incorrect password!');
//     } else {
//       setErrorMessage('');
//       router.push({ pathname: '/ProductScreen', params: { username: user.username } });
//     }
//   };

//   return (
//     <View style={styles.wrapper}>
//       <Text style={styles.title}>Welcome Back</Text>
//       <Text style={styles.subtitle}>Enter your credential to login</Text>

//       <View style={styles.inputWrapper}>
//         <Ionicons name="person-outline" size={20} color="#6b7280" />
//         <TextInput
//           placeholder="Username"
//           placeholderTextColor="#6b7280"
//           value={username}
//           onChangeText={text => {
//             setUsername(text);
//             setErrorMessage('');
//           }}
//           style={styles.input}
//         />
//       </View>

//       <View style={styles.inputWrapper}>
//         <Ionicons name="lock-closed-outline" size={20} color="#6b7280" />
//         <TextInput
//           placeholder="Password"
//           placeholderTextColor="#6b7280"
//           value={password}
//           onChangeText={text => {
//             setPassword(text);
//             setErrorMessage('');
//           }}
//           secureTextEntry
//           style={styles.input}
//         />
//       </View>

//       {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => router.push('/ForgotPasswordScreen')}>
//         <Text style={styles.forgotPasswordText}>Forgot password?</Text>
//       </TouchableOpacity>

//       <View style={styles.footer}>
//         <Text style={styles.footerText}>Don't have an account?</Text>
//         <TouchableOpacity onPress={() => router.push('/SignupScreen')}>
//           <Text style={styles.footerLink}> Sign Up</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// export { dummyUsers };

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
//   errorText: {
//     color: 'red',
//     fontSize: 12,
//     marginTop: 4,
//     marginBottom: 8,
//     textAlign: 'center',
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
//   forgotPasswordText: {
//     fontSize: 14,
//     color: '#3b82f6',
//     fontWeight: '500',
//     textAlign: 'center',
//     marginTop: 16,
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


//Ini yang benar
// import { registerRootComponent } from "expo";
// import App from "./App";

// registerRootComponent(App);

// import React from "react";
// import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { FontAwesome } from "@expo/vector-icons";

// import Products from "@/components/products";
// import { useCartStore } from "@/store/cartStore";
// import { useAuthStore } from "@/store/AuthStore";

// export default function Index() {
//   const navigation = useNavigation();
//   const cartItems = useCartStore((state) => state.cartItems);
//   const addItemToCart = useCartStore((state) => state.addItemToCart);
//   const logout = useAuthStore((state) => state.logout);

//   const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
//   const totalPrice = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   return (
//     <View style={{ flex: 1, padding: 12 }}>
//       {/* Tombol Logout */}
//       <TouchableOpacity
//         onPress={logout}
//         style={styles.logoutButton}
//         activeOpacity={0.8}
//       >
//         <FontAwesome name="sign-out" size={18} color="#dc2626" />
//         <Text style={styles.logoutText}>Logout</Text>
//       </TouchableOpacity>

//       {/* Komponen Produk */}
//       <Products onAddToCart={addItemToCart} />

//       {/* Tombol Keranjang */}
//       <TouchableOpacity
//         style={styles.cartButton}
//         onPress={() => navigation.navigate("CartScreen" as never)}
//         activeOpacity={0.8}
//       >
//         <FontAwesome
//           name="shopping-cart"
//           size={20}
//           color="white"
//           style={{ marginRight: 8 }}
//         />
//         <Text style={styles.cartButtonText}>
//           Keranjang | {totalItems} item - Rp {totalPrice.toLocaleString("id-ID")}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   cartButton: {
//     backgroundColor: "#7c3aed",
//     padding: 15,
//     borderRadius: 5,
//     position: "absolute",
//     bottom: 20,
//     left: 20,
//     right: 20,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     shadowColor: "#7c3aed",
//     shadowOpacity: 0.3,
//     shadowOffset: { width: 0, height: 4 },
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   cartButtonText: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
//   logoutButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     alignSelf: "flex-end",
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 8,
//     backgroundColor: "#fee2e2",
//     shadowColor: "#fca5a5",
//     shadowOpacity: 0.4,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//     elevation: 3,
//     marginBottom: 10,
//   },
//   logoutText: {
//     color: "#dc2626",
//     fontWeight: "bold",
//     fontSize: 14,
//     marginLeft: 6,
//   },
// });




//INI YANG BENAR
// import React from "react";
// import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { FontAwesome } from "@expo/vector-icons"; // import ikon
// import Products from "@/components/products";
// import { useCartStore } from "@/store/cartStore";

// export default function Index() {
//   const navigation = useNavigation();
//   const cartItems = useCartStore((state) => state.cartItems);
//   const addItemToCart = useCartStore((state) => state.addItemToCart);

//   const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
//   const totalPrice = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   return (
//     <View style={{ flex: 1, padding: 12 }}>
//       <Products onAddToCart={addItemToCart} />

//       <TouchableOpacity
//         style={styles.cartButton}
//         onPress={() => navigation.navigate("CartScreen" as never)}
//         activeOpacity={0.7}
//       >
//         <FontAwesome
//           name="shopping-cart"
//           size={20}
//           color="white"
//           style={{ marginRight: 8 }}
//         />
//         <Text style={styles.cartButtonText}>
//           Keranjang | {totalItems} item - Rp {totalPrice.toLocaleString("id-ID")}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   cartButton: {
//     backgroundColor: "#7c3aed",
//     padding: 15,
//     borderRadius: 5,
//     position: "absolute",
//     bottom: 20,
//     left: 20,
//     right: 20,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   cartButtonText: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
// });









// import Products from "@/components/products";
// import { TProduct } from "@/constants/Models";
// import { useCartStore } from "@/store/cartStore";
// import { FontAwesome } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import React from "react";
// import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { RootStackParamList } from "./App";

// type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

// const Index = () => {
//   const navigation = useNavigation<NavigationProp>();
//   const { cartItems, addItemToCart } = useCartStore();

//   const onAddToCart = (product: TProduct) => {
//     addItemToCart(product);
//   };

//   const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
//   const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   const formatRupiah = (num: number) => "Rp " + num.toLocaleString("id-ID");

//   return (
//     <>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <View style={styles.container}>
//           <Products onAddToCart={onAddToCart} />
//         </View>
//       </ScrollView>

//       {totalQuantity > 0 && (
//         <TouchableOpacity
//           style={styles.touchable}
//           activeOpacity={0.8}
//           onPress={() => navigation.navigate("Cart")}
//         >
//           <View style={styles.cardSummary}>
//             <View style={styles.cartRow}>
//               <FontAwesome
//                 name="shopping-cart"
//                 size={18}
//                 color="#fff"
//                 style={{ marginRight: 8 }}
//               />
//               <Text style={styles.cartSummaryText}>
//                 {totalQuantity} produk | Total {formatRupiah(totalPrice)}
//               </Text>
//             </View>
//           </View>
//         </TouchableOpacity>
//       )}
//     </>
//   );
// };

// export default Index;

// const styles = StyleSheet.create({
//   scrollContainer: {
//     paddingBottom: 40,
//   },
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#fff",
//   },
//   touchable: {
//     position: "absolute",
//     bottom: 10,
//     left: 16,
//     right: 16,
//     zIndex: 100,
//   },
//   cardSummary: {
//     backgroundColor: "#2196F3",
//     borderRadius: 8,
//     alignItems: "center",
//     paddingVertical: 14,
//   },
//   cartRow: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   cartSummaryText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });






// import Products from "@/components/products";
// import { TProduct } from "@/constants/Models";
// import { useCartStore } from "@/store/cartStore";
// import { FontAwesome } from "@expo/vector-icons"; // Icon untuk keranjang
// import { NavigationProp, useNavigation } from "@react-navigation/native";
// import React from "react";
// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";

// type RootStackParamList = {
//   Home: undefined;
//   Cart: undefined;
// };

// const HomeScreen = () => {
//   const navigation = useNavigation<NavigationProp<RootStackParamList>>();

//   const { cartItems, addItemToCart } = useCartStore();

//   const onAddToCart = (product: TProduct) => {
//     addItemToCart(product);
//   };

//   const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
//   const totalPrice = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   const formatRupiah = (number: number) =>
//     "Rp " + number.toLocaleString("id-ID");

//   return (
//     <>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <View style={styles.container}>
//           <Products onAddToCart={onAddToCart} />
//         </View>
//       </ScrollView>

//       {totalQuantity > 0 && (
//         <TouchableOpacity
//           style={styles.touchable}
//           onPress={() => navigation.navigate("Cart")}
//           activeOpacity={0.8}
//         >
//           <View style={styles.cardSummary}>
//             <View style={styles.cartRow}>
//               <FontAwesome
//                 name="shopping-cart"
//                 size={18}
//                 color="#fff"
//                 style={{ marginRight: 8 }}
//               />
//               <Text style={styles.cartSummaryText}>
//                 {totalQuantity} produk | Tambah {formatRupiah(totalPrice)}
//               </Text>
//             </View>
//           </View>
//         </TouchableOpacity>
//       )}
//     </>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   scrollContainer: {
//     paddingBottom: 40,
//   },
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#fff",
//   },
//   touchable: {
//     position: "absolute",
//     bottom: 10,
//     left: 16,
//     right: 16,
//     zIndex: 100,
//   },
//   cardSummary: {
//     backgroundColor: "#2196F3",
//     borderRadius: 8,
//     alignItems: "center",
//     paddingVertical: 14,
//   },
//   cartRow: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   cartSummaryText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });





// import Products from "@/components/products";
// import { TProduct } from "@/constants/Models";
// import { useCartStore } from "@/store/cartStore";
// import React from "react";
// import {
//     ScrollView,
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     View,
// } from "react-native";

// const HomeScreen = () => {
//   const {
//     cartItems,
//     addItemToCart,
//     increaseQuantity,
//     decreaseQuantity,
//     removeItem,
//   } = useCartStore();

//   const onAddToCart = (product: TProduct) => {
//     addItemToCart(product);
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//       <View style={styles.container}>
//         <Products onAddToCart={onAddToCart} />

//         <Text style={styles.cartTitle}>Keranjang</Text>
//         {cartItems.length === 0 && <Text style={styles.emptyCartText}>Keranjang kosong</Text>}

//         {cartItems.map((item) => (
//           <View style={styles.cartItem} key={item.id}>
//             <Text style={styles.cartText}>{item.name}</Text>
//             <Text style={styles.cartText}>Qty: {item.quantity}</Text>
//             <Text style={styles.cartText}>
//               Total: Rp {item.quantity * item.price}
//             </Text>
//             <View style={styles.cartButtons}>
//               <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
//                 <Text style={styles.cartButton}>Tambah</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
//                 <Text style={styles.cartButton}>Kurangi</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => removeItem(item.id)}>
//                 <Text style={[styles.cartButton, { color: "red" }]}>Hapus</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         ))}
//       </View>
//     </ScrollView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   scrollContainer: {
//     paddingBottom: 40,
//   },
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#ffffff",
//   },
//   cartTitle: {
//     fontSize: 22,
//     fontWeight: "600",
//     marginTop: 24,
//     marginBottom: 8,
//   },
//   emptyCartText: {
//     fontSize: 14,
//     fontStyle: "italic",
//     color: "#888",
//     marginBottom: 8,
//   },
//   cartItem: {
//     padding: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ddd",
//   },
//   cartText: {
//     fontSize: 14,
//   },
//   cartButtons: {
//     flexDirection: "row",
//     marginTop: 8,
//     gap: 10,
//   },
//   cartButton: {
//     color: "#007bff",
//     marginRight: 12,
//   },
// });












// import Profile from "@/components/Profile";
// import { StyleSheet, View } from 'react-native';
// import React from 'react';

// const Index = () => {
//   return (
//     <View>
//       <Profile/>
//     </View>
//   );
// };

// export default Index;

// const styles = StyleSheet.create({});

// import Profile from "@/components/Profile";
// import { StyleSheet, View } from 'react-native'
// import React from 'react'

// const index = () => {
//   const name = "John Doe" ;
//   return (
//     <View>
//       <Profile name={name} />
//     </View>
//   )
// }

// export default index;

// const styles = StyleSheet.create({}) 