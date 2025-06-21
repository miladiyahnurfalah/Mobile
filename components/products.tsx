

//INI YANG BENAR
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { TProduct } from "../constants/Models";

type ProductsProps = {
  onAddToCart: (product: TProduct) => void;
};

const dataProducts: TProduct[] = [
   {
    id: 1,
    name: " Low pH Gentle Jelly Cleanser",
    price: 90000,
    category: "skincare",
    image:
      "https://www.beautyhaul.com/assets/uploads/products/thumbs/800x800/PDP_Low_pH_Gentle_Jelly_Cleanser_350ml.jpg",
  },
  {
    id: 2,
    name: "Essence Toner Skn Goals Vt Prop Gl",
    price: 58500,
    category: "skincare",
    image:
      "https://i0.wp.com/raisa.aeonstore.id/wp-content/uploads/2023/09/8347442.png?resize=1024%2C1024&ssl=1",
  },
  {
    id: 3,
    name: "Somethinc AHA BHA PHA Peeling Solution",
    price: 99600,
    category: "skincare",
    image:
      "https://images.somethinc.com/uploads/products/thumbs/800x800/SERUM_20ml_-_REVAMP_PDP_FINAL-16.jpg",
  },
  {
    id: 4,
    name: "Calm Down! Skinpair R-Cover Cream",
    price: 113000,
    category: "skincare",
    image:
      "https://images.somethinc.com/uploads/products/thumbs/800x800/PDP-Web_Calm_Down_Moist_30gr.jpg",
  },
  {
    id: 5,
    name: "Holyshield! UV Watery Sunscreen",
    price: 99600,
    category: "skincare",
    image:
      "https://images.somethinc.com/uploads/products/thumbs/800x800/SUN_PDP_HOLYSHIELD%21_UV_WATERY.jpg",
  },
   {
    id: 6,
    name: "Tipsy Lash Lift Mascara",
    price: 85000,
    category: "makeup",
    image:
      "https://images.somethinc.com/uploads/products/thumbs/800x800/WhatsApp_Image_2024-03-13_at_12.08_.27_.jpeg",
  },
  {
    id: 7,
    name: "The Marionette Eyeshadow Palette - Vol. 2",
    price: 110000,
    category: "makeup",
    image:
      "https://images.somethinc.com/uploads/products/thumbs/800x800/PDP-MARIONETTE-WHITEBG-VOL2.jpg",
  },
  {
    id: 8,
    name: "Hooman Under Control Powder",
    price: 110800,
    category: "makeup",
    image:
      "https://images.somethinc.com/uploads/products/thumbs/800x800/HOOMAN_UNDER_CONTROL_WEBSITE.jpg",
  },
  {
    id: 9,
    name: "Copy Paste Tinted Sunscreen SPF 40",
    price: 114000,
    category: "makeup",
    image:
      "https://images.somethinc.com/uploads/products/thumbs/800x800/PDP-Perfect-Match-Complexion-BG-PUTIH-SS-Tinted.jpg",
  },
  {
    id: 10,
    name: "Mademoiselle Soft Focus Powder Blush",
    price: 72500,
    category: "makeup",
    image:
      "https://images.somethinc.com/uploads/products/thumbs/800x800/PS_Mademoiselle_Powder_Blush_Dolly_2_%281%29.png",
  },
  {
    id: 11,
    name: "SRSLY Stay Matte Setting Spray",
    price: 73500,
    category: "makeup",
    image:
      "https://images.somethinc.com/uploads/products/thumbs/800x800/FACE_MAKEUP_SRSLY_Matte_Make_Up_Setting_Spray_%281%29.jpg",
  },
  {
    id: 12,
    name: "FOREVER STAY Waterproof Eyeliner",
    price: 70600,
    category: "makeup",
    image:
      "https://images.somethinc.com/uploads/products/thumbs/800x800/PS_Forever_Stay_Eyeliner_Blackest_Black_4.png",
  },
  {
    id: 13,
    name: "BROW WIZ Retractable Eyebrow",
    price: 68500,
    category: "makeup",
    image:
      "https://images.somethinc.com/uploads/products/thumbs/800x800/EYE_MAKEUP_BROW_WIZ_Retractable_Eyebrow.jpg",
  },
  {
    id: 14,
    name: "Essential Waxing Kit",
    price: 96752,
    category: "bodycare",
    image:
      "https://images.somethinc.com/uploads/products/thumbs/800x800/PAKET_ISI_2_POLOS_ESSENTIAL_WAXING_KIT.jpg",
  },
  {
    id: 15,
    name: "Acnedot Clear AC Body Soap",
    price: 28500,
    category: "bodycare",
    image:
      "https://images.somethinc.com/uploads/products/thumbs/800x800/Body_Care_Website-05.jpg",
  },
  {
    id: 16,
    name: "Bakuchiol R-Cover Firming Body Crème",
    price: 74500,
    category: "bodycare",
    image:
      "https://images.somethinc.com/uploads/products/thumbs/800x800/BakuchiolRCover-NoFrame.jpeg",
  },
  {
    id: 17,
    name: "Bacne 1% Biosalicylic Spray",
    price: 74500,
    category: "bodycare",
    image:
      "https://images.somethinc.com/uploads/products/thumbs/800x800/BACNE_1__Biosalicylic_Spray1.jpg",
  },
  {
    id: 18,
    name: "Hair's Natural Beauty",
    price: 102800,
    category: "bodycare",
    image: "https://images.somethinc.com/uploads/products/thumbs/800x800/HAIR_BUNDLE-11.jpg",
  },
  {
    id: 19,
    name: "Ready To Love Brush Set",
    price: 98500,
    category: "Brush",
    image:
      "https://images.somethinc.com/uploads/products/thumbs/800x800/BRUSH_SET_COVER_2_%281%29.jpg",
  },
  {
    id: 20,
    name: "Prism  Complexion Brush",
    price: 64500,
    category: "brush",
    image:
      "https://images.somethinc.com/uploads/products/thumbs/800x800/TOOLS_Prism_Foundation-Liquid_Complexion_Brush.jpg",
  },
  {
    id: 21,
    name: "Bouncy Blender Set ",
    price: 98500,
    category: "brush",
    image:
      "https://images.somethinc.com/uploads/products/thumbs/800x800/TOOLS_Repackaging_Harpy_Bouncy_Blander.jpg",
  },  
  {
   id: 22,
    name: "Bouncy Blender Set ",
    price: 98500,
    category: "brush",
    image:
      "https://images.somethinc.com/uploads/products/thumbs/800x800/TOOLS_Repackaging_Harpy_Bouncy_Blander.jpg",
  },  
  
  ]; 

