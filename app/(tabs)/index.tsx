import { useTheme } from "../../hooks/useTheme";
import { StatusBar, View } from "react-native";
import ExploreContent from "../components/Content/ExploreContent";
import TopNav from "../components/Navigation/TopNav";

export default function Index() {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.surface,
      }}
    >
      <View>
        <TopNav title="Search for Homes" icon="search" />
        <ExploreContent />
      </View>
    </View>
  );
}
