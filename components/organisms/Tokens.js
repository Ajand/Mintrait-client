/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar } from "@mui/material";
import { TokensToolbar } from "../molecules";
import TokenCard from "../molecules/TokenCard";

const Tokens = ({ tokens }) => {
  return (
    <div>
      <TokensToolbar />
      <div
        css={css`
          margin-top: 2em;
        `}
      >
        {tokens.map((token) => (
          <div key={token._id}>
            <TokenCard token={token} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tokens;
