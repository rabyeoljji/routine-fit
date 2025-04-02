import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
   return (
      <>
         <Stack.Screen options={{ title: "Oops!" }} />
         <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
         >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
               페이지를 찾을 수 없습니다 😢
            </Text>
         </View>
      </>
   );
}
