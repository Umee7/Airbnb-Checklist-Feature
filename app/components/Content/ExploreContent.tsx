import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import SectionCarousel from "../Carousels/SectionCarousel";
import Card from "../Cards/Card";
import WishListsIcon from "../Icons/WishListsIcon";

export default function ExploreContent() {
  const nearby = [
    {
      title: "Modern apartment in Mumbai",
      subtitle: "From $104 / guest",
      badgeText: "Guest Favourite",
      image: require("../../../assets/card.png"),
    },
    {
      title: "Explore Notre Dame with a restoration",
      subtitle: "From $80 / guest",
      badgeText: "Guest Favourite",
      image: require("../../../assets/card2.jpg"),
    },
    {
      title: "Explore Notre Dame with a restoration",
      subtitle: "From $80 / guest",
      badgeText: "Guest Favourite",
      image: require("../../../assets/card2.jpg"),
    },
  ];

  const popular = [
    {
      title: "Beach house in Goa",
      subtitle: "From $210 / guest",
      badgeText: "Popular",
      image: require("../../../assets/card.png"),
    },
    {
      title: "Mountain cabin in Manali",
      subtitle: "From $120 / guest",
      badgeText: "Top rated",
      image: require("../../../assets/card2.jpg"),
    },
    {
      title: "Mountain cabin in Manali",
      subtitle: "From $120 / guest",
      badgeText: "Top rated",
      image: require("../../../assets/card2.jpg"),
    },
  ];

  const recommended = [
    {
      title: "Studio apartment in Delhi",
      subtitle: "From $90 / guest",
      badgeText: "Recommended",
      image: require("../../../assets/card.png"),
    },
    {
      title: "Lake view stay in Udaipur",
      subtitle: "From $160 / guest",
      badgeText: "Guest Favourite",
      image: require("../../../assets/card2.jpg"),
    },
    {
      title: "Lake view stay in Udaipur",
      subtitle: "From $160 / guest",
      badgeText: "Guest Favourite",
      image: require("../../../assets/card2.jpg"),
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SectionCarousel
        title="Popular homes in France"
        data={nearby}
        renderItem={(item) => <Card {...item} Icon={WishListsIcon} />}
      />

      <SectionCarousel
        title="Popular experiences in Paris"
        data={popular}
        renderItem={(item) => <Card {...item} Icon={WishListsIcon} />}
      />

      <SectionCarousel
        title="Recommended for you"
        data={recommended}
        renderItem={(item) => <Card {...item} Icon={WishListsIcon} />}
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
