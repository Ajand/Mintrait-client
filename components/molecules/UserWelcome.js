/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar } from "@mui/material";

const UserWelcome = ({ displayName }) => {
  return (
    <div>
      <Typography css={css``} variant="h4">
        Hello,{" "}
        <span
          css={(theme) =>
            css`
              color: ${theme.palette.primary.main};
            `
          }
        >
          {displayName}
        </span>
      </Typography>
      <Typography
        css={css`
          max-width: 700px;
        `}
        variant="body1"
      >
        You can create and manage your NFT collections. We have some advance
        features. After you are happy with your NFT, we help you to deploy them
        with one click
      </Typography>
      <Typography
        css={css`
          max-width: 700px;
        `}
        variant="body1"
      >
        Make sure to have a complete profile, most users prefer to know the
        artists before buying NFTs from them.
      </Typography>
    </div>
  );
};
export default UserWelcome;
