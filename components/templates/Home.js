/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container, Grid, Typography, Paper } from "@mui/material";

const Home = () => {
  return (
    <div
      css={css`
        min-height: 76.5vh;
      `}
    >
      <Container>
        <Grid
          css={css`
            margin-top: 4em;
          `}
          container
          spacing={2}
        >
          <Grid item md={6}>
            <Typography
              variant="h3"
              css={css`
                margin-bottom: 2em;
              `}
            >
              Ultimate NFT Minting Experience on{" "}
              <span
                css={(theme) =>
                  css`
                    color: ${theme.palette.primary.main};
                  `
                }
              >
                Venom
              </span>{" "}
              Blockchain with MinTraiT
            </Typography>
          </Grid>
          <Grid item md={5}>
            <div
              css={css`
                padding: 0.5em 1em;
                border: 2px solid #c8c8c8;
                border-radius: 15px;
                margin-bottom: 1em;
              `}
            >
              <Typography variant="h6">Lazy Minting</Typography>
              <Typography variant="body1">
                First create all of your collection, then just chill and let us
                mint it for you.
              </Typography>
            </div>{" "}
            <div
              css={css`
                padding: 0.5em 1em;
                border: 2px solid #c8c8c8;
                border-radius: 15px;
                margin-bottom: 1em;
              `}
            >
              <Typography variant="h6">TIP4 Complete Support</Typography>
              <Typography variant="body1">
                Mint trait supports TIP4-1, TIP4-2 and TIP4-3 out of the box.
                Easily configure your collection with venom standards.
              </Typography>
            </div>{" "}
            <div
              css={css`
                padding: 0.5em 1em;
                border: 2px solid #c8c8c8;
                border-radius: 15px;
                margin-bottom: 1em;
              `}
            >
              <Typography variant="h6">Royalty</Typography>
              <Typography variant="body1">
                Mintrait help you to setup your royalty information out of the
                box using VEP-2981 standard.
              </Typography>
            </div>{" "}
            <div
              css={css`
                padding: 0.5em 1em;
                border: 2px solid #c8c8c8;
                border-radius: 15px;
                margin-bottom: 1em;
              `}
            >
              <Typography variant="h6">Traits</Typography>
              <Typography variant="body1">
                You can easily add traits for your collection and we help you
                while you&apos;re creating your tokens.
              </Typography>
            </div>{" "}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Home;
