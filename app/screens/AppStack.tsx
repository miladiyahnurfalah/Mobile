


//ini yang benar
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Index from "../index"; // halaman produk
import CartScreen from "../CartScreen"; // halaman keranjang

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
  );
}

