import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.viewStyle}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.titleStyle}>{result.name}</Text>
      <Text style={styles.detailStyle}>
        {result.rating} stars, {result.review_count} reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: "bold"
  },
  imageStyle: {
    width: 250,
    height: 150,
    borderRadius: 3,
    marginBottom: 5,
    borderColor: "black"
  },
  detailStyle: {
    fontSize: 14,
    color: "gray"
  },
  viewStyle: {
    marginLeft: 15
  }
});
export default ResultsDetail;
