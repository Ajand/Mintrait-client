/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ListItem, IconButton, ListItemText } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { uploadFile, ipfsAddressResolver, ipfsUrlResolver } from "../lib";

const NFTFileItem = ({
  targetFiles,
  setTargetFiles,
  file,
  deleteFile,
  index,
}) => {
  const [fileUrl, setFileUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [fileAddress, setFileAddress] = useState("");

  useEffect(() => {
    if (file) {
      setIsUploading(true);
      setIsUploading(true);
      const upload = async () => {
        try {
          const fileCid = await uploadFile(file);
          setFileUrl(ipfsUrlResolver(fileCid));
          setTargetFiles((targetFils) =>
            targetFils.map((fil, i) => {
              console.log(i, fil);
              if (index === i) {
                return {
                  source: ipfsAddressResolver(fileCid),
                  mimetype: file.type,
                };
              }
              return fil;
            })
          );
          setIsUploading(false);
        } catch (err) {
          console.log(err);
          setIsUploading(false);
        }
      };

      upload();
    }
  }, [file]);

  useEffect(() => {}, []);

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton onClick={() => deleteFile()} edge="end">
          <Close
            css={css`
              width: 25px;
              height: 25px;
            `}
          />
        </IconButton>
      }
    >
      <ListItemText
        primary={file.name}
        secondary={
          isUploading ? (
            "Uploading ..."
          ) : (
            <a
              css={css`
                color: white !important;
              `}
              href={fileUrl}
              target="_blank"
            >
              {targetFiles[index]?.source.substring(0, 30)}...
            </a>
          )
        }
      />
    </ListItem>
  );
};
export default NFTFileItem;
