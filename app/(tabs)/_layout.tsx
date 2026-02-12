import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SearchIcon from "../components/Icons/SearchIcon";
import ProfileIcon from "../components/Icons/ProfileIcon";
import TripsIcon from "../components/Icons/TripsIcon";
import MessageIcon from "../components/Icons/MessageIcon";
import WishListsIcon from "../components/Icons/WishListsIcon";
import { useTheme } from "../../hooks/useTheme";

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopWidth: 0.5,
          borderTopColor: colors.border,
          height: insets.bottom + 58,
          paddingTop: 8,
          paddingBottom: insets.bottom + 6,
          paddingLeft: 14,
          paddingRight: 14,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: 700,
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Explore",
          tabBarIcon: ({ size, color }: { size: number; color: string }) => (
            <SearchIcon width={size} height={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="wishlists"
        options={{
          title: "Wishlists",
          tabBarIcon: ({ size, color }: { size: number; color: string }) => (
            <WishListsIcon
              width={size}
              height={size}
              stroke={color}
              fill="none"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="trips"
        options={{
          title: "Trips",
          tabBarIcon: ({ size, color }: { size: number; color: string }) => (
            <TripsIcon width={size} height={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ size, color }: { size: number; color: string }) => (
            <MessageIcon width={size} height={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          tabBarIcon: ({ size, color }: { size: number; color: string }) => (
            <ProfileIcon width={size} height={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
