import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import AppButton from "./AppButton";
import AppText from "./AppText";

function VegeListItem({ image, name, price, unit, onPress }) {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigate("Detailed", {
          image: image,
          name: name,
          price: price,
          unit: unit,
        })
      }
    >
      <View style={styles.container}>
        <Image source={image} />
        <View style={styles.details}>
          <AppText style={styles.item}>{name}</AppText>
          <View style={styles.priceContainer}>
            <AppText style={styles.price}>{price}</AppText>
            <AppText style={styles.piece}>€ / {unit}</AppText>
          </View>
          <View style={styles.buttons}>
            <AppButton
              style={{ marginRight: 5, width: "33%" }}
              backgroundColor={colors.white}
              textStyle={{ color: colors.textPrimary }}
              icon="heart-outline"
              size={25}
              color="#9586A8"
            />
            <AppButton
              icon="cart-outline"
              color={colors.white}
              size={25}
              style={{ marginLeft: 5, width: "33%" }}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 15,
  },
  priceContainer: {
    paddingRight: 5,
    alignItems: "center",
    flexDirection: "row",
  },
  price: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  piece: {
    marginVertical: 5,
    fontSize: 16,
    fontWeight: "400",
    color: colors.textSecondary,
  },
  item: {
    paddingRight: 10,
    fontSize: 18,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  details: {
    justifyContent: "space-between",
    paddingLeft: 15,
  },
});

export default VegeListItem;
