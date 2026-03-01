import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/useTheme";

interface SectionCarouselProps<T> {
  title: string;
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

export default function SectionCarousel<T>({
  title,
  data,
  renderItem,
}: SectionCarouselProps<T>) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        <Ionicons name="chevron-forward" size={18} color={colors.text} />
      </TouchableOpacity>

      {/* Horizontal scroll */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {data.map((item, index) => (
          <View key={index} style={styles.cardWrapper}>
            {renderItem(item, index)}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 24,
    gap: 4,
  },

  title: {
    fontSize: 18,
    fontWeight: "900",
  },

  scrollContent: {
    paddingLeft: 24,
    paddingRight: 8,
    gap: 12,
  },

  cardWrapper: {
    width: 160,
  },
});
