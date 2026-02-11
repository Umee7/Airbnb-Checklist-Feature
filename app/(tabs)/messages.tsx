import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../hooks/useTheme";
import { Text } from "react-native";

export default function Messages() {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ backgroundColor: colors.surface, height: "100%" }}>
      <Text style={{ fontSize: 20, color: colors.text }}>Messages</Text>
    </SafeAreaView>
  );
}
