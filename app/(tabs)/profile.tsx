import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../hooks/useTheme";
import { Text, TouchableOpacity } from "react-native";

export default function Profile() {
  const { toggleDarkMode, colors } = useTheme();
  return (
    <SafeAreaView style={{ backgroundColor: colors.surface, height: "100%" }}>
      <Text style={{ fontSize: 20, color: colors.text }}>Profile</Text>
      <TouchableOpacity onPress={() => toggleDarkMode()}>
        <Text style={{ color: colors.text }}>Mode</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
