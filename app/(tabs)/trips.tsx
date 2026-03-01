import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../hooks/useTheme";
import ChecklistFeature from "../../components/Checklists/ChecklistFeature";
import { View, Text } from "react-native";

export default function Trips() {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.surface }}>
      {/* HEADING */}
      <View style={{ paddingHorizontal: 24, paddingTop: 16 }}>
        <Text
          style={{
            color: colors.text,
            fontSize: 32,
            fontWeight: "800",
            letterSpacing: -0.5,
          }}
        >
          Triplist
        </Text>
      </View>
      <ChecklistFeature colors={colors} />
    </SafeAreaView>
  );
}
