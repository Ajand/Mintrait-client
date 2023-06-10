/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Divider,
  Tabs,
  Tab,
  AppBar,
  Button,
  List,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Header, TraitsForm, NFTFilesList } from "../organisms";
import { Footer, Loading, PreviewSelector } from "../molecules";
import { useQuery, gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useImageUpload } from "../hooks";
import { useState } from "react";

const COLLECTION = gql`
  query Collection($_id: ID!) {
    collection(_id: $_id) {
      _id
      contractAddress
      cover
      creator {
        _id
        address
        avatar
        bio
        displayName
        publicKey
      }
      logo
      description
      name
      royalty
      symbol
      variant
      traits {
        _id
        name
        values {
          amount
          value
        }
        variant
      }
    }
  }
`;

const ADD_TOKEN = gql`
  mutation AddToken($collectionId: String!, $json: String!) {
    addToken(collectionId: $collectionId, json: $json) {
      _id
    }
  }
`;

const AddToken = () => {
  const preview = useImageUpload();
  const [selectedTab, setSelectedTab] = useState(0);
  const [name, setName] = useState("");
  const [externalUrl, setExternalUrl] = useState("");
  const [description, setDescription] = useState("");
  const [traits, setTraits] = useState([]);
  const [files, setFiles] = useState([]);
  const [targetFiles, setTargetFiles] = useState([]);

  const [addToken] = useMutation(ADD_TOKEN);

  const router = useRouter();

  const collectionRoute = router.asPath.replace("/add-token", "");

  console.log(preview);

  const isDisabled = () => {
    let isIt = false;
    targetFiles.forEach((targetFil) => {
      if (!targetFil.source) {
        isIt = true;
      }
    });

    traits.forEach((trait) => {
      if (!trait.value) {
        isIt = true;
      }
      if (trait.display_type === "boost-percentage") {
        if (
          isNaN(trait.value) ||
          Number(trait.value) > 100 ||
          Number(trait.value) < 0
        ) {
          isIt = true;
        }
      } else if (
        trait.display_type === "boost-number" ||
        trait.display_type === "number"
      ) {
        if (isNaN(trait.value)) {
          isIt = true;
        }
      }
    });

    if (!name || !description || !preview.fileAddress) {
      isIt = true;
    }

    return isIt;
  };

  const { data, error, loading, refetch } = useQuery(COLLECTION, {
    variables: {
      _id: router.query.id,
    },
  });

  return (
    <div>
      <Header />
      {loading || error ? (
        <Loading />
      ) : (
        <Container
          css={css`
            margin-top: 4em;
            min-height: 76.5vh;
          `}
        >
          <Paper>
            <div
              css={css`
                display: flex;
                justify-content: space-between;
                padding: 0.5em 1em;
              `}
            >
              <Typography variant="h6">Add Token</Typography>
            </div>
            <Divider />
            <div
              css={css`
                display: flex;
                justify-content: space-between;
                padding: 0.5em 1em 1em;
              `}
            >
              <Grid container spacing={4}>
                <Grid item md={6}>
                  <div>
                    <Typography
                      css={css`
                        margin-bottom: 0.5em;
                      `}
                      variant="body2"
                    >
                      Preview:
                    </Typography>
                    <PreviewSelector preview={preview} />
                  </div>
                  <div
                    css={css`
                      margin-top: 2em;
                    `}
                  >
                    <TextField
                      name="token-name"
                      autoComplete="off"
                      variant="outlined"
                      label="Name"
                      fullWidth
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div
                    css={css`
                      margin-top: 0.75em;
                    `}
                  >
                    <TextField
                      name="token-description"
                      autoComplete="off"
                      variant="outlined"
                      label="Description"
                      fullWidth
                      multiline
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </Grid>
                <Grid item md={6}>
                  <AppBar
                    css={css`
                      border-radius: 8px 8px 0px 0px;
                    `}
                    position="static"
                  >
                    <Tabs
                      value={selectedTab}
                      onChange={(e, v) => {
                        setSelectedTab(v);
                      }}
                    >
                      <Tab label="Info" />
                      <Tab label="Attributes" />
                    </Tabs>
                  </AppBar>
                  <div
                    css={css`
                      margin-top: 1em;
                    `}
                  >
                    <div
                      css={css`
                        display: ${selectedTab === 1 ? "none" : "normal"};
                      `}
                    >
                      <div>
                        <div
                          css={css`
                            margin-bottom: 0.5em;
                          `}
                        >
                          <TextField
                            autoComplete="off"
                            label="External Url"
                            fullWidth
                            name="external-url"
                            value={externalUrl}
                            onChange={(e) => setExternalUrl(e.target.value)}
                          />
                        </div>
                        {!!files.length && (
                          <div>
                            <NFTFilesList
                              targetFiles={targetFiles}
                              setTargetFiles={setTargetFiles}
                              files={files}
                              setFiles={setFiles}
                            />
                          </div>
                        )}
                        <div>
                          <Button component="label">
                            Add Files
                            <input
                              hidden
                              accept="image/*"
                              multiple
                              type="file"
                              onChange={(e) => {
                                setFiles([...e.target.files]);
                              }}
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div
                      css={css`
                        display: ${selectedTab === 0 ? "none" : "normal"};
                      `}
                    >
                      <TraitsForm
                        traits={traits}
                        setTraits={setTraits}
                        collection={data.collection}
                      />
                    </div>
                  </div>
                </Grid>
              </Grid>
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
                color="inherit"
                css={css`
                  margin-right: 0.5em;
                `}
                onClick={() => {
                  router.push(collectionRoute);
                }}
              >
                cancel
              </Button>

              <Button
                onClick={() => {
                  const previewObject = {
                    source: preview.fileAddress,
                    mimetype: preview.fileMimeType,
                  };
                  const json = JSON.stringify({
                    type: "Basic NFT",
                    name,
                    description,
                    preview: previewObject,
                    files: targetFiles,
                    externalUrl,
                    traits,
                  });

                  addToken({
                    variables: {
                      collectionId: router.query.id,
                      json,
                    },
                  }).then((r) => {
                    refetch();
                    router.push(collectionRoute);
                  });
                }}
                disabled={isDisabled()}
                variant="contained"
              >
                Add Token
              </Button>
            </div>
          </Paper>
        </Container>
      )}
      <Footer />
    </div>
  );
};
export default AddToken;
