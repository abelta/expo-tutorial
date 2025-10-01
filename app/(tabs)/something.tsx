import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SomethingScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Something Screen</Text>
      </View>
    </SafeAreaView>
  );
}
