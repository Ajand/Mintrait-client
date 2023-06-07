/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Typography,
  Avatar,
  Paper,
  Divider,
  TextField,
  Grid,
  Button,
} from "@mui/material";
import { useState } from "react";
import { CollectionTypeItem } from "../molecules";
import { useRouter } from "next/router";

const collectionVariant = [
  {
    label: "TIP 4",
    description: `In this variant every single token is a unique token with a unique ID`,
    value: "tip4",
  },
  {
    label: "TIP 1155",
    description: `In this variant you can have multiple copies of a token with the same ID`,
    value: "tip1155",
  },
];

const CollectionForm = ({ create }) => {
  const router = useRouter();

  const [collectionInfo, setSI] = useState({
    variant: "tip4",
  });

  const setCollectionInfo = (key) => (value) => {
    const cI = { ...collectionInfo };
    cI[key] = value;
    setSI(cI);
  };

  const renderTitle = () => {
    if (create) {
      return <Typography variant="h6">Create a collection</Typography>;
    } else {
      return <Typography variant="h6">Edit the collection</Typography>;
    }
  };

  return (
    <Paper
      css={css`
        width: 70%;
        min-width: 400px;
      `}
    >
      <div
        css={css`
          padding: 0.5em 1em;
        `}
      >
        {renderTitle()}
      </div>
      <Divider
        css={css`
          margin-bottom: 0.5em;
        `}
      />
      <div
        css={css`
          padding: 0.5em 1em;
        `}
      >
        <div
          css={css`
            display: flex;
          `}
        >
          <Grid container spacing={2}>
            {collectionVariant.map((variant, i) => (
              <Grid item md={6} key={variant.label}>
                <CollectionTypeItem
                  variant={variant}
                  selected={collectionInfo.variant === variant.value}
                  onSelect={() => {
                    setCollectionInfo("variant")(variant.value);
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      {/**TODO: Add logo and cover here */}
      <div
        css={css`
          padding: 0.5em 1em;
          padding-bottom: 1em;
        `}
      >
        <Grid container spacing={2}>
          <Grid item md={6}>
            <TextField
              autoComplete="off"
              label="Collection Name"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              autoComplete="off"
              label="Collection Symbol"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              autoComplete="off"
              label="Collection Description"
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>
      </div>
      <Divider />
      <div
        css={css`
          padding: 0.5em 1em;
          display: flex;
          justify-content: flex-end;
        `}
      >
        <Button
          css={css`
            margin-right: 0.5em;
          `}
          color="error"
          onClick={(e) => router.push("/dashboard")}
        >
          Cancel
        </Button>
        <Button>Create</Button>
      </div>
    </Paper>
  );
};
export default CollectionForm;
