/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container } from "@mui/material";
import { CollectionInfo } from "../organisms";

const Collection = () => {
  return (
    <Container
      css={css`
        margin-top: 2em;
      `}
    >
      <CollectionInfo />
    </Container>
  );
};

export default Collection;
