/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { useMutation, gql } from "@apollo/client";
import { css } from "@emotion/react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

const ADD_TRAIT = gql`
  mutation AddTrait(
    $collectionId: String!
    $traitName: String!
    $variant: String!
  ) {
    addTrait(
      collectionId: $collectionId
      traitName: $traitName
      variant: $variant
    ) {
      _id
    }
  }
`;

const TraitForm = ({ getBack, collection, refetch }) => {
  const [traitName, setTraitName] = useState("");
  const [variant, setVariant] = useState("string");

  const [addTrait] = useMutation(ADD_TRAIT);

  return (
    <Paper>
      <div
        css={css`
          padding: 0.5em 1em;
        `}
      >
        <Typography variant="h6">Add a trait</Typography>
      </div>
      <Divider />
      <div
        css={css`
          padding: 1em 1em;
        `}
      >
        <div
          css={css`
            margin-bottom: 0.75em;
          `}
        >
          <TextField
            autoComplete="off"
            fullWidth
            variant="outlined"
            label="Trait Name"
            value={traitName}
            onChange={(e) => setTraitName(e.target.value)}
          />
        </div>
        <div>
          <FormControl fullWidth>
            <InputLabel id="traitType">Trait Type</InputLabel>
            <Select
              labelId="traitType"
              id="traitType"
              value={variant}
              label="Trait Type"
              onChange={(e) => {
                setVariant(e.target.value);
              }}
            >
              <MenuItem value="string">String</MenuItem>
              <MenuItem value="boost-number">Boost Number</MenuItem>
              <MenuItem value="boost-percentage">Boost Percentage</MenuItem>
              <MenuItem value="number">Number</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <Divider />
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          padding: 0.5em 1em;
        `}
      >
        <Button
          size="small"
          variant="text"
          color="warning"
          css={css`
            margin-right: 0.5em;
          `}
          onClick={() => {
            getBack();
          }}
        >
          Cancel
        </Button>

        <Button
          disabled={!traitName}
          onClick={() => {
            addTrait({
              variables: { traitName, variant, collectionId: collection._id },
            })
              .then((r) => {
                refetch();
                getBack();
              })
              .catch((err) => {
                console.log(err);
              });
          }}
          size="small"
          variant="contained"
          color="primary"
        >
          Add
        </Button>
      </div>
    </Paper>
  );
};

export default TraitForm;
