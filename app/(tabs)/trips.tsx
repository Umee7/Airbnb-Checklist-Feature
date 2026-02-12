import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../hooks/useTheme";
import ChecklistFeature from "../components/Checklists/ChecklistFeature";

export default function Trips() {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.surface }}>
      <ChecklistFeature colors={colors} />
    </SafeAreaView>
  );
}
