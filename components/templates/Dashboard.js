/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container } from "@mui/material";
import { UserWelcome, NoCollection, Loading, Footer } from "../molecules";
import { CollectionsList, CompleteProfile, Header } from "../organisms";
import { useMe } from "../hooks";

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

const Dashboard = () => {
  const { data, loading, error, refetch } = useMe();

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }

    if (data && !data.me.displayName) {
      return (
        <div>
          <CompleteProfile refetch={refetch} />
        </div>
      );
    }

    return (
      <>
        <div
          css={css`
            margin-top: 4em;
          `}
        >
          <UserWelcome displayName={data.me.displayName} />
        </div>
        <div
          css={css`
            display: flex;
            justify-content: center;
            margin-top: 5em;
          `}
        >
          {collections.length ? (
            <CollectionsList collections={data.me.collections} />
          ) : (
            <NoCollection />
          )}
        </div>
      </>
    );
  };

  return (
    <div>
      <Header />
      <Container
        css={css`
          min-height: 76.5vh;
        `}
      >
        {renderContent()}
      </Container>
      <Footer />
    </div>
  );
};
export default Dashboard;