const Products: React.FC<ProductsProps> = ({ onAddToCart }) => {
  const { width } = useWindowDimensions();
  const numColumns = 2;
  const gap = 12;
  const paddingHorizontal = 12;

  const renderItem = ({ item }: { item: TProduct }) => (
    <View style={styles.productCard}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />
      <Text style={styles.title} numberOfLines={2}>{item.name}</Text>
      <Text style={styles.price}>Rp {item.price.toLocaleString("id-ID")}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onAddToCart(item)}>
        <Text style={styles.buttonText}>Tambah ke Keranjang</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Data Produk</Text>
      <FlatList
        data={dataProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        columnWrapperStyle={{
          justifyContent: "space-between",
          gap: gap,
          marginBottom: gap,
        }}
        contentContainerStyle={{
          paddingHorizontal: paddingHorizontal,
          paddingBottom: 100,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  productCard: {
    flex: 1,
    minWidth: 160, // aman untuk ukuran kecil
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 120,
    marginBottom: 8,
    resizeMode: "contain",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
    textAlign: "center",
  },
  price: {
    fontSize: 13,
    color: "#888",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#7c3aed",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
});

export default Products;






// import React from "react";
// import {
//   FlatList,
//   Image,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   useWindowDimensions,
//   View,
// } from "react-native";
// import { TProduct } from "../constants/Models";

// type ProductsProps = {
//   onAddToCart: (product: TProduct) => void;
// };

// const dataProducts: TProduct[] = [
//   {
//     id: 1,
//     name: "Somethinc Low pH Gentle Jelly Cleanser",
//     price: 90000,
//     category: "skincare",
//     image:
//       "https://www.beautyhaul.com/assets/uploads/products/thumbs/800x800/PDP_Low_pH_Gentle_Jelly_Cleanser_350ml.jpg",
//   },
//   {
//     id: 2,
//     name: "Somethinc Essence Toner Skn Goals Vt Prop Gl",
//     price: 58500,
//     category: "skincare",
//     image:
//       "https://i0.wp.com/raisa.aeonstore.id/wp-content/uploads/2023/09/8347442.png?resize=1024%2C1024&ssl=1",
//   },
//   {
//     id: 3,
//     name: "Somethinc AHA BHA PHA Peeling Solution",
//     price: 99600,
//     category: "skincare",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/SERUM_20ml_-_REVAMP_PDP_FINAL-16.jpg",
//   },
//   {
//     id: 4,
//     name: "Calm Down! Skinpair R-Cover Cream",
//     price: 113000,
//     category: "skincare",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/PDP-Web_Calm_Down_Moist_30gr.jpg",
//   },
//   {
//     id: 5,
//     name: "Holyshield! UV Watery Sunscreen Gel SPF 50+ PA++++",
//     price: 99600,
//     category: "skincare",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/SUN_PDP_HOLYSHIELD%21_UV_WATERY.jpg",
//   },
//    {
//     id: 6,
//     name: "Tipsy Lash Lift Lengthening Mascara",
//     price: 85000,
//     category: "makeup",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/WhatsApp_Image_2024-03-13_at_12.08_.27_.jpeg",
//   },
//   {
//     id: 7,
//     name: "The Marionette Eyeshadow Palette - Vol. 2",
//     price: 110000,
//     category: "makeup",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/PDP-MARIONETTE-WHITEBG-VOL2.jpg",
//   },
//   {
//     id: 8,
//     name: "HOOMAN UNDER CONTROL HD Blur Loose Powder",
//     price: 110800,
//     category: "makeup",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/HOOMAN_UNDER_CONTROL_WEBSITE.jpg",
//   },
//   {
//     id: 9,
//     name: "Copy Paste Tinted Sunscreen SPF 40 PA++++ 50ml",
//     price: 114000,
//     category: "makeup",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/PDP-Perfect-Match-Complexion-BG-PUTIH-SS-Tinted.jpg",
//   },
//   {
//     id: 10,
//     name: "Mademoiselle Soft Focus Powder Blush",
//     price: 72500,
//     category: "makeup",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/PS_Mademoiselle_Powder_Blush_Dolly_2_%281%29.png",
//   },
//   {
//     id: 11,
//     name: "SRSLY Stay Matte Make Up Setting Spray",
//     price: 73500,
//     category: "makeup",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/FACE_MAKEUP_SRSLY_Matte_Make_Up_Setting_Spray_%281%29.jpg",
//   },
//   {
//     id: 12,
//     name: "FOREVER STAY Waterproof Liquid Eyeliner (RENEWAL)",
//     price: 70600,
//     category: "makeup",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/PS_Forever_Stay_Eyeliner_Blackest_Black_4.png",
//   },
//   {
//     id: 13,
//     name: "BROW WIZ Retractable Eyebrow",
//     price: 68500,
//     category: "makeup",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/EYE_MAKEUP_BROW_WIZ_Retractable_Eyebrow.jpg",
//   },
//   {
//     id: 14,
//     name: "Essential Waxing Kit",
//     price: 96752,
//     category: "bodycare",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/PAKET_ISI_2_POLOS_ESSENTIAL_WAXING_KIT.jpg",
//   },
//   {
//     id: 15,
//     name: "Acnedot Clear AC Body Soap",
//     price: 28500,
//     category: "bodycare",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/Body_Care_Website-05.jpg",
//   },
//   {
//     id: 16,
//     name: "Bakuchiol R-Cover Firming Body Crème",
//     price: 74500,
//     category: "bodycare",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/BakuchiolRCover-NoFrame.jpeg",
//   },
//   {
//     id: 17,
//     name: "Bacne 1% Biosalicylic Spray",
//     price: 74500,
//     category: "bodycare",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/BACNE_1__Biosalicylic_Spray1.jpg",
//   },
//   {
//     id: 18,
//     name: "Hair's Natural Beauty",
//     price: 102800,
//     category: "bodycare",
//     image: "https://images.somethinc.com/uploads/products/thumbs/800x800/HAIR_BUNDLE-11.jpg",
//   },
//   {
//     id: 19,
//     name: "Ready To Love Brush Set",
//     price: 98500,
//     category: "Brush",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/BRUSH_SET_COVER_2_%281%29.jpg",
//   },
//   {
//     id: 20,
//     name: "Prism Foundation/Liquid Complexion Brush",
//     price: 64500,
//     category: "brush",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/TOOLS_Prism_Foundation-Liquid_Complexion_Brush.jpg",
//   },
//   {
//     id: 21,
//     name: "Bouncy Blender Set ",
//     price: 98500,
//     category: "brush",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/TOOLS_Repackaging_Harpy_Bouncy_Blander.jpg",
//   },
// ];

// const Products: React.FC<ProductsProps> = ({ onAddToCart }) => {
//   const windowWidth = useWindowDimensions().width;
//   const numColumns = 2;

//   const cardMargin = 9;
//   const containerPadding = 12;
//   const cardWidth =
//     (windowWidth - containerPadding * 2 - cardMargin * 2 * numColumns) / numColumns;

//   const renderItem = ({ item }: { item: TProduct }) => (
//     <View style={[styles.productCard, { width: cardWidth, marginHorizontal: cardMargin }]}>
//       <Image
//         source={{ uri: item.image }}
//         style={[styles.image, { width: cardWidth - 24 }]}
//       />
//       <Text style={styles.title}>{item.name}</Text>
//       <Text style={styles.price}>Rp {item.price.toLocaleString("id-ID")}</Text>
//       <TouchableOpacity style={styles.button} onPress={() => onAddToCart(item)}>
//         <Text style={styles.buttonText}>Tambah ke Keranjang</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Data Produk</Text>
//       <FlatList
//         data={dataProducts}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//         numColumns={numColumns}
//         contentContainerStyle={styles.grid}
//         showsVerticalScrollIndicator={false}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 12,
//     paddingTop: 12,
//     backgroundColor: "#f9f9f9",
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 16,
//     textAlign: "center",
//   },
//   grid: {
//     paddingBottom: 100,
//     flexGrow: 1,
//   },
//   productCard: {
//     backgroundColor: "#fff",
//     padding: 12,
//     borderRadius: 10,
//     alignItems: "center",
//     marginBottom: 16,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 2,
//   },
//   image: {
//     aspectRatio: 1,
//     maxHeight: 120,
//     marginBottom: 8,
//     resizeMode: "contain",
//   },
//   title: {
//     fontSize: 14,
//     fontWeight: "600",
//     marginBottom: 4,
//     textAlign: "center",
//   },
//   price: {
//     fontSize: 13,
//     color: "#888",
//     marginBottom: 8,
//   },
//   button: {
//     backgroundColor: "#7c3aed",
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 12,
//     fontWeight: "600",
//   },
// });

// export default Products;



// import React from "react";
// import {
//   FlatList,
//   Image,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   useWindowDimensions,
//   View,
// } from "react-native";
// import { TProduct } from "../constants/Models";

// type ProductsProps = {
//   onAddToCart: (product: TProduct) => void;
// };

// const dataProducts: TProduct[] = [
//   {
//     id: 1,
//     name: "Somethinc Low pH Gentle Jelly Cleanser",
//     price: 90000,
//     category: "skincare",
//     image:
//       "https://www.beautyhaul.com/assets/uploads/products/thumbs/800x800/PDP_Low_pH_Gentle_Jelly_Cleanser_350ml.jpg",
//   },
//   {
//     id: 2,
//     name: "Somethinc Essence Toner Skn Goals Vt Prop Gl",
//     price: 58500,
//     category: "skincare",
//     image:
//       "https://i0.wp.com/raisa.aeonstore.id/wp-content/uploads/2023/09/8347442.png?resize=1024%2C1024&ssl=1",
//   },
//   {
//     id: 3,
//     name: "Somethinc AHA BHA PHA Peeling Solution",
//     price: 99600,
//     category: "skincare",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/SERUM_20ml_-_REVAMP_PDP_FINAL-16.jpg",
//   },
//   {
//     id: 4,
//     name: "Calm Down! Skinpair R-Cover Cream",
//     price: 113000,
//     category: "skincare",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/PDP-Web_Calm_Down_Moist_30gr.jpg",
//   },
//   {
//     id: 5,
//     name: "Holyshield! UV Watery Sunscreen Gel SPF 50+ PA++++",
//     price: 99600,
//     category: "skincare",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/SUN_PDP_HOLYSHIELD%21_UV_WATERY.jpg",
//   },
//   {
//     id: 6,
//     name: "Tipsy Lash Lift Lengthening Mascara",
//     price: 85000,
//     category: "makeup",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/WhatsApp_Image_2024-03-13_at_12.08_.27_.jpeg",
//   },
//   {
//     id: 7,
//     name: "The Marionette Eyeshadow Palette - Vol. 2",
//     price: 110000,
//     category: "makeup",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/PDP-MARIONETTE-WHITEBG-VOL2.jpg",
//   },
//   {
//     id: 8,
//     name: "HOOMAN UNDER CONTROL HD Blur Loose Powder",
//     price: 110800,
//     category: "makeup",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/HOOMAN_UNDER_CONTROL_WEBSITE.jpg",
//   },
//   {
//     id: 9,
//     name: "Copy Paste Tinted Sunscreen SPF 40 PA++++ 50ml",
//     price: 114000,
//     category: "makeup",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/PDP-Perfect-Match-Complexion-BG-PUTIH-SS-Tinted.jpg",
//   },
//   {
//     id: 10,
//     name: "Mademoiselle Soft Focus Powder Blush",
//     price: 72500,
//     category: "makeup",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/PS_Mademoiselle_Powder_Blush_Dolly_2_%281%29.png",
//   },
//   {
//     id: 11,
//     name: "SRSLY Stay Matte Make Up Setting Spray",
//     price: 73500,
//     category: "makeup",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/FACE_MAKEUP_SRSLY_Matte_Make_Up_Setting_Spray_%281%29.jpg",
//   },
//   {
//     id: 12,
//     name: "FOREVER STAY Waterproof Liquid Eyeliner (RENEWAL)",
//     price: 70600,
//     category: "makeup",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/PS_Forever_Stay_Eyeliner_Blackest_Black_4.png",
//   },
//   {
//     id: 13,
//     name: "BROW WIZ Retractable Eyebrow",
//     price: 68500,
//     category: "makeup",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/EYE_MAKEUP_BROW_WIZ_Retractable_Eyebrow.jpg",
//   },
//   {
//     id: 14,
//     name: "Essential Waxing Kit",
//     price: 96752,
//     category: "bodycare",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/PAKET_ISI_2_POLOS_ESSENTIAL_WAXING_KIT.jpg",
//   },
//   {
//     id: 15,
//     name: "Acnedot Clear AC Body Soap",
//     price: 28500,
//     category: "bodycare",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/Body_Care_Website-05.jpg",
//   },
//   {
//     id: 16,
//     name: "Bakuchiol R-Cover Firming Body Crème",
//     price: 74500,
//     category: "bodycare",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/BakuchiolRCover-NoFrame.jpeg",
//   },
//   {
//     id: 17,
//     name: "Bacne 1% Biosalicylic Spray",
//     price: 74500,
//     category: "bodycare",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/BACNE_1__Biosalicylic_Spray1.jpg",
//   },
//   {
//     id: 18,
//     name: "Hair's Natural Beauty",
//     price: 102800,
//     category: "bodycare",
//     image: "https://images.somethinc.com/uploads/products/thumbs/800x800/HAIR_BUNDLE-11.jpg",
//   },
//   {
//     id: 19,
//     name: "Ready To Love Brush Set",
//     price: 98500,
//     category: "Brush",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/BRUSH_SET_COVER_2_%281%29.jpg",
//   },
//   {
//     id: 20,
//     name: "Prism Foundation/Liquid Complexion Brush",
//     price: 64500,
//     category: "brush",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/TOOLS_Prism_Foundation-Liquid_Complexion_Brush.jpg",
//   },
//   {
//     id: 21,
//     name: "Bouncy Blender Set ",
//     price: 98500,
//     category: "brush",
//     image:
//       "https://images.somethinc.com/uploads/products/thumbs/800x800/TOOLS_Repackaging_Harpy_Bouncy_Blander.jpg",
//   },
// ];

// const Products: React.FC<ProductsProps> = ({ onAddToCart }) => {
//   const windowWidth = useWindowDimensions().width;
//   const numColumns = 3;

//   const cardMargin = 8;
//   const containerPadding = 12;
//   const cardWidth =
//     (windowWidth - containerPadding * 2 - cardMargin * 2 * numColumns) / numColumns;

//   const renderItem = ({ item }: { item: TProduct }) => (
//     <View style={[styles.productCard, { width: cardWidth, marginHorizontal: cardMargin }]}>
//       <Image
//         source={{ uri: item.image }}
//         style={[styles.image, { width: cardWidth - 24 }]}
//       />
//       <Text style={styles.title}>{item.name}</Text>
//       <Text style={styles.price}>Rp {item.price.toLocaleString("id-ID")}</Text>
//       <TouchableOpacity style={styles.button} onPress={() => onAddToCart(item)}>
//         <Text style={styles.buttonText}>Tambah ke Keranjang</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Data Produk</Text>
//       <FlatList
//         data={dataProducts}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//         numColumns={numColumns}
//         contentContainerStyle={styles.grid}
//         showsVerticalScrollIndicator={false}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 12,
//     paddingTop: 12,
//     backgroundColor: "#f9f9f9",
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 16,
//     textAlign: "center",
//   },
//   grid: {
//     paddingBottom: 100,
//     flexGrow: 1,
//   },
//   productCard: {
//     backgroundColor: "#fff",
//     padding: 12,
//     borderRadius: 10,
//     alignItems: "center",
//     marginBottom: 16,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 2,
//   },
//   image: {
//     aspectRatio: 1,
//     maxHeight: 120,
//     marginBottom: 8,
//     resizeMode: "contain",
//   },
//   title: {
//     fontSize: 14,
//     fontWeight: "600",
//     marginBottom: 4,
//     textAlign: "center",
//   },
//   price: {
//     fontSize: 13,
//     color: "#888",
//     marginBottom: 8,
//   },
//   button: {
//     backgroundColor: "#7c3aed",
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 12,
//     fontWeight: "600",
//   },
// });

// export default Products;









// import { TProduct } from "@/constants/Models";
// import React from "react";
// import {
//     FlatList,
//     Image,
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     useWindowDimensions,
//     View,
// } from "react-native";

// type ProductsProps = {
//   onAddToCart: (product: TProduct) => void;
// };

// const dataProducts: TProduct[] = [
//   {
//     id: 1,
//     name: "Sabun",
//     price: 5000,
//     category: "alat mandi",
//     image: "https://assets.unileversolutions.com/v1/87635838.png",
//   },
//   {
//     id: 2,
//     name: "Shampo",
//     price: 3000,
//     category: "alat mandi",
//     image: "https://via.placeholder.com/100",
//   },
//   {
//     id: 3,
//     name: "Sikat Gigi",
//     price: 3000,
//     category: "alat mandi",
//     image: "https://via.placeholder.com/100",
//   },
//   {
//     id: 4,
//     name: "Pasta gigi",
//     price: 5000,
//     category: "alat mandi",
//     image: "https://via.placeholder.com/100",
//   },
// ];

// const Products: React.FC<ProductsProps> = ({ onAddToCart }) => {
//   const windowWidth = useWindowDimensions().width;
//   const numColumns = 2;

//   // Hitung lebar kartu (lebar layar - padding container - margin antar kartu)
//   const cardMargin = 8;
//   const containerPadding = 24; // paddingHorizontal container (12 + 12)
//   const cardWidth = (windowWidth - containerPadding - cardMargin * 2 * numColumns) / numColumns;

//   const renderItem = ({ item }: { item: TProduct }) => (
//     <View style={[styles.productCard, { width: cardWidth, marginHorizontal: cardMargin }]}>
//       <Image
//         source={{ uri: item.image }}
//         style={[styles.image, { width: cardWidth - 24 }]} // dikurangi padding internal
//       />
//       <Text style={styles.title}>{item.name}</Text>
//       <Text style={styles.price}>Rp {item.price}</Text>
//       <TouchableOpacity style={styles.button} onPress={() => onAddToCart(item)}>
//         <Text style={styles.buttonText}>Tambah ke Keranjang</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Data Produk</Text>
//       <FlatList
//         data={dataProducts}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//         numColumns={numColumns}
//         contentContainerStyle={styles.grid}
//         showsVerticalScrollIndicator={false}
//         key={numColumns} // supaya FlatList rerender saat numColumns berubah
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 12,
//     paddingTop: 12,
//     backgroundColor: "#f9f9f9",
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 16,
//     paddingLeft: 4,
//     textAlign: "center", // agar teks di tengah
//   },
//   grid: {
//     paddingBottom: 100,
//     flexGrow: 1,
//   },
//   productCard: {
//     backgroundColor: "#fff",
//     padding: 12,
//     borderRadius: 10,
//     alignItems: "center",
//     marginBottom: 16,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 2,
//   },
//   image: {
//     aspectRatio: 1,
//     maxHeight: 120,
//     marginBottom: 8,
//     resizeMode: "contain",
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "600",
//     marginBottom: 4,
//     textAlign: "center",
//   },
//   price: {
//     fontSize: 14,
//     color: "#888",
//     marginBottom: 8,
//   },
//   button: {
//     backgroundColor: "#2196F3",
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 12,
//   },
// });

// export default Products;










// import { TProduct  } from "@/constants/Models";
// import { useCartStore } from "@/store/cartStore";
// import React from "react";
// import { Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

// const dataProducts: TProduct[] = [
//     {
//         id: 1,
//         name: "Sabun",
//         price: 5000,
//         image: "https://assets.unileversolutions.com/v1/87635838.png",
//     },
//     {
//         id: 2,
//         name: "Shampo",
//         price: 3000,
//         image: "",
//     },
//     {
//         id: 3,
//         name: "Sikat Gigi",
//         price: 3000,
//         image: "",
//     },
//     {
//         id: 4,
//         name: "Pasta gigi",
//         price: 5000,
//         image: "",
//     },
// ];

// const Products = () => {
//     const { addItemToCart, cartItems } = useCartStore();

//     return (
//         <View>
//             <Text>Products</Text>
//             {dataProducts.map((item) => (
//                 <View key={item.id}>
//                     <Image
//                         source={{ uri: item.image }}
//                         style={{ width:100, height:100 }}
//                     />
//                     <Text>{item.name}</Text>
//                     <Text>{item.price}</Text>
//                     <TouchableOpacity onPress={()=> addItemToCart(item)}>
//                         <Text>add To Cart</Text>
//                     </TouchableOpacity>
//                 </View>
//             ))}
//         </View>
//     );
// };

// export default Products
