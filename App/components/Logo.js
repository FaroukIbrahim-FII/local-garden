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
        width="104"
        height="104"
        viewBox="0 0 104 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle cx="52" cy="52" r="52" fill="white" />
        <Path
          d="M55.22 52.3154L53.4275 53.3527V72L69.5685 62.6805V44.0332L55.22 52.3154Z"
          fill="#2D0C57"
        />
        <Path
          d="M58.1412 35.5934L51.9337 32L35.3445 41.5768L41.5603 45.1701L58.1412 35.5934Z"
          fill="#2D0C57"
        />
        <Path
          d="M68.5146 41.5768L61.3611 37.5021L44.7802 47.0788L45.7262 47.5685L51.9337 51.1535L58.108 47.5934L68.5146 41.5768Z"
          fill="#2D0C57"
        />
        <Path
          d="M43.5271 53.9336L40.5561 52.4066V47.6597L34.4316 44.1328V62.6473L50.4565 71.9004V53.3859L43.5271 49.3942V53.9336Z"
          fill="#2D0C57"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Logo;
