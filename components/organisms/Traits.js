/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Grid } from "@mui/material";
import { useState } from "react";

import TraitForm from "./TraitForm";
import TraitsList from "./TraitsList";

const Traits = ({ refetch, collection }) => {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <Grid spacing>
      <Grid item md={12}>
        {isAdding ? (
          <TraitForm
            collection={collection}
            refetch={refetch}
            getBack={() => setIsAdding(false)}
          />
        ) : (
          <TraitsList
            collection={collection}
            goAdding={() => setIsAdding(true)}
          />
        )}
      </Grid>
    </Grid>
  );
};
export default Traits;
