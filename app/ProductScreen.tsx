
//benar
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

// export default function ProductScreen() {
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


import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import Products from "@/components/products";
import { useCartStore } from "@/store/cartStore";
import { useAuthStore } from "@/store/AuthStore";

export default function ProductScreen() {
  const router = useRouter();
  const cartItems = useCartStore((state) => state.cartItems);
  const addItemToCart = useCartStore((state) => state.addItemToCart);
  const logout = useAuthStore((state) => state.logout);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleLogout = () => {
    logout(); // clear session
    router.replace("/"); // redirect ke halaman login
  };

  return (
    <View style={{ flex: 1, padding: 12 }}>
      {/* Tombol Logout */}
      <TouchableOpacity
        onPress={handleLogout}
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
        onPress={() => router.push("/CartScreen")}
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
