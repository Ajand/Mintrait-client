/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Grid } from "@mui/material";
import { useState } from "react";

import TraitForm from "./TraitForm";
import TraitsList from "./TraitsList";

const Traits = () => {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <Grid spacing>
      <Grid item md={12}>
        {isAdding ? (
          <TraitForm getBack={() => setIsAdding(false)} />
        ) : (
          <TraitsList goAdding={() => setIsAdding(true)} />
        )}
      </Grid>
    </Grid>
  );
};
export default Traits;
