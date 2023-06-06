/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Paper, Typography, Button } from "@mui/material";

const NoCollection = () => {
  return (
    <Paper
      css={css`
        min-width: 700px;
        padding: 1em;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <Typography
          css={css`
            margin-bottom: 0.85em;
            align-items: center;
            max-width: 600px;
            text-align: center;
          `}
          variant="body1"
        >
          You don't have any collection yet. Create your first collection so you
          can mint your first NFT.
        </Typography>
      </div>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <Button variant="contained" color="primary">
          Create Your First Collection
        </Button>
      </div>
    </Paper>
  );
};
export default NoCollection;
