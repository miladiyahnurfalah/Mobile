






import { useAuthStore } from "@/store/AuthStore";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function App() {
  const router = useRouter();
  const restoreSession = useAuthStore((state) => state.restoreSession);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const [loading, setLoading] = useState(true);

  // Restore session saat aplikasi pertama kali dibuka
  useEffect(() => {
    const init = async () => {
      await restoreSession();
      setLoading(false);
    };
    init();
  }, []);

  // Setelah session berhasil di-restore
  useEffect(() => {
    if (!loading) {
      if (isLoggedIn) {
        router.replace("/ProductScreen"); // jika login arahkan ke produk
      } else {
        router.replace("/"); // jika belum login arahkan ke halaman login (index)
      }
    }
  }, [loading, isLoggedIn]);

  // Tampilkan loading spinner saat restoreSession masih berlangsung
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#3b82f6" />
      </View>
    );
  }

  return null;
}




// import React, { useEffect, useState } from "react";
// import { View, ActivityIndicator } from "react-native";
// import { useAuthStore } from "@/store/AuthStore";
// import { useRouter } from "expo-router";

// export default function App() {
//   const router = useRouter();
//   const restoreSession = useAuthStore((state) => state.restoreSession);
//   const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const initializeApp = async () => {
//       await restoreSession();
//       setLoading(false);
//     };
//     initializeApp();
//   }, []);

//   useEffect(() => {
//     if (!loading) {
//       router.replace(isLoggedIn ? "/ProductScreen" : "/");
//     }
//   }, [loading, isLoggedIn]);

//   if (loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   return null;
// }


//sudah bisa menyimpan data login
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import React, { useEffect, useState } from "react";
// import { ActivityIndicator, View } from "react-native";

// import { useAuthStore } from "@/store/AuthStore";
// import AppStack from "./screens/AppStack";
// import LoginScreen from "./screens/LoginScreen";
// import RegisterScreen from "./screens/RegisterScreen";

// const Stack = createNativeStackNavigator();

// export default function App() {
//   const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
//   const restoreSession = useAuthStore((state) => state.restoreSession);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadSession = async () => {
//       await restoreSession();
//       setLoading(false);
//     };
//     loadSession();
//   }, []);

//   if (loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" color="#7c3aed" />
//       </View>
//     );
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         {!isLoggedIn ? (
//           <>
//             <Stack.Screen name="Login" component={LoginScreen} />
//             <Stack.Screen name="Register" component={RegisterScreen} />
//           </>
//         ) : (
//           <Stack.Screen name="AppStack" component={AppStack} />
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }




// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import LoginScreen from "./screens/LoginScreen";
// import RegisterScreen from "./screens/RegisterScreen";
// import AppStack from "./screens/AppStack"; // Ini berisi Index (Produk) dan CartScreen (Keranjang)

// import { useAuthStore } from "@/store/AuthStore";

// const Stack = createNativeStackNavigator();

// export default function App() {
//   const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         {!isLoggedIn ? (
//           <>
//             <Stack.Screen name="Login" component={LoginScreen} />
//             <Stack.Screen name="Register" component={RegisterScreen} />
//           </>
//         ) : (
//           <Stack.Screen name="AppStack" component={AppStack} />
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

















//yang benar//
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import Index from "./index";
// import CartScreen from "./CartScreen";

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Index" component={Index} options={{ title: "Produk" }} />
//         <Stack.Screen
//           name="CartScreen"
//           component={CartScreen}
//           options={{ title: "Keranjang" }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }















// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import React from "react";
// import CartScreen from "./CartScreen";
// import Index from "./index";

// export type RootStackParamList = {
//   Home: undefined;
//   Cart: undefined;
// };

// const Stack = createNativeStackNavigator<RootStackParamList>();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={Index} options={{ title: "Produk" }} />
//         <Stack.Screen name="Cart" component={CartScreen} options={{ title: "Keranjang" }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
