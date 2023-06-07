/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";

const CollectionMenu = ({ selected, setSelected }) => {
  return (
    <Paper>
      <List>
        <ListItem
          css={
            selected === "tokens" &&
            ((theme) => css`
              border-left: 3px solid ${theme.palette.primary.main};
            `)
          }
          disablePadding
          onClick={() => setSelected("tokens")}
        >
          <ListItemButton>
            <ListItemText primary="Tokens" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem
          css={
            selected === "traits" &&
            ((theme) => css`
              border-left: 3px solid ${theme.palette.primary.main};
            `)
          }
          disablePadding
          onClick={() => setSelected("traits")}
        >
          <ListItemButton>
            <ListItemText primary="Traits" />
          </ListItemButton>
        </ListItem>
      </List>
    </Paper>
  );
};
export default CollectionMenu;
