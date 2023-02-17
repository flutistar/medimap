import React from "react";
import { css } from "@emotion/react";
import { useContext } from "react";
import { SearchContext } from "src/context/context";
import { SearchResult } from "./SearchResult";
import { useRouter } from "next/router";
import { Box, Container, Row } from "../common";


export const SearchResults = () => {
  const router = useRouter();
  const { searchResults } = useContext(SearchContext);
  const handleClick = (id) => (e) => {
    e.preventDefault();
    router.push(`/show/${id}`);
  }

  return (
    <Box
      css={css`
        display: flex,
        flex-direction: column,
        justify-content: center,
        align-items: center,
        align-self: stretch,
      `}
    >
      <h1>
        Search Results
      </h1>
      <Container style={{ marginTop: "12px" }}>
        {searchResults.map(({ show }) => {
          const { id } = show;
          return (
            <Row xs={12} sm={6} md={4} lg={3} key={id}>
              <SearchResult
                show={show}
                onClickShowCard={handleClick(id)}
              />
            </Row>
          );
        })}
      </Container>
    </Box>
  );
};
