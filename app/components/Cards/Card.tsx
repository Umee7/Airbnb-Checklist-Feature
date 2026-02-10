import { useTheme } from "@/hooks/useTheme";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";

interface CardProps {
  title: string;
  subtitle: string;
  image?: ImageSourcePropType;
  badgeText?: string;
  Icon?: React.ComponentType<any>;
}

export default function Card({
  title,
  subtitle,
  image,
  badgeText,
  Icon,
}: CardProps) {
  const { colors } = useTheme();
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.card}>
      <ImageBackground source={image} style={styles.imageFrame}>
        {badgeText && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badgeText}</Text>
          </View>
        )}

        {Icon && (
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => setLiked(!liked)}
          >
            <Icon
              width={24}
              height={24}
              stroke="#FFFFFF"
              fill={liked ? "#FF385C" : "rgba(0,0,0,0.6)"}
            />
          </TouchableOpacity>
        )}
      </ImageBackground>

      {/* TEXT BLOCK (auto-layout equivalent) */}
      <View style={styles.textContainer}>
        <Text numberOfLines={2} style={[styles.title, { color: colors.text }]}>
          {title}
        </Text>

        <Text style={[styles.subtitle, { color: colors.textMuted }]}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    gap: 8, // image → text block
  },

  imageFrame: {
    height: 156,
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#e5e5e5",
    overflow: "hidden",
    justifyContent: "space-between",
  },

  textContainer: {
    gap: 2, // title → subtitle
  },

  badge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },

  badgeText: {
    fontSize: 10,
    fontWeight: "600",
  },

  iconWrapper: {
    position: "absolute",
    top: 8,
    right: 8,
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
  },

  subtitle: {
    fontSize: 12,
  },
});
