import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../hooks/useTheme";
import { Text, View, Pressable } from "react-native";
import SettingsIcon from "@/components/Icons/SettingsIcon";
import SearchIcon from "@/components/Icons/SearchIcon";
import FilterGroup from "@/components/Filters/FilterGroup";
import MessagesEmptyState from "@/components/Messages/MessageEmptyState";

export default function Messages() {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.surface }}>
      {/* Actions */}
      <View
        style={{
          paddingHorizontal: 24,
          paddingTop: 4,
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Pressable
          style={{
            height: 40,
            width: 40,
            borderRadius: 80,
            backgroundColor: colors.buttons.surface,
            marginRight: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SearchIcon
            width={20}
            height={20}
            color={colors.buttons.textOnSurface}
          />
        </Pressable>

        <Pressable
          style={{
            height: 40,
            width: 40,
            borderRadius: 80,
            backgroundColor: colors.buttons.surface,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SettingsIcon
            width={24}
            height={24}
            color={colors.buttons.textOnSurface}
          />
        </Pressable>
      </View>

      {/* Heading */}
      <View style={{ paddingHorizontal: 24, paddingTop: 4 }}>
        <Text
          style={{
            color: colors.text,
            fontSize: 28,
            fontWeight: "900",
            letterSpacing: -0.5,
          }}
        >
          Messages
        </Text>
      </View>

      {/* Filters */}
      <FilterGroup options={["All", "Traveling", "Support"]} />

      {/* Empty State */}
      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: -96,
          left: 0,
          right: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MessagesEmptyState />
      </View>
    </SafeAreaView>
  );
}
