import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";

const DAY_OPTIONS = ["Today", "Tomorrow", "Pick date"];
const CATEGORY_OPTIONS = [
  "Bookings",
  "Trips",
  "Messages",
  "Packing",
  "Personal",
  "Other",
];

export default function InlineAddChecklistSheet({
  visible,
  colors,
  title,
  setTitle,
  day,
  setDay,
  category,
  setCategory,
  onSubmit,
  onClose,
}: any) {
  const [showDayDropdown, setShowDayDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <Pressable
        onPress={onClose}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0,0,0,0.35)",
        }}
      />

      {/* Sheet */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: colors.surface,
          padding: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        {/* HEADER */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: colors.text, fontSize: 16 }}>
            Add checklist item
          </Text>

          <Pressable onPress={onClose}>
            <Text style={{ fontSize: 18, color: colors.text }}>✕</Text>
          </Pressable>
        </View>

        {/* TITLE INPUT */}
        <TextInput
          placeholder="Title"
          placeholderTextColor="#777"
          value={title}
          onChangeText={setTitle}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#333",
            marginTop: 12,
            color: colors.text,
          }}
        />

        {/* DAY + CATEGORY BUTTON ROW */}
        <View
          style={{
            flexDirection: "row",
            marginTop: 16,
            gap: 12,
          }}
        >
          {/* DAY BUTTON */}
          <Pressable
            onPress={() => {
              setShowDayDropdown(!showDayDropdown);
              setShowCategoryDropdown(false);
            }}
            style={{
              flex: 1,
              padding: 12,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Text style={{ color: colors.text }}>{day || "Select day"}</Text>
          </Pressable>

          {/* CATEGORY BUTTON */}
          <Pressable
            onPress={() => {
              setShowCategoryDropdown(!showCategoryDropdown);
              setShowDayDropdown(false);
            }}
            style={{
              flex: 1,
              padding: 12,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Text style={{ color: colors.text }}>{category || "Category"}</Text>
          </Pressable>
        </View>

        {/* DAY DROPDOWN */}
        {showDayDropdown && (
          <View
            style={{
              marginTop: 10,
              borderRadius: 12,
              backgroundColor: colors.surface,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            {DAY_OPTIONS.map((option) => (
              <Pressable
                key={option}
                onPress={() => {
                  setDay(option);
                  setShowDayDropdown(false);
                }}
                style={{ padding: 12 }}
              >
                <Text style={{ color: colors.text }}>{option}</Text>
              </Pressable>
            ))}
          </View>
        )}

        {/* CATEGORY DROPDOWN */}
        {showCategoryDropdown && (
          <View
            style={{
              marginTop: 10,
              borderRadius: 12,
              backgroundColor: colors.surface,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            {CATEGORY_OPTIONS.map((option) => (
              <Pressable
                key={option}
                onPress={() => {
                  setCategory(option);
                  setShowCategoryDropdown(false);
                }}
                style={{ padding: 12 }}
              >
                <Text style={{ color: colors.text }}>{option}</Text>
              </Pressable>
            ))}
          </View>
        )}

        {/* SUBMIT */}
        <Pressable
          onPress={onSubmit}
          style={{
            marginTop: 18,
            backgroundColor: colors.primary,
            padding: 12,
            borderRadius: 10,
          }}
        >
          <Text style={{ textAlign: "center" }}>Done</Text>
        </Pressable>
      </View>
    </>
  );
}
