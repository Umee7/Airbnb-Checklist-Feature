import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../hooks/useTheme";
import ChecklistFeature from "../../components/Checklists/ChecklistFeature";
import { View, Text, Pressable } from "react-native";
import HistoryIcon from "@/components/Icons/HistoryIcon";

export default function Trips() {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.surface }}>
      {/* History */}
      <View
        style={{
          paddingHorizontal: 24,
          paddingTop: 4,
          alignItems: "flex-end",
        }}
      >
        <Pressable
          style={{
            height: 40,
            width: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 80,
            backgroundColor: colors.buttons.surface,
          }}
          onPress={() => {
            // future history screen
          }}
        >
          <HistoryIcon color={colors.buttons.textOnSurface} />
        </Pressable>
      </View>
      {/* HEADING */}
      <View style={{ paddingHorizontal: 24, paddingTop: 4 }}>
        <Text
          style={{
            color: colors.text,
            fontSize: 28,
            fontWeight: "900",
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
