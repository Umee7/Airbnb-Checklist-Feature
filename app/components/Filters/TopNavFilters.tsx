import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  Animated,
} from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import * as Haptics from "expo-haptics";

interface FilterItem {
  label: string;
  image: ImageSourcePropType;
}

interface TopNavFiltersProps {
  items: FilterItem[];
}

export default function TopNavFilters({ items }: TopNavFiltersProps) {
  const { colors } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const scales = useRef(items.map(() => new Animated.Value(1))).current;

  const animateTap = (index: number) => {
    Animated.sequence([
      Animated.timing(scales[index], {
        toValue: 0.5,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.timing(scales[index], {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      {items.map((item, index) => {
        const active = index === activeIndex;

        return (
          <TouchableOpacity
            key={index}
            style={styles.itemWrapper}
            onPress={() => {
              setActiveIndex(index);
              animateTap(index);
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }}
          >
            <Animated.View
              style={[
                styles.itemContent,
                { transform: [{ scale: scales[index] }] },
              ]}
            >
              <Image source={item.image} style={styles.image} />
              <Text style={{ color: colors.text }}>{item.label}</Text>
            </Animated.View>

            {active && (
              <View
                style={[styles.indicator, { backgroundColor: colors.primary }]}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    overflow: "hidden",
    height: 80,
    shadowColor: "#000",
    shadowOpacity: 0.32,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 18,
    elevation: 6,
  },

  itemWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },

  itemContent: {
    alignItems: "center",
    gap: 14,
  },

  image: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    transform: [{ scale: 2 }],
  },

  indicator: {
    position: "absolute",
    bottom: -3,
    height: 6,
    width: "100%",
    borderRadius: 6,
  },
});
