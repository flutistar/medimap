import React from "react";
import { Card, CardHeader, Img } from "../common";

export const SearchResult = (props) => {
  const { show, onClickShowCard } = props;
  const { name, image } = show;

  return (
    <Card onClick={onClickShowCard}>
      <CardHeader title={name}  />
      <Img
        src={image?.medium || image?.original}
        alt={name}
      />
    </Card>
  );
};
