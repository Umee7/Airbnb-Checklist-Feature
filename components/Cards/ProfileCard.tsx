// import {
//   Text,
//   Image,
//   Pressable,
//   View,
//   ViewStyle,
//   TextStyle,
//   ImageStyle,
// } from "react-native";
// import { useTheme } from "@/hooks/useTheme";

// interface Props {
//   image: any;
//   title: string;
//   subtitle: string;

//   onPress?: () => void;
//   style?: ViewStyle;

//   /* IMAGE CONTROL */
//   imageSize?: number;
//   imageStyle?: ImageStyle;

//   /* TEXT CONTROL */
//   titleStyle?: TextStyle;
//   subtitleStyle?: TextStyle;

//   /* LAYOUT CONTROL */
//   layout?: "vertical" | "horizontal";
// }

// export default function ProfileCard({
//   image,
//   title,
//   subtitle,
//   onPress,
//   style,
//   imageSize = 48,
//   imageStyle,
//   titleStyle,
//   subtitleStyle,
//   layout = "vertical",
// }: Props) {
//   const { colors } = useTheme();

//   const isHorizontal = layout === "horizontal";

//   return (
//     <Pressable
//       onPress={onPress}
//       style={[
//         {
//           padding: 24, // locked — all cards same
//           borderRadius: 14,
//           backgroundColor: colors.surface,
//           borderWidth: 0.5,
//           borderColor: colors.border,

//           flexDirection: isHorizontal ? "row" : "column",
//           alignItems: isHorizontal ? "center" : "center",
//           justifyContent: isHorizontal ? "flex-start" : "center",
//           gap: 8,

//           shadowColor: "#000",
//           shadowOffset: { width: 0, height: 4 },
//           shadowOpacity: 0.32,
//           shadowRadius: 18,
//           elevation: 6,
//         },
//         style, // width / flex only from parent
//       ]}
//     >
//       {/* IMAGE */}
//       <Image
//         source={image}
//         style={[
//           {
//             width: imageSize,
//             height: imageSize,
//             resizeMode: "contain",
//           },
//           imageStyle,
//         ]}
//       />

//       {/* TEXT BLOCK */}
//       <View
//         style={{
//           alignItems: isHorizontal ? "flex-start" : "center",
//           flexShrink: 1,
//         }}
//       >
//         <Text
//           style={[
//             {
//               color: colors.text,
//               fontSize: 16,
//               fontWeight: "700",
//               letterSpacing: -0.3,
//             },
//             titleStyle,
//           ]}
//         >
//           {title}
//         </Text>

//         <Text
//           style={[
//             {
//               color: colors.textMuted,
//               fontSize: 14,
//               fontWeight: "600",
//               marginTop: 4,
//             },
//             subtitleStyle,
//           ]}
//         >
//           {subtitle}
//         </Text>
//       </View>
//     </Pressable>
//   );
// }

import {
  Text,
  Image,
  Pressable,
  View,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";
import { useTheme } from "@/hooks/useTheme";

interface Props {
  image: any;
  title: string;
  subtitle?: string;

  onPress?: () => void;
  style?: ViewStyle;

  imageSize?: number;
  imageStyle?: ImageStyle;

  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;

  layout?: "vertical" | "horizontal";
}

export default function ProfileCard({
  image,
  title,
  subtitle,
  onPress,
  style,
  imageSize = 48,
  imageStyle,
  titleStyle,
  subtitleStyle,
  layout = "vertical",
}: Props) {
  const { colors } = useTheme();
  const isHorizontal = layout === "horizontal";

  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          padding: 24,
          borderRadius: 14,
          backgroundColor: colors.surface,
          borderWidth: 0.5,
          borderColor: colors.border,

          flexDirection: isHorizontal ? "row" : "column",
          alignItems: "center",
          justifyContent: isHorizontal ? "flex-start" : "center",
          gap: 8,

          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.32,
          shadowRadius: 18,
          elevation: 6,
        },
        style,
      ]}
    >
      <Image
        source={image}
        style={[
          {
            width: imageSize,
            height: imageSize,
            resizeMode: "contain",
          },
          imageStyle,
        ]}
      />

      <View
        style={{
          alignItems: isHorizontal ? "flex-start" : "center",
          flexShrink: 1,
        }}
      >
        <Text
          style={[
            {
              color: colors.text,
              fontSize: 16,
              fontWeight: "700",
              letterSpacing: -0.3,
            },
            titleStyle,
          ]}
        >
          {title}
        </Text>

        {subtitle && (
          <Text
            style={[
              {
                color: colors.textMuted,
                fontSize: 14,
                fontWeight: "600",
                marginTop: 4,
              },
              subtitleStyle,
            ]}
          >
            {subtitle}
          </Text>
        )}
      </View>
    </Pressable>
  );
}
