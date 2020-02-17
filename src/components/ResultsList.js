import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text>Results: {results.length}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <>
              <Text>{item.name}</Text>
              <Image source={{ url: item.image_url }} />
            </>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default ResultsList;
