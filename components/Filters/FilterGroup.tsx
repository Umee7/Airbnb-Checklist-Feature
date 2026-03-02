import { View } from "react-native";
import { useState } from "react";
import FilterButton from "../Buttons/FilterButton";

interface Props {
  options: string[];
  defaultActive?: string;
}

export default function FilterGroup({ options, defaultActive }: Props) {
  const [active, setActive] = useState(defaultActive ?? options[0]);

  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingTop: 16,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {options.map((option) => (
        <View key={option} style={{ marginRight: 8 }}>
          <FilterButton
            label={option}
            active={active === option}
            onPress={() => setActive(option)}
          />
        </View>
      ))}
    </View>
  );
}
