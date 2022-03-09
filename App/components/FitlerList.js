import React from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import FilterOption from "./FilterOption";

const filterListData = [
  { id: 1, name: "Сabbage and lettuce (14)" },
  { id: 2, name: "Сucumbers and tomatoes (10)" },
  { id: 3, name: "Сucumbers and tomatoes copy (10)" },
  { id: 4, name: "Oinons and garlic (8)" },
  { id: 5, name: "Peppers (7)" },
  { id: 6, name: "Potatoes and carrots (4)" },
];

const firstDataRow = filterListData.slice(
  0,
  Math.ceil(filterListData.length / 2)
);
const secondDataRow = filterListData.slice(
  Math.ceil(filterListData.length / 2)
);

function FitlerList({ style }) {
  return (
    <View style={style}>
      <FlatList
        data={firstDataRow}
        contentContainerStyle={{ alignSelf: "flex-start" }}
        horizontal
        //   numColumns={Math.ceil(secondDataRow.length / 2)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FilterOption name={item.name} />}
      />
      <FlatList
        data={secondDataRow}
        contentContainerStyle={{ alignSelf: "flex-start" }}
        horizontal
        //   numColumns={Math.ceil(secondDataRow.length / 2)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FilterOption name={item.name} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FitlerList;
