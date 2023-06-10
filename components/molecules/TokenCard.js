/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Paper,
  Grid,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Download, Edit } from "@mui/icons-material";
import { ipfsUrlToNormal } from "../lib";

const TokenCard = ({ token }) => {
  const tokenData = JSON.parse(token.json);
  console.log(tokenData);
  console.log();

  return (
    <Paper
      css={css`
        padding: 1em;
        margin-bottom: 1em;
      `}
    >
      <Grid container spacing={3}>
        <Grid item md={5}>
          <div>
            <img
              src={ipfsUrlToNormal(tokenData.preview.source)}
              css={css`
                width: 300px;
                height: 300px;
                border-radius: 8px;
              `}
            />
          </div>
          <div
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <Typography variant="h6">{tokenData.name}</Typography>
            <div
              css={css`
                margin-left: 0.25em;
              `}
            >
              <IconButton size="small">
                <Edit
                  css={css`
                    width: 20px;
                    height: 20px;
                  `}
                />
              </IconButton>
            </div>
          </div>
          <Typography
            css={css`
              font-size: 0.9em;
            `}
            variant="body1"
          >
            {tokenData.description}
          </Typography>
        </Grid>
        <Grid item md={7}>
          <div
            css={css`
              margin-bottom: 0.5em;
            `}
          >
            <Typography variant="subtitle2">
              Contract Address:{" "}
              <span
                css={(theme) =>
                  css`
                    color: ${theme.palette.primary.main};
                  `
                }
              >
                {token.contractAddress ? (
                  <a
                    css={(theme) =>
                      css`
                        color: ${theme.palette.primary.main};
                      `
                    }
                    target="_black"
                    href={`https://devnet.venomscan.com/accounts/${token.contractAddress}`}
                  >
                    {token.contractAddress.substring(0, 25)}
                  </a>
                ) : (
                  "Not minted yet."
                )}
              </span>
            </Typography>
            {!!tokenData.externalUrl && (
              <Typography variant="subtitle2">
                External URL:{" "}
                <a
                  css={(theme) =>
                    css`
                      color: ${theme.palette.primary.main} !important;
                    `
                  }
                  target="_blank"
                  href={tokenData.externalUrl}
                >
                  {tokenData.externalUrl}
                </a>
              </Typography>
            )}
          </div>
          <Divider />
          {tokenData.files.length > 0 && (
            <div
              css={css`
                margin-top: 0.5em;
              `}
            >
              <Typography variant="subtitle2">Files: </Typography>
              <List>
                {tokenData.files.map((file, i) => (
                  <ListItem
                    key={i}
                    disablePadding
                    secondaryAction={
                      <IconButton>
                        <Download
                          css={css`
                            width: 20px;
                            height: 20px;
                          `}
                        />
                      </IconButton>
                    }
                  >
                    <ListItemText
                      primary={`${file.source.substring(0, 25)}...`}
                      secondary={file.mimeType}
                    />
                  </ListItem>
                ))}
              </List>
            </div>
          )}
          {tokenData.files.length > 0 && <Divider />}
          {tokenData.traits.length > 0 && (
            <div
              css={css`
                margin-top: 0.5em;
              `}
            >
              <Typography variant="subtitle2">Traits: </Typography>
              <List>
                {tokenData.traits.map((trait, key) => (
                  <ListItem disablePadding key={key}>
                    <ListItemText
                      primary={`${trait.trait_type}: ${trait.value}`}
                      secondary={`Display Type: ${trait.display_type}`}
                    />
                  </ListItem>
                ))}
              </List>
            </div>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TokenCard;
