import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState("");

  const searchAPI = async searchTerm => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "London"
        }
      });
      setResults(response.data.businesses);
    } catch (e) {
      setErrors("Something went wrong..");
    }
  };

  useEffect(() => {
    searchAPI("pasta");
  }, []);
  return [searchAPI, results, errors];
};
