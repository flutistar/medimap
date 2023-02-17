/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Box = props => (
    <div
        css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}
        {...props}
    ></div>
);
