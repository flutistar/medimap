import React, { useCallback, useContext } from "react";
import axios from "axios";
import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";
import { SearchContext } from "src/context/context";

import { Box} from "../common";

export const HomeContent = () => {
  const { searchResults, setSearchResults } = useContext(SearchContext);

  const handleSearch = useCallback(async (query) => {
    if (!query) {
      alert("Please enter a query before pressing search");
    }
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${query}`
    );
    setSearchResults(data);
  }, []);

  return (
    <Box>
      <h1>
        Medimap TVMaze Coding Exercise
      </h1>
      <SearchBar onSearch={handleSearch} />
      <div style={{ marginTop: "120px" }} />
      {searchResults?.length ? <SearchResults tvShows={searchResults} /> : null}
    </Box>
  );
};
