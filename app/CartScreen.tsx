

//INI YANG BENAR
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // import FontAwesome dari Expo

import { useCartStore } from "@/store/cartStore";

export default function CartScreen() {
  const cartItems = useCartStore((state) => state.cartItems);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  
  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Keranjang kosong</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>
                Rp {item.price.toLocaleString("id-ID")}
              </Text>
              <Text style={styles.itemQuantity}>Jumlah: {item.quantity}</Text>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.qtyButton}
                onPress={() => increaseQuantity(item.id)}
                activeOpacity={0.7}
              >
                <FontAwesome name="plus" size={18} color="#4338ca" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.qtyButton}
                onPress={() => decreaseQuantity(item.id)}
                activeOpacity={0.7}
              >
                <FontAwesome name="minus" size={18} color="#4338ca" />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.qtyButton, styles.removeButton]}
                onPress={() => removeItem(item.id)}
                activeOpacity={0.7}
              >
                <FontAwesome name="trash" size={22} color="#b91c1c" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={styles.totalCard}>
        <Text style={styles.totalLabel}>Total Harga</Text>
        <Text style={styles.totalText}>
          Rp {totalPrice.toLocaleString("id-ID")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 50,
    color: "#94a3b8",
  },
  cartItem: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#cbd5e1",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 8 },
    elevation: 5,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    resizeMode: "contain",
    backgroundColor: "#f1f5f9",
  },
  itemInfo: {
    flex: 1,
    marginLeft: 16,
  },
  itemName: {
    fontWeight: "700",
    fontSize: 18,
    color: "#334155",
    marginBottom: 6,
  },
  itemPrice: {
    fontSize: 15,
    color: "#64748b",
    marginBottom: 6,
  },
  itemQuantity: {
    fontSize: 14,
    color: "#94a3b8",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  qtyButton: {
    backgroundColor: "#e0e7ff",
    borderRadius: 18, 
    width: 36,
    height: 36,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#c7d2fe",
    shadowOpacity: 0.6,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  removeButton: {
    backgroundColor: "#fee2e2",
    shadowColor: "#fca5a5",
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
totalCard: {
  backgroundColor: "#7c3aed",
  borderRadius: 12,
  paddingVertical: 14,
  paddingHorizontal: 20,
  marginTop: 12,
  marginBottom: 20,
  shadowColor: "#000",
  shadowOpacity: 0.15,
  shadowRadius: 6,
  shadowOffset: { width: 0, height: 3 },
  elevation: 6,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
},

totalLabel: {
  fontSize: 15,
  fontWeight: "600",
  color: "#ffffff",
},

totalText: {
  fontWeight: "bold",
  fontSize: 16,
  color: "#ffffff",
},
});













// import React from "react";
// import {
//   Image,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { useCartStore } from "@/store/cartStore";

// const CartScreen = () => {
//   const { cartItems, increaseQuantity, decreaseQuantity, removeItem } = useCartStore();

//   const formatRupiah = (num: number) => "Rp " + num.toLocaleString("id-ID");

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Keranjang Belanja</Text>

//       {cartItems.length === 0 ? (
//         <Text style={styles.empty}>Keranjang kosong.</Text>
//       ) : (
//         cartItems.map((item) => (
//           <View key={item.id} style={styles.itemContainer}>
//             <Image source={{ uri: item.image }} style={styles.image} />
//             <View style={styles.details}>
//               <Text style={styles.name}>{item.name}</Text>
//               <Text style={styles.price}>
//                 {formatRupiah(item.price)} x {item.quantity}
//               </Text>
//               <Text style={styles.totalPrice}>
//                 Total: {formatRupiah(item.price * item.quantity)}
//               </Text>

//               <View style={styles.actions}>
//                 <TouchableOpacity
//                   style={styles.button}
//                   onPress={() => decreaseQuantity(item.id)}
//                 >
//                   <Text style={styles.buttonText}>-</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={styles.button}
//                   onPress={() => increaseQuantity(item.id)}
//                 >
//                   <Text style={styles.buttonText}>+</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={[styles.button, styles.removeButton]}
//                   onPress={() => removeItem(item.id)}
//                 >
//                   <Text style={styles.buttonText}>Hapus</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         ))
//       )}
//     </ScrollView>
//   );
// };

// export default CartScreen;

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   empty: {
//     fontSize: 16,
//     color: "#888",
//     textAlign: "center",
//     marginTop: 20,
//   },
//   itemContainer: {
//     flexDirection: "row",
//     marginBottom: 20,
//     backgroundColor: "#f9f9f9",
//     borderRadius: 10,
//     padding: 10,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 1 },
//     elevation: 2,
//   },
//   image: {
//     width: 80,
//     height: 80,
//     borderRadius: 8,
//     marginRight: 12,
//   },
//   details: {
//     flex: 1,
//     justifyContent: "space-between",
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   price: {
//     fontSize: 14,
//     color: "#444",
//   },
//   totalPrice: {
//     fontSize: 14,
//     color: "#222",
//     fontWeight: "bold",
//   },
//   actions: {
//     flexDirection: "row",
//     marginTop: 6,
//     alignItems: "center",
//     gap: 10,
//   },
//   button: {
//     backgroundColor: "#007bff",
//     paddingHorizontal: 12,
//     paddingVertical: 4,
//     borderRadius: 6,
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
//   removeButton: {
//     backgroundColor: "red",
//     marginLeft: 10,
//   },
// });





// import React from "react";
// import {
//   Image,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   ScrollView,
// } from "react-native";
// import { useCartStore } from "@/store/cartStore";

// const CartScreen = () => {
//   const cartItems = useCartStore((state) => state.cartItems);

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Keranjang Belanja</Text>
//       {cartItems.length === 0 ? (
//         <Text style={styles.empty}>Keranjang kosong.</Text>
//       ) : (
//         cartItems.map((item, index) => (
//           <View key={index} style={styles.itemContainer}>
//             <Image source={{ uri: item.image }} style={styles.image} />
//             <View style={styles.details}>
//               <Text style={styles.name}>{item.name}</Text>
//               <Text style={styles.price}>Rp{item.price.toLocaleString()}</Text>
//               <Text style={styles.quantity}>Jumlah: {item.quantity}</Text>
//               <View style={styles.actions}>
//                 <TouchableOpacity style={styles.button}>
//                   <Text style={styles.buttonText}>-</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.button}>
//                   <Text style={styles.buttonText}>+</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         ))
//       )}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   empty: {
//     fontSize: 16,
//     color: "#888",
//     textAlign: "center",
//     marginTop: 20,
//   },
//   itemContainer: {
//     flexDirection: "row",
//     marginBottom: 20,
//     backgroundColor: "#f9f9f9",
//     borderRadius: 10,
//     padding: 10,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 1 },
//     elevation: 2,
//   },
//   image: {
//     width: 80,
//     height: 80,
//     borderRadius: 8,
//     marginRight: 12,
//   },
//   details: {
//     flex: 1,
//     justifyContent: "space-between",
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   price: {
//     fontSize: 14,
//     color: "#444",
//   },
//   quantity: {
//     fontSize: 14,
//     color: "#333",
//   },
//   actions: {
//     flexDirection: "row",
//     gap: 10,
//     marginTop: 6,
//   },
//   button: {
//     backgroundColor: "#007bff",
//     paddingHorizontal: 12,
//     paddingVertical: 4,
//     borderRadius: 6,
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
// });

// export default CartScreen;


// import { TCart } from "@/constants/Models"; // pastikan tipe ini sudah ada dan di-export
// import { useCartStore } from "@/store/cartStore";
// import { FontAwesome } from "@expo/vector-icons";
// import React from "react";
// import {
//     FlatList,
//     Image,
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     View,
// } from "react-native";

// const CartScreen = () => {
//   const { cartItems, increaseQuantity, decreaseQuantity, removeItem } =
//     useCartStore();

//   const renderItem = ({ item }: { item: TCart }) => (
//     <View style={styles.card}>
//       <Image source={{ uri: item.image }} style={styles.image} />
//       <View style={styles.info}>
//         <Text style={styles.name}>{item.name}</Text>
//         <Text style={styles.price}>Rp {item.price.toLocaleString("id-ID")}</Text>
//         <View style={styles.quantityContainer}>
//           <TouchableOpacity
//             onPress={() => decreaseQuantity(item.id)}
//             style={styles.qtyButton}
//           >
//             <FontAwesome name="minus" size={16} color="#333" />
//           </TouchableOpacity>

//           <Text style={styles.quantity}>{item.quantity}</Text>

//           <TouchableOpacity
//             onPress={() => increaseQuantity(item.id)}
//             style={styles.qtyButton}
//           >
//             <FontAwesome name="plus" size={16} color="#333" />
//           </TouchableOpacity>

//           <TouchableOpacity
//             onPress={() => removeItem(item.id)}
//             style={styles.removeButton}
//           >
//             <Text style={{ color: "red" }}>Hapus</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );

//   if (cartItems.length === 0) {
//     return (
//       <View style={styles.emptyContainer}>
//         <Text style={styles.emptyText}>Keranjang masih kosong</Text>
//       </View>
//     );
//   }

//   return (
//     <FlatList
//       data={cartItems}
//       keyExtractor={(item) => item.id.toString()}
//       renderItem={renderItem}
//       contentContainerStyle={styles.listContainer}
//     />
//   );
// };

// export default CartScreen;

// const styles = StyleSheet.create({
//   listContainer: {
//     padding: 16,
//     backgroundColor: "#fff",
//   },
//   card: {
//     flexDirection: "row",
//     marginBottom: 16,
//     backgroundColor: "#f5f5f5",
//     borderRadius: 8,
//     padding: 12,
//     alignItems: "center",
//   },
//   image: {
//     width: 80,
//     height: 80,
//     borderRadius: 8,
//     marginRight: 12,
//     resizeMode: "contain",
//   },
//   info: {
//     flex: 1,
//   },
//   name: {
//     fontWeight: "bold",
//     fontSize: 16,
//     marginBottom: 4,
//   },
//   price: {
//     color: "#888",
//     marginBottom: 8,
//   },
//   quantityContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   qtyButton: {
//     backgroundColor: "#ddd",
//     padding: 6,
//     borderRadius: 4,
//   },
//   quantity: {
//     marginHorizontal: 12,
//     fontSize: 16,
//   },
//   removeButton: {
//     marginLeft: 20,
//   },
//   emptyContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   emptyText: {
//     fontSize: 18,
//     color: "#666",
//   },
// });




// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Image,
//   TouchableOpacity,
// } from "react-native";
// import { useCartStore } from "@/store/cartStore";
// import { FontAwesome } from "@expo/vector-icons";

// const CartScreen = () => {
//   const {
//     cartItems,
//     removeItemFromCart,
//     increaseQuantity,
//     decreaseQuantity,
//   } = useCartStore();

//   const formatRupiah = (number: number) =>
//     "Rp " + number.toLocaleString("id-ID");

//   const totalPrice = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   const renderItem = ({ item }: any) => (
//     <View style={styles.itemContainer}>
//       <Image source={{ uri: item.image }} style={styles.image} />

//       <View style={styles.details}>
//         <Text style={styles.name}>{item.name}</Text>
//         <Text style={styles.price}>{formatRupiah(item.price)}</Text>

//         <View style={styles.controls}>
//           <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
//             <FontAwesome name="minus-circle" size={24} color="#2196F3" />
//           </TouchableOpacity>
//           <Text style={styles.quantity}>{item.quantity}</Text>
//           <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
//             <FontAwesome name="plus-circle" size={24} color="#2196F3" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => removeItemFromCart(item.id)}>
//             <FontAwesome name="trash" size={24} color="red" style={{ marginLeft: 12 }} />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {cartItems.length === 0 ? (
//         <Text style={styles.empty}>Keranjang kosong</Text>
//       ) : (
//         <>
//           <FlatList
//             data={cartItems}
//             keyExtractor={(item) => item.id.toString()}
//             renderItem={renderItem}
//             contentContainerStyle={{ paddingBottom: 80 }}
//           />

//           <View style={styles.totalContainer}>
//             <Text style={styles.totalText}>Total: {formatRupiah(totalPrice)}</Text>
//           </View>
//         </>
//       )}
//     </View>
//   );
// };

// export default CartScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#fff",
//   },
//   itemContainer: {
//     flexDirection: "row",
//     marginBottom: 16,
//     backgroundColor: "#f5f5f5",
//     padding: 10,
//     borderRadius: 8,
//   },
//   image: {
//     width: 80,
//     height: 80,
//     borderRadius: 8,
//   },
//   details: {
//     flex: 1,
//     marginLeft: 12,
//     justifyContent: "space-between",
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   price: {
//     fontSize: 14,
//     color: "#777",
//   },
//   controls: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 6,
//   },
//   quantity: {
//     marginHorizontal: 10,
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   totalContainer: {
//     position: "absolute",
//     bottom: 10,
//     left: 16,
//     right: 16,
//     backgroundColor: "#2196F3",
//     padding: 16,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   totalText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   empty: {
//     textAlign: "center",
//     marginTop: 50,
//     fontSize: 16,
//     color: "#555",
//   },
// });
