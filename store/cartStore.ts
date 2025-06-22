


//ini benar
import { create } from "zustand";
import { TProduct } from "@/constants/Models";

type CartItem = TProduct & { quantity: number };

type CartStore = {
  cartItems: CartItem[];
  addItemToCart: (product: TProduct) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeItem: (id: number) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addItemToCart: (product) =>
    set((state) => {
      const existing = state.cartItems.find((item) => item.id === product.id);
      if (existing) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
    }),
  increaseQuantity: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decreaseQuantity: (id) =>
    set((state) => ({
      cartItems: state.cartItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0),
    })),
  removeItem: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
}));


//yang benar
// import { TProduct } from "@/constants/Models";
// import { create } from "zustand";

// type CartItem = TProduct & { quantity: number };

// type CartStore = {
//   cartItems: CartItem[];
//   addItemToCart: (product: TProduct) => void;
//   increaseQuantity: (id: number) => void;
//   decreaseQuantity: (id: number) => void;
//   removeItem: (id: number) => void;
// };

// export const useCartStore = create<CartStore>((set) => ({
//   cartItems: [],
//   addItemToCart: (product) =>
//     set((state) => {
//       const existing = state.cartItems.find((item) => item.id === product.id);
//       if (existing) {
//         return {
//           cartItems: state.cartItems.map((item) =>
//             item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//           ),
//         };
//       }
//       return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
//     }),
//   increaseQuantity: (id) =>
//     set((state) => ({
//       cartItems: state.cartItems.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       ),
//     })),
//   decreaseQuantity: (id) =>
//     set((state) => ({
//       cartItems: state.cartItems
//         .map((item) =>
//           item.id === id ? { ...item, quantity: item.quantity - 1 } : item
//         )
//         .filter((item) => item.quantity > 0),
//     })),
//   removeItem: (id) =>
//     set((state) => ({
//       cartItems: state.cartItems.filter((item) => item.id !== id),
//     })),
// }));






// import { create } from "zustand";
// import { TProduct } from "@/constants/Models";

// type CartItem = TProduct & { quantity: number };

// type CartStore = {
//   cartItems: CartItem[];
//   addItemToCart: (product: TProduct) => void;
//   increaseQuantity: (id: number) => void;
//   decreaseQuantity: (id: number) => void;
//   removeItem: (id: number) => void;
// };

// export const useCartStore = create<CartStore>((set) => ({
//   cartItems: [],
//   addItemToCart: (product) =>
//     set((state) => {
//       const existing = state.cartItems.find((item) => item.id === product.id);
//       if (existing) {
//         return {
//           cartItems: state.cartItems.map((item) =>
//             item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//           ),
//         };
//       }
//       return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
//     }),
//   increaseQuantity: (id) =>
//     set((state) => ({
//       cartItems: state.cartItems.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       ),
//     })),
//   decreaseQuantity: (id) =>
//     set((state) => ({
//       cartItems: state.cartItems
//         .map((item) =>
//           item.id === id ? { ...item, quantity: item.quantity - 1 } : item
//         )
//         .filter((item) => item.quantity > 0),
//     })),
//   removeItem: (id) =>
//     set((state) => ({
//       cartItems: state.cartItems.filter((item) => item.id !== id),
//     })),
// }));





// import { TProduct } from "@/constants/Models";
// import { create } from "zustand";

// type CartItem = TProduct & { quantity: number };

// type CartStore = {
//   cartItems: CartItem[];
//   addItemToCart: (product: TProduct) => void;
//   increaseQuantity: (id: number) => void;
//   decreaseQuantity: (id: number) => void;
//   removeItem: (id: number) => void; 
// };

// export const useCartStore = create<CartStore>((set) => ({
//   cartItems: [],
  
//   addItemToCart: (product) =>
//     set((state) => {
//       const existingItem = state.cartItems.find((item) => item.id === product.id);
//       if (existingItem) {
//         return {
//           cartItems: state.cartItems.map((item) =>
//             item.id === product.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           ),
//         };
//       } else {
//         return {
//           cartItems: [...state.cartItems, { ...product, quantity: 1 }],
//         };
//       }
//     }),

//   increaseQuantity: (id) =>
//     set((state) => ({
//       cartItems: state.cartItems.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       ),
//     })),

//   decreaseQuantity: (id) =>
//     set((state) => ({
//       cartItems: state.cartItems
//         .map((item) =>
//           item.id === id ? { ...item, quantity: item.quantity - 1 } : item
//         )
//         .filter((item) => item.quantity > 0),
//     })),

//   removeItem: (id) => // ✅ Ini fungsi baru untuk hapus item langsung
//     set((state) => ({
//       cartItems: state.cartItems.filter((item) => item.id !== id),
//     })),
// }));



// // File: /store/cartStore.ts
// import { create } from "zustand";
// import { TProduct } from "@/constants/Models";

// type CartItem = TProduct & { quantity: number };

// type CartState = {
//   cartItems: CartItem[];
//   addItemToCart: (product: TProduct) => void;
//   increaseQuantity: (productId: number) => void;
//   decreaseQuantity: (productId: number) => void;
//   removeItemFromCart: (productId: number) => void;
// };

