import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
import { AntDesign } from "@expo/vector-icons";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
    console.log(result);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return <AntDesign name="loading1" />;
  }

  return (
    <View style={styles.iconStyle}>
      <Text>{result.name}</Text>
      <Text>{result.display_phone}</Text>
      <Text>
        {result.location.address1}, {result.location.zip_code}
      </Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  imageStyle: {
    height: 200,
    width: 200,
    marginBottom: 10
  }
});
export default ResultsShowScreen;
