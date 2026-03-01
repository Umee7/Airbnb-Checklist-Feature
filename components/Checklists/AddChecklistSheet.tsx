import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
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

export default function AddChecklistSheet({
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
        onPress={() => {
          setShowDayDropdown(false);
          setShowCategoryDropdown(false);
          onClose();
        }}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0,0,0,0.35)",
          zIndex: 1,
        }}
      />

      {/* FLOATING DROPDOWN */}
      {(showDayDropdown || showCategoryDropdown) && (
        <View
          style={{
            position: "absolute",
            left: 40,
            right: 40,
            bottom: 240,
            maxHeight: 140,
            borderRadius: 14,
            backgroundColor: colors.surface,
            borderWidth: 1,
            borderColor: colors.border,
            shadowColor: "#000",
            shadowOpacity: 0.2,
            shadowRadius: 12,
            elevation: 20,
            zIndex: 999,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {showDayDropdown &&
              DAY_OPTIONS.map((option) => (
                <Pressable
                  key={option}
                  onPress={() => {
                    setDay(option);
                    setShowDayDropdown(false);
                  }}
                  style={{ padding: 14 }}
                >
                  <Text style={{ color: colors.text }}>{option}</Text>
                </Pressable>
              ))}

            {showCategoryDropdown &&
              CATEGORY_OPTIONS.map((option) => (
                <Pressable
                  key={option}
                  onPress={() => {
                    setCategory(option);
                    setShowCategoryDropdown(false);
                  }}
                  style={{ padding: 14 }}
                >
                  <Text style={{ color: colors.text }}>{option}</Text>
                </Pressable>
              ))}
          </ScrollView>
        </View>
      )}

      {/* SHEET WITH KEYBOARD HANDLING */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 5,
        }}
      >
        <View
          style={{
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

          {/* TITLE */}
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

          {/* BUTTON ROW */}
          <View
            style={{
              flexDirection: "row",
              marginTop: 16,
              gap: 12,
            }}
          >
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
              <Text style={{ color: colors.text }}>{category}</Text>
            </Pressable>
          </View>

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
      </KeyboardAvoidingView>
    </>
  );
}
