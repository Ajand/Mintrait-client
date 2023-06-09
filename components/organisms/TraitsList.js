/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Paper,
  Typography,
  Divider,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const TraitsList = ({ goAdding }) => {
  return (
    <Paper>
      <div
        css={css`
          padding: 0.5em 1em;
          display: flex;
          justify-content: space-between;
        `}
      >
        <Typography variant="h6">Add a trait</Typography>
        <Button onClick={goAdding} color="primary" size="small">
          Add a trait
        </Button>
      </div>
      <Divider />
      <Grid container spacing={2}>
        <Grid css={(theme) => css``} item md={6}>
          <List
            css={(theme) => css`
              border-right: 1px solid ${theme.palette.divider};
            `}
          >
            <ListItem
              css={(theme) => css`
                border-left: 3px solid ${theme.palette.primary.main};
              `}
              secondaryAction={
                <>
                  <IconButton
                    css={css`
                      margin-right: 0.15em;
                    `}
                  >
                    <Edit
                      css={css`
                        width: 20px;
                        height: 20px;
                      `}
                    />
                  </IconButton>
                  <IconButton>
                    <Delete
                      css={css`
                        width: 20px;
                        height: 20px;
                      `}
                    />
                  </IconButton>
                </>
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemText primary="Background" secondary="String" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Background" secondary="String" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Background" secondary="String" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Background" secondary="String" />
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TraitsList;
