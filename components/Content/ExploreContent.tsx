import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import SectionCarousel from "../Carousels/SectionCarousel";
import Card from "../Cards/Card";
import WishListsIcon from "../Icons/WishListsIcon";

import { useWishlist } from "@/hooks/useWishlist";
import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";
import { useRouter } from "expo-router";
import { ALL_LISTINGS } from "@/lib/listings";

export default function ExploreContent() {
  const { isLiked, toggleLike } = useWishlist();
  const { trackView } = useRecentlyViewed();
  const router = useRouter();

  /**
   * Section slicing logic
   * Adjust ranges however you want visually
   */
  const nearby = ALL_LISTINGS.slice(0, 4);
  const popular = ALL_LISTINGS.slice(4, 8);
  const recommended = ALL_LISTINGS.slice(8, 12);

  const renderCard = (item: any) => (
    <Card
      {...item}
      Icon={WishListsIcon}
      liked={isLiked(item.id)}
      onToggleLike={() => toggleLike(item.id)}
      onPress={() => {
        trackView(item.id);
        router.push({
          pathname: "/listing/[id]",
          params: { id: item.id },
        });
      }}
    />
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SectionCarousel
        title="Popular homes near you"
        data={nearby}
        renderItem={renderCard}
      />

      <SectionCarousel
        title="Trending stays"
        data={popular}
        renderItem={renderCard}
      />

      <SectionCarousel
        title="Recommended for you"
        data={recommended}
        renderItem={renderCard}
      />

      <SectionCarousel
        title="Beachfront escapes"
        data={[...nearby].reverse()}
        renderItem={renderCard}
      />

      <SectionCarousel
        title="Weekend getaways"
        data={[...nearby].sort(() => 0.5 - Math.random())}
        renderItem={renderCard}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 28,
    paddingTop: 30,
    paddingBottom: 30,
  },
});
