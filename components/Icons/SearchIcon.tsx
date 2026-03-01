import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export default function SearchIcon({ width, height, color }: SvgProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        d="M17 17L21 21"
        stroke={color || "#808080"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"
        stroke={color || "#D10A46"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}
