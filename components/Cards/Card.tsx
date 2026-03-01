import { useTheme } from "@/hooks/useTheme";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";

interface CardProps {
  id: string;
  title: string;
  subtitle: string;
  image?: ImageSourcePropType;
  badgeText?: string;
  Icon?: React.ComponentType<any>;

  liked: boolean;
  onToggleLike: () => void;
  onPress: () => void;
}

export default function Card({
  id,
  title,
  subtitle,
  image,
  badgeText,
  Icon,
  liked,
  onToggleLike,
  onPress,
}: CardProps) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <ImageBackground source={image} style={styles.imageFrame}>
        {badgeText && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badgeText}</Text>
          </View>
        )}

        {Icon && (
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={(e) => {
              e.stopPropagation(); // prevent card press
              onToggleLike();
            }}
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

      <View style={styles.textContainer}>
        <Text numberOfLines={2} style={[styles.title, { color: colors.text }]}>
          {title}
        </Text>

        <Text style={[styles.subtitle, { color: colors.textMuted }]}>
          {subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    gap: 8,
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
    gap: 2,
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
