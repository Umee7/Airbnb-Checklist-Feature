import { View } from "react-native";
import { useState } from "react";

import ChecklistRow from "./CheckListRow";

export default function Planlist({ colors }: any) {
  const [items, setItems] = useState([
    {
      id: "wishlist",
      title: "Save places you love",
      day: "",
      category: "Wishlist",
      completed: false,
    },
    {
      id: "booking",
      title: "Reserve your stay",
      day: "",
      category: "Bookings",
      completed: false,
    },
    {
      id: "message",
      title: "Message your host",
      day: "",
      category: "Messages",
      completed: false,
    },
  ]);

  const handleToggle = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  return (
    <View style={{ paddingTop: 8 }}>
      {items.map((item) => (
        <View key={item.id} style={{ paddingHorizontal: 24 }}>
          <ChecklistRow
            item={item}
            colors={colors}
            onNavigate={() => {}}
            onToggle={() => handleToggle(item.id)}
          />
        </View>
      ))}
    </View>
  );
}
