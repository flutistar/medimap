import React from "react";
import { Card, CardHeader, CardMedia } from "@mui/material";

export const SearchResult = (props) => {
  const { show } = props;
  const { name, image } = show;
  return (
    <Card style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <CardHeader title={name} style={{ flex: 1 }} />
      <CardMedia
        component="img"
        image={image.medium || image.original}
        alt={name}
      />
    </Card>
  );
};
