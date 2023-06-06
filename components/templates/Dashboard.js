/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container } from "@mui/material";
import { UserWelcome, NoCollection } from "../molecules";

const Dashboard = () => {
  return (
    <Container>
      <div
        css={css`
          margin-top: 4em;
        `}
      >
        <UserWelcome displayName="Jon Doe" />
      </div>
      <div
        css={css`
          display: flex;
          justify-content: center;
          margin-top: 5em;
        `}
      >
        <NoCollection />
      </div>
    </Container>
  );
};
export default Dashboard;
