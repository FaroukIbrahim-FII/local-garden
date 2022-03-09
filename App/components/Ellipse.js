import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from "react-native-svg";

function Logo({ style }) {
  return (
    <View style={[styles.container, style]}>
      <Svg
        width="376"
        height="548"
        viewBox="0 0 376 548"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M18.7588 532.463C-71.448 480.915 209.682 312.65 192.557 202.3C176.162 96.6596 45.8194 28.2581 111.399 -75.5304C213.272 -236.757 622.492 -3.31563 673.518 149.13C730.824 320.34 169.419 618.558 18.7588 532.463Z"
          fill="#7E19FF"
          fill-opacity="0.6"
        />
      </Svg>
      <Svg
        style={styles.secondSvg}
        width="193"
        height="337"
        viewBox="0 0 193 337"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M450.88 334.614C344.917 352.311 296.057 267.7 206.409 208.523C120.587 151.872 23.3201 142.417 2.68214 41.7045C-29.3772 -114.745 233.697 -185.634 378.878 -118.977C541.93 -44.1152 627.856 305.056 450.88 334.614Z"
          fill="#6F12E7"
          fill-opacity="0.8"
        />
      </Svg>
      <Svg
        width="127"
        height="313"
        viewBox="0 0 127 313"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M451.88 309.614C345.917 327.311 297.057 242.7 207.409 183.523C121.587 126.872 24.3201 117.417 3.68214 16.7045C-28.3772 -139.745 234.697 -210.634 379.878 -143.977C542.93 -69.1152 628.856 280.056 451.88 309.614Z"
          stroke="#ACFF86"
          stroke-opacity="0.6"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  secondSvg: {
    top: 10,
  },
});

export default Logo;
