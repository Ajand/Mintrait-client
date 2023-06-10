/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import NFTFileItem from "./NFTFileItem";
import { useEffect } from "react";

const NFTFilesList = ({ targetFiles, setTargetFiles, files, setFiles }) => {
  useEffect(() => {
    if (files.length) {
      setTargetFiles(
        files.map((file) => ({ source: "", mimetype: file.type }))
      );
    }
  }, [files]);

  const deleteFile = (key) => () => {
    setFiles(
      files.filter((fil, i) => {
        if (i !== key) return fil;
      })
    );
  };

  return (
    <div>
      <List>
        {files.map((file, i) => (
          <NFTFileItem
            key={i}
            file={file}
            deleteFile={deleteFile(i)}
            setTargetFiles={setTargetFiles}
            targetFiles={targetFiles}
            index={i}
          />
        ))}
      </List>
    </div>
  );
};
export default NFTFilesList;
