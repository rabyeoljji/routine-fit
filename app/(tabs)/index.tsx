import { Link } from "expo-router";
import { Button, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
   return (
      <View className="flex-1 justify-center items-center bg-white px-[22px]">
         <View className="w-full flex flex-col gap-[26px]">
            <Link href="/add-workout" asChild>
               <TouchableOpacity className="w-full h-[70px] flex items-center justify-center bg-point rounded-[12px]">
                  <Text className="text-white text-size-medium font-bold">
                     운동 추가하기
                  </Text>
               </TouchableOpacity>
            </Link>

            <Link href="/workout-history" asChild>
               <TouchableOpacity className="w-full h-[56px] flex items-center justify-center bg-point-light rounded-[12px]">
                  <Text className="text-white text-size-medium font-bold">
                     운동 기록
                  </Text>
               </TouchableOpacity>
            </Link>
         </View>
      </View>
   );
}
