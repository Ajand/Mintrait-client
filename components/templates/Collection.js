/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container, Grid } from "@mui/material";
import { CollectionInfo, CollectionMenu } from "../organisms";
import { useState } from "react";

const Collection = () => {
  const [selected, setSelected] = useState("tokens");

  return (
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
        <Grid item md={3}>
          {selected === "tokens" ? <div>Tokens stuff</div> : <div></div>}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Collection;
