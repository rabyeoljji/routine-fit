import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function Layout() {
   const [loaded] = useFonts({
      SpaceMono: require("../src/assets/fonts/PretendardVariable.ttf"),
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
      <Stack>
         <Stack.Screen
            name="add-workout"
            options={{ title: "운동 추가", headerShown: false }}
         />
         <Stack.Screen
            name="change-workout"
            options={{ title: "운동 변경", headerShown: false }}
         />
         <Stack.Screen
            name="workout-history"
            options={{ title: "운동 기록", headerShown: false }}
         />
      </Stack>
   );
}
