import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme, primitive } from "../../hooks/useTheme";
import { Text, View, Pressable, FlatList, Dimensions } from "react-native";
import { useState } from "react";

import WishlistCard from "@/components/Cards/WishlistCard";
import CloseIcon from "../../components/Icons/AddIcon";

export default function Wishlists() {
  const { colors } = useTheme();
  const [isEditing, setIsEditing] = useState(false);

  // ----- LAYOUT CONSTANTS -----
  const SIDE_PADDING = 24;
  const CARD_GAP = 12;

  const CARD_WIDTH =
    (Dimensions.get("window").width - SIDE_PADDING * 2 - CARD_GAP) / 2;

  // ----- MOCK DATA -----

  const recentlyViewedImages = [
    require("../../assets/card.png"),
    require("../../assets/card2.jpg"),
    require("../../assets/card.png"),
    require("../../assets/card2.jpg"),
  ];

  const collections = [
    {
      id: "recent",
      variant: "grid",
      title: "Recently viewed",
      subtitle: "12 stays",
      images: recentlyViewedImages,
    },
    {
      id: "1",
      variant: "single",
      title: "Goa Trip",
      subtitle: "4 stays",
      image: require("../../assets/card.png"),
    },
    {
      id: "2",
      variant: "single",
      title: "Beach Stays",
      subtitle: "7 stays",
      image: require("../../assets/card2.jpg"),
    },
    {
      id: "3",
      variant: "single",
      title: "Beach Stays",
      subtitle: "7 stays",
      image: require("../../assets/card.png"),
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.surface }}>
      {/* EDIT BUTTON */}
      <View
        style={{
          paddingHorizontal: SIDE_PADDING,
          paddingTop: 4,
          alignItems: "flex-end",
        }}
      >
        <Pressable
          onPress={() => setIsEditing(!isEditing)}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 22,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 80,
            backgroundColor: primitive.grey[50],
          }}
        >
          <Text
            style={{
              color: colors.text,
              fontSize: 16,
              fontWeight: "700",
              letterSpacing: -0.5,
            }}
          >
            {isEditing ? "Done" : "Edit"}
          </Text>
        </Pressable>
      </View>

      {/* HEADING */}
      <View style={{ paddingHorizontal: SIDE_PADDING, paddingTop: 4 }}>
        <Text
          style={{
            color: colors.text,
            fontSize: 28,
            fontWeight: "900",
            letterSpacing: -0.5,
          }}
        >
          Wishlists
        </Text>
      </View>

      {/* GRID */}
      <FlatList
        data={collections}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: SIDE_PADDING,
          paddingTop: 24,
          paddingBottom: 40,
        }}
        columnWrapperStyle={{
          gap: CARD_GAP,
          marginBottom: CARD_GAP,
        }}
        renderItem={({ item }) => {
          const isRecent = item.id === "recent";

          return (
            <View style={{ width: CARD_WIDTH }}>
              <WishlistCard
                variant={item.variant as any}
                title={item.title}
                subtitle={item.subtitle}
                image={(item as any).image}
                images={(item as any).images}
                isEditing={isRecent ? false : isEditing}
                Icon={isRecent ? undefined : CloseIcon}
                onDelete={() => {}}
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
