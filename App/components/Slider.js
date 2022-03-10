import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Text,
} from "react-native";

const { width } = Dimensions.get("window");
let { height } = Dimensions.get("window");
height = height * 0.4;

function Slider({ images }) {
  const [active, setActive] = useState(0);
  const imageChanged = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={imageChanged}
        scrollEventThrottle={14}
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
      >
        {images.map((image) => (
          <Image key={image.id} source={image.image} style={styles.image} />
        ))}
      </ScrollView>
      <View style={styles.dots}>
        {images.map((i, k) => (
          <Text
            key={k}
            style={
              k === active ? styles.paginationActiveText : styles.paginationText
            }
          >
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
  scroll: { width, height },
  image: { width, height, resizeMode: "cover" },
  dots: {
    flexDirection: "row",
    position: "absolute",
    bottom: "10%",
    alignSelf: "center",
  },
  paginationText: { color: "#FFFFFF50", margin: 3 },
  paginationActiveText: { color: "#FFFFFF", margin: 3 },
});

export default Slider;
