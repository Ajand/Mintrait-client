/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import { AvatarSelector } from "../molecules";
import { useImageUpload } from "../hooks";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const COMPLETE_PROFILE = gql`
  mutation CompleteProfile(
    $displayName: String!
    $bio: String
    $avatar: String
  ) {
    completeProfile(displayName: $displayName, bio: $bio, avatar: $avatar) {
      _id
    }
  }
`;

const CompleteProfile = ({ refetch }) => {
  const avatar = useImageUpload();

  const [completeProfile] = useMutation(COMPLETE_PROFILE);

  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");

  const disabled = !displayName || avatar.isUploading;

  return (
    <Paper>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          padding: 0.5em 1em;
        `}
      >
        <Typography variant="h6">Profile Completetion</Typography>
      </div>
      <Divider />
      <Grid container>
        <Grid item md={3}>
          <div
            css={css`
              padding: 0.5em 1em;
            `}
          >
            <AvatarSelector avatar={avatar} />
            <div
              css={css`
                margin-bottom: 1em;
              `}
            ></div>
          </div>
        </Grid>

        <Grid item md={9}>
          <div
            css={css`
              padding: 0.5em 1em;
            `}
          >
            <TextField
              autoComplete="off"
              label="Name (required)"
              fullWidth
              variant="outlined"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <div
              css={css`
                margin-bottom: 1em;
              `}
            ></div>
            <TextField
              autoComplete="off"
              label="Bio"
              multiline
              fullWidth
              variant="outlined"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
        </Grid>
      </Grid>
      <Divider />

      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          padding: 0.5em 1em;
        `}
      >
        <Button
          disabled={disabled}
          onClick={() => {
            completeProfile({
              variables: { displayName, bio, avatar: avatar.imageUrl },
            })
              .then((r) => refetch())
              .catch((err) => console.log(err));
          }}
          variant="contained"
        >
          Complete
        </Button>
      </div>
    </Paper>
  );
};

export default CompleteProfile;
