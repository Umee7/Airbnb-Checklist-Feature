import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export default function NotificationIcon({
  width = 24,
  height = 24,
  color = "black",
}: SvgProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M14.625 16.5C14.625 17.9497 13.4497 19.125 12 19.125C10.5503 19.125 9.375 17.9497 9.375 16.5"
        stroke={color}
        strokeWidth={1.125}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <Path
        d="M11 5C11 4.44771 11.4477 4 12 4C12.5523 4 13 4.44771 13 5"
        stroke={color}
        strokeWidth={1.125}
        strokeLinejoin="round"
      />

      <Path
        d="M17.4233 16.5H6.57665C5.84396 16.5 5.25 15.906 5.25 15.1733C5.25 14.8215 5.38977 14.4841 5.63857 14.2352L6.09099 13.7828C6.51295 13.3609 6.75 12.7886 6.75 12.1919V10.125C6.75 7.22551 9.10051 4.875 12 4.875C14.8995 4.875 17.25 7.2255 17.25 10.125V12.1919C17.25 12.7886 17.4871 13.3609 17.909 13.7828L18.3614 14.2352C18.6102 14.4841 18.75 14.8215 18.75 15.1733C18.75 15.906 18.156 16.5 17.4233 16.5Z"
        stroke={color}
        strokeWidth={1.125}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
