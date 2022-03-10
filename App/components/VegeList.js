import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import VegeListItem from "./VegeListItem";

const vegeData = [
  {
    id: 1,
    image: require("../assets/lettuce.png"),
    name: "Boston Lettuce",
    price: "1.10",
    unit: "piece",
  },
  {
    id: 4,
    image: require("../assets/lettuce.png"),
    name: "Boston Lettuce",
    price: "1.10",
    unit: "piece",
  },
  {
    id: 5,
    image: require("../assets/lettuce.png"),
    name: "Boston Lettuce",
    price: "1.10",
    unit: "piece",
  },
  {
    id: 6,
    image: require("../assets/lettuce.png"),
    name: "Boston Lettuce",
    price: "1.10",
    unit: "piece",
  },
  {
    id: 2,
    image: require("../assets/cauliflower.png"),
    name: "Savoy Cabbage",
    price: "1.45",
    unit: "kg",
  },
  {
    id: 3,
    image: require("../assets/cabbage.png"),
    name: "Purple Cauliflower",
    price: "1.85",
    unit: "kg",
  },
];

function VegeList({ style }) {
  return (
    <View style={[styles.container, style]}>
      <FlatList
        data={vegeData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <VegeListItem
            image={item.image}
            name={item.name}
            price={item.price}
            unit={item.unit}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default VegeList;
