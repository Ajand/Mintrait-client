/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar } from "@mui/material";
import { CollectionForm } from "../organisms";

const CreateCollection = ({}) => {
  return (
    <div
      css={css`
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <CollectionForm create />
    </div>
  );
};
export default CreateCollection;
