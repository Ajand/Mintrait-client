/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container, Grid } from "@mui/material";
import {
  CollectionInfo,
  CollectionMenu,
  Traits,
  Tokens,
  Header,
} from "../organisms";
import { Footer, Loading } from "../molecules";
import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const COLLECTION = gql`
  query Collection($_id: ID!) {
    collection(_id: $_id) {
      _id
      contractAddress
      cover
      creator {
        _id
        address
        avatar
        bio
        displayName
        publicKey
      }
      logo
      description
      name
      royalty
      symbol
      variant
      traits {
        _id
        name
        values {
          amount
          value
        }
        variant
      }
      tokens {
        _id
        json
        contractAddress
      }
    }
  }
`;

const Collection = () => {
  const [selected, setSelected] = useState("tokens");
  const router = useRouter();

  const { data, error, loading, refetch, startPolling } = useQuery(COLLECTION, {
    variables: {
      _id: router.query.id,
    },
  });

  console.log(data);

  useEffect(() => {
    startPolling(5000);
  }, []);

  return (
    <div>
      <Header />
      {loading || error ? (
        <Loading />
      ) : (
        <Container
          css={css`
            margin-top: 4em;
            min-height: 76.5vh;
          `}
        >
          <CollectionInfo refetch={refetch} collection={data.collection} />
          <Grid
            css={css`
              margin-top: 1em;
            `}
            container
            spacing={2.5}
          >
            <Grid item md={3}>
              <CollectionMenu selected={selected} setSelected={setSelected} />
            </Grid>
            <Grid item md={9}>
              {selected === "tokens" ? (
                <Tokens tokens={data.collection.tokens} />
              ) : (
                <Traits refetch={refetch} collection={data.collection} />
              )}
            </Grid>
          </Grid>
        </Container>
      )}

      <Footer />
    </div>
  );
};

export default Collection;
