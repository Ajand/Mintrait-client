/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Coffee, Favorite } from "@mui/icons-material";

const Footer = () => {
  return (
    <div
      css={(theme) => css`
        display: flex;
        align-items: center;
        background: ${theme.palette.background.paper};
        padding: 1em 2em;
        text-align: center;
        bottom: 0px;
        width: 100%;
        margin-top: 2em;
      `}
    >
      Created by &nbsp;
      <Coffee
        css={css`
          width: 25px;
          height: 25px;
        `}
      />
      &nbsp; & &nbsp;
      <Favorite
        css={css`
          width: 25px;
          height: 25px;
        `}
      />
      &nbsp; for venom hackathon.
    </div>
  );
};
export default Footer;
