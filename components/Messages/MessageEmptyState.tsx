import { View, Text } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import MessagesGraphic from "@/components/Icons/MessagesGraphic";

export default function MessagesEmptyState() {
  const { colors } = useTheme();

  return (
    <View
      style={{
        alignItems: "center",
        paddingHorizontal: 32,
      }}
    >
      <MessagesGraphic color={colors.text} />

      <View
        style={{
          alignItems: "center",
          marginTop: 12,
        }}
      >
        <Text
          style={{
            color: colors.text,
            fontFamily: "Inter",
            fontSize: 16,
            fontWeight: "800",
            letterSpacing: -0.32,
            textAlign: "center",
          }}
        >
          You don’t have any messages
        </Text>

        <Text
          style={{
            color: colors.textMuted,
            fontFamily: "Inter",
            fontSize: 15,
            fontWeight: "700",
            letterSpacing: -0.32,
            textAlign: "center",
            marginTop: 4,
          }}
        >
          When you recieve a new message, it will appear here.
        </Text>
      </View>
    </View>
  );
}
