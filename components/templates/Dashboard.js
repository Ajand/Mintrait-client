/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container } from "@mui/material";
import { UserWelcome, NoCollection } from "../molecules";
import { CollectionsList } from "../organisms";

const Dashboard = () => {
  const collections = [
    {
      id: 1,
      name: "Bored Ape",
      symbol: "BAYP",
      supply: 100,
      deployed: false,
      minted: 0,
    },
    {
      id: 2,
      name: "Bored Ape",
      symbol: "BAYP",
      supply: 100,
      deployed: true,
      minted: 0,
    },
    {
      id: 3,
      name: "Bored Ape",
      symbol: "BAYP",
      supply: 100,
      deployed: false,
      minted: 0,
    },
    {
      id: 4,
      name: "Bored Ape",
      symbol: "BAYP",
      supply: 100,
      deployed: false,
      minted: 0,
    },
  ];

  return (
    <Container>
      <div
        css={css`
          margin-top: 4em;
        `}
      >
        <UserWelcome displayName="Jon Doe" />
      </div>
      <div
        css={css`
          display: flex;
          justify-content: center;
          margin-top: 5em;
        `}
      >
        {collections.length ? (
          <CollectionsList collections={collections} />
        ) : (
          <NoCollection />
        )}
      </div>
    </Container>
  );
};
export default Dashboard;
