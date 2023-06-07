/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Paper,
  Typography,
  Divider,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useRouter } from "next/router";

const CollectionsList = ({ collections }) => {
  const router = useRouter();

  return (
    <Paper
      css={css`
        width: 100%;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          padding: 0.5em 1em;
        `}
      >
        <Typography variant="h6">Your Collections</Typography>
        <IconButton
          onClick={() => router.push("/dashboard/collection/create")}
          color="primary"
        >
          <Add />
        </IconButton>
      </div>
      <Divider />
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Symbol</TableCell>
            <TableCell align="center">Supply</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="right">Minted</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {collections.map((collection) => (
            <TableRow
              key={collection.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                "&:hover": { background: "#1f2833" },
                cursor: "pointer",
              }}
              onClick={() =>
                router.push(`/dashboard/collection/${collection.id}`)
              }
            >
              <TableCell component="th" scope="row">
                {collection.name}
              </TableCell>
              <TableCell align="center">{collection.symbol}</TableCell>
              <TableCell align="center">{collection.supply}</TableCell>
              <TableCell align="center">
                {collection.deployed ? (
                  <Chip label="Deployed" color="primary" />
                ) : (
                  <Chip
                    variant="outlined"
                    label="Not Deployed"
                    color="secondary"
                  />
                )}
              </TableCell>
              <TableCell align="right">{collection.minted}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
export default CollectionsList;
