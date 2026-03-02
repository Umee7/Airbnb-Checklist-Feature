import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../hooks/useTheme";
import { Text, View, Pressable, TouchableOpacity } from "react-native";
import SearchIcon from "@/components/Icons/SearchIcon";
import NotificationIcon from "@/components/Icons/NotificationIcon";
import ProfileCard from "@/components/Cards/ProfileCard";

export default function Profile() {
  const { colors, isDarkMode, toggleDarkMode } = useTheme();

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
          <NotificationIcon
            width={24}
            height={24}
            color={colors.buttons.textOnSurface}
          />
        </Pressable>
      </View>

      {/*{/* Heading */}
      {/*<View style={{ paddingHorizontal: 24, paddingTop: 4 }}>
        <Text
          style={{
            color: colors.text,
            fontSize: 28,
            fontWeight: "900",
            letterSpacing: -0.5,
          }}
        >
          Profile
        </Text>
      </View>

      <TouchableOpacity onPress={() => toggleDarkMode()}>
        <Text style={{ color: colors.text }}>Mode</Text>
      </TouchableOpacity>*/}

      <View
        style={{
          paddingHorizontal: 24,
          paddingTop: 4,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Heading */}
        <Text
          style={{
            color: colors.text,
            fontSize: 28,
            fontWeight: "900",
            letterSpacing: -0.5,
          }}
        >
          Profile
        </Text>

        {/* Toggle */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={toggleDarkMode}
          style={{
            width: 56,
            height: 32,
            borderRadius: 999,
            justifyContent: "center",
            paddingHorizontal: 4,

            /* darker surface */
            backgroundColor: isDarkMode
              ? colors.buttons.surface
              : colors.border,
          }}
        >
          <View
            style={{
              height: 24,
              width: 24,
              borderRadius: 999,

              /* circle always white */
              backgroundColor: "#FFFFFF",

              /* move left/right */
              alignSelf: isDarkMode ? "flex-end" : "flex-start",
            }}
          />
        </TouchableOpacity>
      </View>

      {/* Cards Container */}
      <View
        style={{
          paddingHorizontal: 24,
          marginTop: 24,
          gap: 16,
        }}
      >
        {/* FULL WIDTH */}
        <ProfileCard
          style={{ width: "100%" }}
          image={require("assets/images/ProfileGraphic.png")}
          titleStyle={{ fontSize: 32, fontWeight: "900" }}
          subtitleStyle={{
            fontSize: 13,
            fontWeight: "600",
            color: colors.textMuted,
          }}
          imageSize={72}
          title="Umesh"
          subtitle="Guest"
        />

        {/* TWO COLUMN ROW */}
        <View style={{ flexDirection: "row", gap: 16 }}>
          <ProfileCard
            style={{ flex: 1 }}
            image={require("assets/images/CalenderGraphic.png")}
            titleStyle={{ fontSize: 14, fontWeight: "900" }}
            imageSize={72}
            title="Trips"
          />

          <ProfileCard
            style={{ flex: 1 }}
            image={require("assets/images/ChecklistGraphic.png")}
            titleStyle={{ fontSize: 14, fontWeight: "900" }}
            imageSize={72}
            title="Wishlists"
          />
        </View>

        {/* FULL WIDTH */}
        <ProfileCard
          layout="horizontal"
          image={require("assets/images/HostGraphic.png")}
          titleStyle={{ fontSize: 14, fontWeight: "900" }}
          imageSize={72}
          title="Settings"
          subtitle="It’s easy to start hosting and earn extra income."
        />
      </View>
    </SafeAreaView>
  );
}
