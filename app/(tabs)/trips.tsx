import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../hooks/useTheme";
import { Text, FlatList, Pressable, View } from "react-native";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { router, Href } from "expo-router";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import ChecklistRow from "../components/Checklists/CheckListRow";
import AddChecklistSheet from "../components/Checklists/AddChecklistSheet";
import AddIcon from "../components/Icons/AddIcon";

const categoryRoutes: Record<string, Href | null> = {
  Bookings: "/",
  Trips: "/trips",
  Messages: "/messages",
  Packing: null,
  Personal: null,
  Other: null,
};

export default function Trips() {
  const { colors } = useTheme();

  const checklistItems = useQuery(api.checklists.getChecklistItems);
  const createChecklistItem = useMutation(api.checklists.createChecklistItem);
  const toggleChecklistItem = useMutation(api.checklists.toggleChecklistItem);

  const [showAddSheet, setShowAddSheet] = useState(false);
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [category, setCategory] = useState("Personal");

  if (!checklistItems) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.surface }}>
        <Text style={{ color: colors.text, padding: 16 }}>Loading...</Text>
      </SafeAreaView>
    );
  }

  const visibleItems = checklistItems.filter((i) => !i.completed);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.surface }}>
      <FlatList
        data={visibleItems}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 8 }}
        renderItem={({ item }) => {
          const route =
            categoryRoutes[item.category as keyof typeof categoryRoutes];

          return (
            <View style={{ paddingHorizontal: 24 }}>
              <ChecklistRow
                item={item}
                colors={colors}
                onNavigate={() => route && router.replace(route)}
                onToggle={() =>
                  toggleChecklistItem({
                    id: item._id,
                    completed: true,
                  })
                }
              />
            </View>
          );
        }}
        ListFooterComponent={
          <View style={{ paddingHorizontal: 24 }}>
            <Pressable onPress={() => setShowAddSheet(true)}>
              <LinearGradient
                colors={["#FFEBEF", "#FFFFFF"]}
                style={{
                  height: 82,
                  borderRadius: 24,
                  borderWidth: 1,
                  borderStyle: "dashed",
                  borderColor: "#D10A46",
                  paddingHorizontal: 18,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    flex: 1,
                    color: "#D10A46",
                    fontSize: 16,
                  }}
                >
                  Add New Checklist
                </Text>

                {/* FIXED ADD BUTTON */}
                <View
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 30,
                    shadowColor: "#000",
                    shadowOpacity: 0.9,
                    shadowRadius: 3,
                    shadowOffset: { width: 0, height: 0 },
                    elevation: 3,
                    overflow: "hidden",
                  }}
                >
                  <LinearGradient
                    colors={["#D10A46", "#FF385C"]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    style={{
                      flex: 1,
                      borderRadius: 30,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* dark inset */}
                    <View
                      pointerEvents="none"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: 30,
                        borderTopWidth: 1,
                        borderLeftWidth: 1,
                        borderColor: "rgba(0,0,0,0.20)",
                      }}
                    />

                    {/* light inset */}
                    <View
                      pointerEvents="none"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: 30,
                        borderBottomWidth: 1,
                        borderRightWidth: 1,
                        borderColor: "rgba(255,255,255,0.38)",
                      }}
                    />

                    <AddIcon width={20} height={20} color="#FFF" />
                  </LinearGradient>
                </View>
              </LinearGradient>
            </Pressable>
          </View>
        }
      />

      <AddChecklistSheet
        visible={showAddSheet}
        colors={colors}
        title={title}
        setTitle={setTitle}
        day={day}
        setDay={setDay}
        category={category}
        setCategory={setCategory}
        onClose={() => setShowAddSheet(false)}
        onSubmit={async () => {
          if (!title || !day) return;

          await createChecklistItem({ title, day, category });

          setTitle("");
          setDay("");
          setCategory("Personal");
          setShowAddSheet(false);
        }}
      />
    </SafeAreaView>
  );
}
