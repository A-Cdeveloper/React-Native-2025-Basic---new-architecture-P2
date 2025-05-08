import type { DimensionValue } from "react-native";
import { View } from "react-native";

const Spacer = ({
  width = "100%",
  height = 40,
}: {
  width?: DimensionValue;
  height?: DimensionValue;
}) => {
  return <View style={{ width, height }} />;
};

export default Spacer;
