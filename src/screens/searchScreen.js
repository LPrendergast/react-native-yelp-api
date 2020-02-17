import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchAPI, results, errors] = useResults();

  const filterResultsByPrice = price => {
    //price of £, ££, £££
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchAPI(term)}
      />
      {errors ? <Text>{errors}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList results={filterResultsByPrice("£")} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice("££")} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice("£££")} title="Big Spender" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
