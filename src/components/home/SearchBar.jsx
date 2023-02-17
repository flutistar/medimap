import React, { useCallback, useState } from "react";
import { css } from "@emotion/react";
import { Box, Input, Button } from "../common";

export const SearchBar = (props) => {
  const { onSearch } = props;
  const [input, setInput] = useState("");

  const handleInputChanged = useCallback(evt => {
    const { value } = evt.target;
    setInput(value);
  }, []);

  const handleSearchClicked = useCallback(evt => {
    evt.preventDefault();
    onSearch(input);
  }, [onSearch, input]);

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      onSearch(input);
    }
  }

  return (
    <Box
      css={css`
        display: flex;
        flex-direction: row;
        width: 480px;
        max-width: 100%;
        margin-top: 24px;
      `}
    >
      <Input 
        value={input}
        onChange={handleInputChanged}
        onKeyDown={handleEnterKey}
        style={{ flex: 1 }}
      />
      <Button onClick={handleSearchClicked}>
        Search
      </Button>
    </Box>
  );
};
