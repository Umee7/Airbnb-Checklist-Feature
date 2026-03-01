// import React from "react";
// import { ScrollView, StyleSheet } from "react-native";
// import SectionCarousel from "../Carousels/SectionCarousel";
// import Card from "../Cards/Card";
// import WishListsIcon from "../Icons/WishListsIcon";

// import { useWishlist } from "@/hooks/useWishlist";
// import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";
// import { useRouter } from "expo-router";

// export default function ExploreContent() {
//   const { isLiked, toggleLike } = useWishlist();
//   const { trackView } = useRecentlyViewed();
//   const router = useRouter();

//   const nearby = [
//     {
//       id: "nearby-1",
//       title: "Modern apartment in Mumbai",
//       subtitle: "From $104 / guest",
//       badgeText: "Guest Favourite",
//       image: require("../../assets/card.png"),
//     },
//     {
//       id: "nearby-2",
//       title: "Explore Notre Dame with a restoration",
//       subtitle: "From $80 / guest",
//       badgeText: "Guest Favourite",
//       image: require("../../assets/card2.jpg"),
//     },
//     {
//       id: "nearby-3",
//       title: "Explore Notre Dame with a restoration",
//       subtitle: "From $80 / guest",
//       badgeText: "Guest Favourite",
//       image: require("../../assets/card2.jpg"),
//     },
//   ];

//   const popular = [
//     {
//       id: "popular-1",
//       title: "Beach house in Goa",
//       subtitle: "From $210 / guest",
//       badgeText: "Popular",
//       image: require("../../assets/card.png"),
//     },
//     {
//       id: "popular-2",
//       title: "Mountain cabin in Manali",
//       subtitle: "From $120 / guest",
//       badgeText: "Top rated",
//       image: require("../../assets/card2.jpg"),
//     },
//     {
//       id: "popular-3",
//       title: "Mountain cabin in Manali",
//       subtitle: "From $120 / guest",
//       badgeText: "Top rated",
//       image: require("../../assets/card2.jpg"),
//     },
//   ];

//   const recommended = [
//     {
//       id: "recommended-1",
//       title: "Studio apartment in Delhi",
//       subtitle: "From $90 / guest",
//       badgeText: "Recommended",
//       image: require("../../assets/card.png"),
//     },
//     {
//       id: "recommended-2",
//       title: "Lake view stay in Udaipur",
//       subtitle: "From $160 / guest",
//       badgeText: "Guest Favourite",
//       image: require("../../assets/card2.jpg"),
//     },
//     {
//       id: "recommended-3",
//       title: "Lake view stay in Udaipur",
//       subtitle: "From $160 / guest",
//       badgeText: "Guest Favourite",
//       image: require("../../assets/card2.jpg"),
//     },
//   ];

//   /**
//    * Interaction Adapter
//    * Connects UI → Backend
//    */
//   const renderCard = (item: any) => (
//     <Card
//       {...item}
//       Icon={WishListsIcon}
//       liked={isLiked(item.id)}
//       onToggleLike={() => toggleLike(item.id)}
//       onPress={() => {
//         trackView(item.id);
//         router.push(`/listing/${item.id}`);
//       }}
//     />
//   );

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <SectionCarousel
//         title="Popular homes in France"
//         data={nearby}
//         renderItem={renderCard}
//       />

//       <SectionCarousel
//         title="Popular experiences in Paris"
//         data={popular}
//         renderItem={renderCard}
//       />

//       <SectionCarousel
//         title="Recommended for you"
//         data={recommended}
//         renderItem={renderCard}
//       />
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     gap: 28,
//     paddingTop: 30,
//     paddingBottom: 30,
//   },
// });

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
