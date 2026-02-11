import { View, Text, TextInput, Pressable } from "react-native";

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

        <TextInput
          placeholder="YYYY-MM-DD"
          placeholderTextColor="#777"
          value={day}
          onChangeText={setDay}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#333",
            marginTop: 12,
            color: colors.text,
          }}
        />

        <TextInput
          placeholder="Category"
          placeholderTextColor="#777"
          value={category}
          onChangeText={setCategory}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#333",
            marginTop: 12,
            color: colors.text,
          }}
        />

        <Pressable
          onPress={onSubmit}
          style={{
            marginTop: 16,
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
