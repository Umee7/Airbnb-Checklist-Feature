import { Pressable, Text } from "react-native";
import { useTheme } from "@/hooks/useTheme";

interface Props {
  label: string;
  active?: boolean;
  onPress?: () => void;
}

export default function FilterButton({
  label,
  active = false,
  onPress,
}: Props) {
  const { colors } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 80,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: active
          ? colors.buttons.surfacePrimary
          : colors.buttons.surface,
      }}
    >
      <Text
        style={{
          color: active ? colors.buttons.textOnPrimary : colors.text,
          fontFamily: "Inter",
          fontSize: 14, // 1rem ≈ 16px
          fontWeight: "800",
          letterSpacing: -0.5, // -0.03125rem ≈ -0.5px
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
