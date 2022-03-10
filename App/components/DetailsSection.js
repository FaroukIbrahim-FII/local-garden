import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import colors from "../config/colors";
import AppButton from "./AppButton";
import AppText from "./AppText";
import { useRoute } from "@react-navigation/native";

function DetailsSection({ style }) {
  const route = useRoute();

  return (
    <ScrollView style={[styles.container, style]}>
      <View>
        <AppText style={styles.header}>{route.params.name}</AppText>
        <View style={styles.priceDiv}>
          <AppText style={styles.price}>{route.params.price}</AppText>
          <AppText style={styles.piece}>€ / {route.params.unit}</AppText>
        </View>
        <AppText style={styles.grams}>~ 150 gr / piece</AppText>
        <AppText style={styles.description}>Description</AppText>
        <AppText style={styles.details}>
          Lettuce is an annual plant of the daisy family, Asteraceae. It is most
          often grown as a leaf vegetable, but sometimes for its stem and seeds.
          Lettuce is most often used for salads, although it is also seen in
          other kinds of food, such as soups, sandwiches and wraps; it can also
          be grilled.
        </AppText>
        <View style={styles.buttonDiv}>
          <AppButton
            icon="heart-outline"
            size={20}
            backgroundColor={colors.white}
            color="#9586A8"
            style={{ flex: 1, marginRight: 10, paddingVertical: 10 }}
          />
          <AppButton
            name="ADD TO CART"
            icon="cart-outline"
            color={colors.white}
            size={20}
            style={{ flex: 4, paddingVertical: 10 }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    backgroundColor: colors.activeArea,
    zIndex: 1,
    padding: 15,
  },
  header: {
    color: colors.textPrimary,
    fontSize: 30,
    lineHeight: 41,
    letterSpacing: 0.41,
    fontWeight: "700",
  },
  priceDiv: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    color: colors.textPrimary,
    fontSize: 32,
    lineHeight: 43.08,
    letterSpacing: -0.8,
    fontWeight: "700",
  },
  piece: {
    fontSize: 24,
    fontWeight: "400",
    lineHeight: 43.08,
    letterSpacing: -0.8,
    color: colors.textSecondary,
  },
  grams: {
    fontSize: 17,
    lineHeight: 25.5,
    letterSpacing: -0.41,
    color: "#06BE77",
  },
  description: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 22,
    lineHeight: 22,
    letterSpacing: -0.41,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  details: {
    fontSize: 17,
    lineHeight: 25.5,
    letterSpacing: -0.41,
    fontWeight: "400",
    color: colors.textSecondary,
  },
  buttonDiv: {
    marginTop: 40,
    flexDirection: "row",
    marginBottom: "10%",
  },
});

export default DetailsSection;
