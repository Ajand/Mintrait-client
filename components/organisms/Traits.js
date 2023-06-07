/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Grid } from "@mui/material";

import TraitForm from "./TraitForm";

const Traits = () => {
  return (
    <Grid spacing>
      <Grid item md={12}>
        <TraitForm />
      </Grid>
    </Grid>
  );
};
export default Traits;
