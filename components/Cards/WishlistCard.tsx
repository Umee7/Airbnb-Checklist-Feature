import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { useTheme } from "../../hooks/useTheme";

interface WishlistCardProps {
  title: string;
  subtitle: string;

  variant?: "single" | "grid";

  image?: ImageSourcePropType;
  images?: ImageSourcePropType[];

  isEditing: boolean;
  onDelete?: () => void;
  Icon?: React.ComponentType<any>;
}

export default function WishlistCard({
  title,
  subtitle,
  variant = "single",
  image,
  images = [],
  isEditing,
  onDelete,
  Icon,
}: WishlistCardProps) {
  const { colors } = useTheme();

  return (
    <View style={styles.card}>
      {/* IMAGE AREA */}
      <View style={styles.imageFrame}>
        {/* SINGLE IMAGE */}
        {variant === "single" && image && (
          <Image source={image} style={styles.fullImage} />
        )}

        {/* GRID IMAGE */}
        {/*{variant === "grid" && (
          <View style={styles.gridWrapper}>
            {(images.length ? images : new Array(4).fill(null)).map(
              (img, i) => (
                <View key={i} style={styles.gridCell}>
                  {img ? (
                    <Image source={img} style={styles.fullImage} />
                  ) : (
                    <View style={styles.placeholder} />
                  )}
                </View>
              ),
            )}
          </View>
        )}*/}
        {variant === "grid" && (
          <View style={styles.gridWrapper}>
            {(images.length ? images : Array(4).fill(null)).map((img, i) => (
              <View key={i} style={styles.gridCell}>
                {img ? (
                  <Image
                    source={img}
                    style={styles.gridImage}
                    resizeMode="cover"
                  />
                ) : (
                  <View style={styles.placeholder} />
                )}
              </View>
            ))}
          </View>
        )}

        {/* DELETE ICON */}
        {isEditing && Icon && (
          <TouchableOpacity style={styles.deleteIcon} onPress={onDelete}>
            <Icon width={24} height={24} />
          </TouchableOpacity>
        )}
      </View>

      {/* TEXT BLOCK */}
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
    gap: 8,
  },

  imageFrame: {
    height: 156,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "transparent", // FIX 1
  },

  fullImage: {
    width: "100%",
    height: "100%",
  },

  /* ---- GRID WITH 2px INTERNAL GAP ---- */
  gridWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
  },

  gridCell: {
    width: "50%",
    height: "50%",
    padding: 2, // your 4px total gap
  },

  gridImage: {
    width: "100%",
    height: "100%",
  },

  placeholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "#e5e5e5",
  },

  deleteIcon: {
    position: "absolute",
    top: 8,
    left: 8,
  },

  textContainer: {},

  title: {
    fontSize: 14,
    fontWeight: "600",
  },

  subtitle: {
    fontSize: 12,
  },
});
