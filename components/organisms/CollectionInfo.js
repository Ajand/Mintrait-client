/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Avatar, IconButton } from "@mui/material";
import { RocketLaunch, Done, Edit, OpenInNew } from "@mui/icons-material";
import gradient from "random-gradient";

const logoAddress =
  "data:image/png;base64,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";

const collectionInfo = {
  id: 1,
  name: "Bored Ape Yacht Club",
  symbol: "BAYC",
  description: `loremOccaecat mollit velit minim dolor officia qui mollit consectetur fugiat eu aliqua nulla labore. Id id non culpa voluptate mollit et cillum quis minim do. Sunt in eu nulla eu amet voluptate non ex nulla laborum officia. Incididunt qui non in amet aliqua in id adipisicing minim sunt.`,
  deployed: false,
  minted: 0,
  contractAddress:
    "0:7c75751098f482ab51e27bb213b1b22d1a0a0afa333b9abc4041c8c84c7cb02c",
};

const CollectionInfo = () => {
  const bgGradient = { background: gradient("20") };

  return (
    <div
      css={css`
        border: 2px solid white;
        border-radius: 10px;
        overflow: hidden;
      `}
    >
      <div
        css={css`
          position: relative;
        `}
      >
        <div
          style={bgGradient}
          css={css`
            height: 260px;
            border-bottom: 2px solid white;
            cursor: pointer;
          `}
        ></div>
        <Avatar
          src={logoAddress}
          css={css`
            width: 160px;
            height: 160px;
            border: 2px solid white;
            position: absolute;
            top: 180px;
            right: 40px;
            cursor: pointer;
          `}
        />
      </div>
      <div
        css={(theme) =>
          css`
            background: ${theme.palette.background.paper};
            padding: 0.5em 1em;
          `
        }
      >
        <div
          css={css`
            margin-bottom: 0.25em;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 83%;
          `}
        >
          <Typography variant="h6">
            {collectionInfo.name} | {collectionInfo.symbol}
          </Typography>
          <div
            css={css`
              margin-left: 1em;
            `}
          >
            <IconButton
              css={css`
                border: 2px solid white;
                box-sizing: border-box;
                margin-right: 0.25em;
              `}
              size="small"
            >
              <Edit
                css={css`
                  width: 25px;
                  height: 25px;
                `}
                size="small"
              />
            </IconButton>
            <IconButton
              css={css`
                border: 2px solid white;
                box-sizing: border-box;
                margin-right: 0.25em;
              `}
              size="small"
            >
              <Done
                css={css`
                  width: 25px;
                  height: 25px;
                `}
              />
            </IconButton>{" "}
            <IconButton
              css={css`
                border: 2px solid white;
                box-sizing: border-box;
                margin-right: 0.25em;
              `}
              size="small"
            >
              <RocketLaunch
                css={css`
                  width: 25px;
                  height: 25px;
                `}
              />
            </IconButton>{" "}
            <IconButton
              css={css`
                border: 2px solid white;
                box-sizing: border-box;
                margin-right: 0.25em;
              `}
              size="small"
            >
              <OpenInNew
                css={css`
                  width: 25px;
                  height: 25px;
                `}
              />
            </IconButton>
          </div>
        </div>

        <Typography
          css={css`
            width: 83%;
            margin-bottom: 0.25em;
          `}
          variant="body1"
        >
          {collectionInfo.description}
        </Typography>
        <div>
          <Typography variant="subtitle2">
            Contract Address:{" "}
            {collectionInfo.deployed
              ? collectionInfo.contractAddress
              : "Not deployed yet."}
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default CollectionInfo;
