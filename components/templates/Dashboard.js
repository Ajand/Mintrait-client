/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container } from "@mui/material";
import { UserWelcome } from "../molecules";

const Dashboard = () => {
  return (
    <Container>
      <UserWelcome displayName="Jon Doe" />
    </Container>
  );
};
export default Dashboard;
