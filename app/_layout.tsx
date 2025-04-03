import { useFonts } from "expo-font";
import "@/app\\global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import "react-native-reanimated";
import "./global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
   const [loaded] = useFonts({
      SpaceMono: require("./src/assets/fonts/PretendardVariable.ttf"),
   });

   useEffect(() => {
      if (loaded) {
         SplashScreen.hideAsync();
      }
   }, [loaded]);

   if (!loaded) {
      return null;
   }

   return (
      <GluestackUIProvider>
         <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="+not-found" />
            <Stack.Screen name="index" options={{ title: "메인" }} />
         </Stack>
         <StatusBar />
      </GluestackUIProvider>
   );
}
