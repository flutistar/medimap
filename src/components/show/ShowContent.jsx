import React from "react";
import { css } from "@emotion/react";
import { Box, Row, Container, Rating } from "src/components/common";

export const ShowContent = (props) => {
  const { show } = props;
  const getFlagEmoji = countryCode =>{
    if(!countryCode) return
    return String.fromCodePoint(
      ...[...countryCode.toUpperCase()].map(
        x => 0x1f1a5 + x.charCodeAt()
      )
    )
  }
    

  return (
    <>{show ?
      <Box
        css={css`
      display: flex,
      flex-direction: row,
      justify-content: center,
      align-items: center,
      align-self: stretch,
    `}
      >
        <Container>
          <Row xs={12} sm={3} md={3} lg={3}>
            <img
              style={{ width: "100%" }}
              src={show?.image?.medium || show?.image?.original}
            />
          </Row>
          <Row xs={12} sm={9} md={9} lg={9}>
            <Container>
              <Row xs={12} sm={12} md={9} lg={6} dangerouslySetInnerHTML={{ __html: show?.summary }} />
              <Row xs={12} sm={12} md={9} lg={6}>
                <Box
                  css={css`
                background-color: #e6e1e1;
                color: black;
              `}
                >
                  <h3>Show Info</h3>
                  <p>
                    <b>Network: </b>
                    {getFlagEmoji(show?.network?.country?.code)}
                    {show.network?.name}
                    ({show.premiered})
                  </p>
                  <p>
                    <b>Schedule: </b>
                    {show.schedule.days.join(", ")} at
                    {show.schedule.time}
                  </p>
                  <p>
                    <b>Status: </b>
                    {show.status}
                  </p>
                  <p>
                    <b>Show Type: </b>
                    {show.type}
                  </p>
                  <p>
                    <b>Genres: </b>
                    {show.genres.join(" | ")}
                  </p>
                  <p>
                    <b>Official Site: </b>
                    <a css={css`color: #74c2fe;`}
                      href={show.officialSite
                      }
                    >{show.officialSite}</a>
                  </p>
                  <div>
                    <Rating ratings={show.rating.average} />
                  </div>
                </Box>
              </Row>
            </Container>
          </Row>
        </Container>
      </Box>
      : <></>
    }</>
  );
};