// export const useCartStore = create<CartState>((set) => ({
//   cartItems: [],
//   addItemToCart: (product) =>
//     set((state) => {
//       const exists = state.cartItems.find((item) => item.id === product.id);
//       if (exists) {
//         return {
//           cartItems: state.cartItems.map((item) =>
//             item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//           ),
//         };
//       }
//       return {
//         cartItems: [...state.cartItems, { ...product, quantity: 1 }],
//       };
//     }),
//   increaseQuantity: (productId) =>
//     set((state) => ({
//       cartItems: state.cartItems.map((item) =>
//         item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
//       ),
//     })),
//   decreaseQuantity: (productId) =>
//     set((state) => ({
//       cartItems: state.cartItems
//         .map((item) =>
//           item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
//         )
//         .filter((item) => item.quantity > 0),
//     })),
//   removeItemFromCart: (productId) =>
//     set((state) => ({
//       cartItems: state.cartItems.filter((item) => item.id !== productId),
//     })),
// }));




// import { create } from "zustand";
// import { TCart, TProduct } from "@/constants/Models";

// interface CartState {
//   cartItems: TCart[];
//   addItemToCart: (item: TProduct) => void;
//   increaseQuantity: (productId: number) => void;
//   decreaseQuantity: (productId: number) => void;
//   removeItemFromCart: (productId: number) => void;
// }

// const useCartStore = create<CartState>((set, get) => ({
//   cartItems: [],

//   addItemToCart: (item) => {
//     const itemExists = get().cartItems.find(
//       (cartItem) => cartItem.id === item.id
//     );

//     if (itemExists) {
//       if (typeof itemExists.quantity === "number") {
//         itemExists.quantity++;
//       }
//       set({ cartItems: [...get().cartItems] });
//     } else {
//       set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
//     }
//   },

//   increaseQuantity: (productId) => {
//     const itemExists = get().cartItems.find(
//       (cartItem) => cartItem.id === productId
//     );

//     if (itemExists && typeof itemExists.quantity === "number") {
//       itemExists.quantity++;
//       set({ cartItems: [...get().cartItems] });
//     }
//   },

//   decreaseQuantity: (productId) => {
//     const itemExists = get().cartItems.find(
//       (cartItem) => cartItem.id === productId
//     );

//     if (itemExists && typeof itemExists.quantity === "number") {
//       if (itemExists.quantity === 1) {
//         const updatedCartItems = get().cartItems.filter(
//           (item) => item.id !== productId
//         );
//         set({ cartItems: updatedCartItems });
//       } else {
//         itemExists.quantity--;
//         set({ cartItems: [...get().cartItems] });
//       }
//     }
//   },

//   removeItemFromCart: (productId) => {
//     const updatedCartItems = get().cartItems.filter(
//       (item) => item.id !== productId
//     );
//     set({ cartItems: updatedCartItems });
//   },
// }));

// export default useCartStore;






// import { create } from "zustand";
// import { TCart, TProduct } from "@/constants/Models";
// import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

// interface CartState {
//     cartItems: TCart[];
//     addItemToCart : (item: TProduct) => void;
//     increaseQuantity: (productId: number) => void;
//     decreaseQuantity: (productId: number) => void;
//     removeItemFromCart: (ProductId: number) => void;
// }


// const useCartStore = create<CartState>((set, get) => ({
//     cartItems: [],

//     addItemToCart: (item) => {
//     const itemExists = get().cartItems.find(
//         (cartItem) => cartItem.id == item.id 
//     );

//     if (itemExists) {
//         if (typeof itemExists.quantity === "number") {
//             itemExists.quantity++;
//         }
//         set({ cartItems: [...get().cartItems] });
//     }else {
//         set({ cartItems: [...get().cartItems, { ...item, quantity:1 }]});
//     }
// },

// increaseQuantity: (productId) => {
//     const itemExists = get().cartItems.find(
//         (cartItem) => cartItem.id == productId
//     );

//     if (itemExists) {
//         if (typeof itemExists.quantity == "number") {
//             itemExists.quantity++;
//         }
//         set({ cartItems: [...get().cartItems] });
//     }
// },

// decreaseQuantity: (productId) => {
//     const itemExists = get().cartItems.find(
//         (cartItem) => cartItem.id == productId
//     );

//     if (itemExists) {
//         if (typeof itemExists.quantity == "number") {
//             if(itemExists.quantity === 1) {
//                 const updateCartItems = get().cartItems.filter(
//                     (item) => item.id !== productId
//                 );
//                 set({ cartItems: updateCartItems });
//             } else {
//                 itemExists.quantity--;
//                 set({ cartItems: [...get().cartItems] });
//             }
//         }
// }

// removeItemFromCart: (productId) => {
//     const itemExists = get().cartItems.find(
//         (cartItem) => cartItem == productId
//     );

//     if (itemExists) {
//         if (typeof itemExists.quantity == "number") {
//             const updateCartItems = get().cartItems.filter(
//                 (item) => item.id !== productId
//             );
//             set({ cartItems: updateCartItems});
//         }
//     }
// }

// }));

// export default useCartStore;