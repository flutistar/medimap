/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Card = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #121212;
    color: #fff;
    -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    background-image: linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05));
    overflow: hidden;
`;

export const CardHeader = props => (
    <div css={css`
        flex: 1 1 0%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 16px;
    `}>
        <span css={css`
            margin: 0;
            font-family: "Roboto","Helvetica","Arial",sans-serif;
            font-weight: 400;
            font-size: 1.5rem;
            line-height: 1.334;
            letter-spacing: 0em;
            display: block;
        `}>
            {props.title}
        </span>
    </div>
);
