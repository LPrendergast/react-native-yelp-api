import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
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
    <>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchAPI(term)}
      />
      {errors ? <Text>{errors}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("£")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("££")} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice("£££")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginLeft: 15
  }
});

export default SearchScreen;
