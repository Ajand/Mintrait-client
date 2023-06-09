/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Paper, Divider, Button, Typography, IconButton } from "@mui/material";
import { FilterList } from "@mui/icons-material";

const TokensToolbar = () => {
  return (
    <Paper>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          padding: 0.5em 1em;
        `}
      >
        <Typography variant="h6">Tokens</Typography>
        <Button color="primary" size="small">
          Add
        </Button>
      </div>
      <Divider />
      <div
        css={css`
          padding: 0.5em 1em;
          display: flex;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            display: flex;
          `}
        >
          <Typography
            css={css`
              margin-right: 0.5em;
            `}
            variant="body1"
          >
            Total: 5000
          </Typography>
          <Typography variant="body1">Minted: 40</Typography>
        </div>
        <div>
          <IconButton>
            <FilterList
              css={css`
                width: 25px;
                height: 25px;
              `}
            />
          </IconButton>
        </div>
      </div>
    </Paper>
  );
};
export default TokensToolbar;
