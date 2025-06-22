// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/useColorScheme';

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   if (!loaded) {
//     // Async font loading only occurs in development.
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }


//ini yang benar
// import { Stack } from 'expo-router';

// export default function Layout() {
//   return (
//     <Stack
//       screenOptions={{
//         headerShown: false,
//       }}
//     />
//   );
// }


// Layout.tsx
import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack>
      {/* <Stack.Screen name="App" options={{ headerShown: false }} /> */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="SignupScreen" options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPasswordScreen" options={{ headerShown: false }} />
      <Stack.Screen name="ProductScreen" options={{ headerShown: false }} />
      <Stack.Screen name="CartScreen" options={{ headerShown: false }} />
    </Stack>
  );
}


// import { Stack } from 'expo-router/stack';

// export default function Layout() {
//   return (
//     <Stack>
//       {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
//       <Stack.Screen name="index" options={{ headerShown: false }} />
//       <Stack.Screen name="SignupScreen" options={{ headerShown: false }} />
//       {/* <Stack.Screen name="TodoScreen" options={{ headerShown: false }} /> */}
//       <Stack.Screen name="ForgotPasswordScreen" options={{ headerShown: false }} />
//       <Stack.Screen name="ProductScreen" options={{ headerShown: false }} />
//       <Stack.Screen name="CartScreen" options={{ headerShown: false }} />
//     </Stack>
//   );
// }











