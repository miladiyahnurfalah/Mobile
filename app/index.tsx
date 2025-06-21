

//Ini yang benar
import { registerRootComponent } from "expo";
import App from "./App";

registerRootComponent(App);

import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

import Products from "@/components/products";
import { useCartStore } from "@/store/cartStore";
import { useAuthStore } from "@/store/AuthStore";

export default function Index() {
  const navigation = useNavigation();
  const cartItems = useCartStore((state) => state.cartItems);
  const addItemToCart = useCartStore((state) => state.addItemToCart);
  const logout = useAuthStore((state) => state.logout);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <View style={{ flex: 1, padding: 12 }}>
      {/* Tombol Logout */}
      <TouchableOpacity
        onPress={logout}
        style={styles.logoutButton}
        activeOpacity={0.8}
      >
        <FontAwesome name="sign-out" size={18} color="#dc2626" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      {/* Komponen Produk */}
      <Products onAddToCart={addItemToCart} />

      {/* Tombol Keranjang */}
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate("CartScreen" as never)}
        activeOpacity={0.8}
      >
        <FontAwesome
          name="shopping-cart"
          size={20}
          color="white"
          style={{ marginRight: 8 }}
        />
        <Text style={styles.cartButtonText}>
          Keranjang | {totalItems} item - Rp {totalPrice.toLocaleString("id-ID")}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cartButton: {
    backgroundColor: "#7c3aed",
    padding: 15,
    borderRadius: 5,
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#7c3aed",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  cartButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "#fee2e2",
    shadowColor: "#fca5a5",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 10,
  },
  logoutText: {
    color: "#dc2626",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 6,
  },
});




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