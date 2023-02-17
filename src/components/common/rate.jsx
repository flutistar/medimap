/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Rating = ({ ratings }) => {
    const RateArray = () => {
        let rates = [];
        for (let i = 0; i < 10; i++) {
            if (i < ratings)
                rates.push(<span css={css` &:before{ content: '★'; color: #ffc700; }`}></span>);
            else
                rates.push(<span css={css` &:before{ content: '★'; color: #fff;}`}></span>);
        }
        return rates
    }

    return (
        <div css={css`display: flex;`}>
            <div>
                <RateArray /> 
            </div>
            <div css={{paddingLeft: "5px"}}>{ratings ?? "No review"}</div>
        </div>
    )
};

