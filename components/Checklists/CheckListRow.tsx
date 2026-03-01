import { Pressable, View, Text } from "react-native";
import { useEffect, useState, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function ChecklistRow({
  item,
  colors,
  onNavigate,
  onToggle,
}: any) {
  const [completed, setCompleted] = useState(false);
  const [hidden, setHidden] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (completed) {
      timerRef.current = setTimeout(() => {
        onToggle(true);
        setHidden(true);
      }, 3000);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [completed, onToggle]);

  if (hidden) return null;

  return (
    <Pressable onPress={onNavigate} style={{ marginBottom: 14 }}>
      <View
        style={{
          borderRadius: 24,
          backgroundColor: colors.surface,
          padding: 1,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.18,
          shadowRadius: 10,
          elevation: 3,
        }}
      >
        <LinearGradient
          colors={colors.checklist.gradients.primary}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{
            height: 82,
            borderRadius: 23,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 18,
          }}
        >
          <View style={{ flex: 1, justifyContent: "center", marginRight: 24 }}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{
                color: completed ? "#777" : colors.text,
                fontSize: 16,
                textDecorationLine: completed ? "line-through" : "none",
              }}
            >
              {item.title}
            </Text>

            <View
              style={{
                marginTop: 6,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#888", fontSize: 12 }}>{item.day}</Text>
              <Text style={{ color: "#888", fontSize: 12, marginLeft: 12 }}>
                {item.category}
              </Text>
            </View>
          </View>

          {/* CHECKBOX */}
          <Pressable
            onPress={(e) => {
              e.stopPropagation();

              if (completed) {
                if (timerRef.current) clearTimeout(timerRef.current);
                setCompleted(false);
              } else {
                setCompleted(true);
              }
            }}
          >
            {/* gradient border wrapper */}
            <LinearGradient
              colors={["#EFEFEF", "#E1E1E1"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{
                width: 30,
                height: 30,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* inner checkbox */}
              <View
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 50,
                  backgroundColor: completed
                    ? "#D10A46"
                    : "rgba(204,204,204,0.8)",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {completed && (
                  <View
                    style={{
                      position: "absolute",
                      width: 24,
                      height: 24,
                      borderRadius: 24,
                      borderWidth: 2,
                      borderColor: "rgba(255,255,255,0.2)",
                    }}
                  />
                )}
              </View>
            </LinearGradient>
          </Pressable>
        </LinearGradient>
      </View>
    </Pressable>
  );
}
