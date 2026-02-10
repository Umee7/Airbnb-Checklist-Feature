import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/useTheme";
import TopNavFilters from "../Filters/TopNavFilters";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

interface TopNavProps {
  title: string;
  icon?: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
}

export default function TopNav({
  title,
  icon = "search",
  onPress,
}: TopNavProps) {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      edges={["top"]}
      style={{ backgroundColor: colors.gradients.navigation[0] }}
    >
      <LinearGradient
        colors={colors.gradients.navigation}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradientContainer}
      >
        <StatusBar
          translucent
          backgroundColor="transparent"
          // barStyle={colors.statusBarStyle}
          animated={true}
        />

        <View style={styles.container}>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: colors.surface, shadowColor: colors.shadow },
            ]}
            onPress={onPress}
          >
            <Ionicons name={icon} size={18} color={colors.text} />
            <Text style={[styles.text, { color: colors.text }]}>{title}</Text>
          </TouchableOpacity>

          <TopNavFilters
            items={[
              {
                label: "Homes",
                image: require("../../../assets/images/image13.png"),
              },
              {
                label: "Experiences",
                image: require("../../../assets/images/image23.png"),
              },
              {
                label: "Services",
                image: require("../../../assets/images/image16.png"),
              },
            ]}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#E4E3DF",
  },

  gradientContainer: {
    shadowColor: "#000",
    shadowOpacity: 0.36,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 18,
    elevation: 6,
    overflow: "visible",
  },

  container: {
    paddingHorizontal: 24,
    paddingTop: 12,
    gap: 14,
  },

  button: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingVertical: 20,
    borderRadius: 32,
    shadowColor: "#000",
    shadowOpacity: 0.32,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 18,
    elevation: 6,
  },

  text: {
    fontSize: 14,
    fontWeight: "800",
  },
});
