import { Alert, Button, View } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function ChangeWorkoutScreen() {
   return (
      <View style={tw`flex-1 justify-center items-center bg-white`}>
         <Button
            title="운동 변경"
            onPress={() => Alert.alert("버튼이 클릭됨!")}
         />
      </View>
   );
}
