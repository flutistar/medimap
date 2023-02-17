/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Img = props => (
    <img
        css={css`
            display: block;
            -webkit-background-size: cover;
            background-size: cover;
            background-repeat: no-repeat;
            -webkit-background-position: center;
            background-position: center;
            width: 100%;
            object-fit: cover;
        `}
        alt={props.alt}
        src={props.src}
    />
);