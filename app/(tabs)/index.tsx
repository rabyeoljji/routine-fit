import { colors } from "@/app/theme";
import { Box } from "@/components/ui/box";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import {
   Checkbox,
   CheckboxIcon,
   CheckboxIndicator,
} from "@/components/ui/checkbox";
import { IcAdd, IcRun } from "app/src/assets/icons";
import { cn } from "app/src/utils/tailwind";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
// import { Button } from "react-native-paper";

export default function HomeScreen() {
   const [checked, setChecked] = useState(false);

   return (
      <View className="flex-1 justify-center items-center bg-white px-[22px]">
         <View className="p-[16px] w-full bg-white rounded-[16px] shadow-custom">
            <Box className="border border-custom-point-medium rounded-[12px] px-[18px] py-[28px] flex flex-row justify-between">
               <IcRun width={24} height={24} fill={colors.tertiary} />
               <Text className="text-custom-base text-xl font-bold">런닝</Text>
               <Text className="text-custom-base text-xl font-bold">30분</Text>
               <Checkbox
                  value="런닝"
                  isChecked={checked}
                  onChange={setChecked}
                  size="lg"
               >
                  <CheckboxIndicator>
                     <CheckboxIcon />
                  </CheckboxIndicator>
               </Checkbox>
            </Box>
         </View>

         <View className="w-full flex flex-col gap-[26px]">
            <Link href="/add-workout" asChild>
               <Button action="point" size="lg">
                  <IcAdd width={24} height={24} fill={colors.white} />
                  <ButtonText size="lg">운동 추가하기</ButtonText>
               </Button>
            </Link>

            <Link href="/workout-history" asChild>
               <Button action="point-light" size="md">
                  <ButtonText size="lg" className="text-custom-point">
                     운동 기록
                  </ButtonText>
               </Button>
            </Link>
         </View>
      </View>
   );
}
