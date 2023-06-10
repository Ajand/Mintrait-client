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
import { useMutation, gql } from "@apollo/client";

const CREATE_COLLECTION = gql`
  mutation CreateCollection(
    $name: String!
    $description: String!
    $symbol: String!
    $royalty: Float!
  ) {
    createCollection(
      name: $name
      description: $description
      symbol: $symbol
      royalty: $royalty
    ) {
      _id
    }
  }
`;

const collectionVariant = [
  {
    label: "TIP 4",
    description: `In this variant every single token is a unique token with a unique ID`,
    value: "tip4",
  },
  {
    label: "VEP 1155 - soon",
    description: `In this variant you can have both NFTs and normal Tokens`,
    value: "tip1155",
  },
];

const CollectionForm = ({ create }) => {
  const router = useRouter();

  const [collectionName, setCollectionName] = useState("");
  const [description, setDescription] = useState("");
  const [royalty, setRoyalty] = useState("0");
  const [symbol, setSymbol] = useState("");

  const [createCollection] = useMutation(CREATE_COLLECTION);

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

  const disabled =
    !collectionName ||
    !symbol ||
    !description ||
    isNaN(royalty) ||
    Number(royalty) > 100;

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
                  disabled={i == 1}
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
              name="name"
              value={collectionName}
              onChange={(e) => setCollectionName(e.target.value)}
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              autoComplete="off"
              label="Collection Symbol"
              fullWidth
              variant="outlined"
              name="symbol"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              autoComplete="off"
              label="Collection Description"
              fullWidth
              variant="outlined"
              multiline
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              autoComplete="off"
              label="Royalty (%)"
              fullWidth
              name="royalty"
              value={royalty}
              onChange={(e) => setRoyalty(e.target.value)}
              error={isNaN(royalty) || Number(royalty) > 100}
              helperText={
                isNaN(royalty)
                  ? "Royalty must be a number"
                  : Number(royalty) > 100
                  ? "Royalty must be more lest 100%"
                  : ""
              }
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
        <Button
          onClick={() => {
            createCollection({
              variables: {
                name: collectionName,
                symbol,
                description,
                royalty: Number(royalty),
              },
            })
              .then((r) => {
                const id = r.data.createCollection._id;
                router.push(`/dashboard/collection/${id}`);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
          disabled={disabled}
        >
          Create
        </Button>
      </div>
    </Paper>
  );
};
export default CollectionForm;
