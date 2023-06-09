/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container, Grid } from "@mui/material";
import { CollectionInfo, CollectionMenu, Traits, Tokens } from "../organisms";
import { Footer } from "../molecules";
import { useState } from "react";

const Collection = () => {
  const [selected, setSelected] = useState("tokens");

  return (
    <div>
      <Container
        css={css`
          margin-top: 2em;
        `}
      >
        <CollectionInfo />
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
            {selected === "tokens" ? <Tokens /> : <Traits />}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Collection;
