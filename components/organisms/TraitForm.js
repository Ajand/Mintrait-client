/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
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

const TraitForm = ({ getBack }) => {
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
          />
        </div>
        <div>
          <FormControl fullWidth>
            <InputLabel id="traitType">Trait Type</InputLabel>
            <Select
              labelId="traitType"
              id="traitType"
              value="string"
              label="Trait Type"
              onChange={() => {}}
            >
              <MenuItem value="string">String</MenuItem>
              <MenuItem value="boost-number">Boost Number</MenuItem>
              <MenuItem value="boost-percentage">Boost Percentage</MenuItem>
              <MenuItem value="number">Number</MenuItem>
              <MenuItem value="date">Date</MenuItem>
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

        <Button size="small" variant="contained" color="primary">
          Add
        </Button>
      </div>
    </Paper>
  );
};

export default TraitForm;
