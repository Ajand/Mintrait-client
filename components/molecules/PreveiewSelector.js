/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Avatar, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Preview } from "@mui/icons-material";

const PreviewSelector = ({ preview }) => {
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <ButtonBase
        css={css`
          border-radius: 24px;
        `}
        variant="contained"
        component="label"
      >
        {true ? (
          <div>
            <div
              css={css`
                border: 2px dashed white;
                display: flex;
                padding: 0.3em;
                border-radius: 24px;
              `}
            >
              {!preview.imageUrl ? (
                <div
                  css={css`
                    width: 280px;
                    height: 280px;
                    border-radius: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  `}
                >
                  <Preview
                    css={css`
                      width: 200px;
                      height: 200px;
                    `}
                  />
                </div>
              ) : (
                <img
                  css={css`
                    width: 280px;
                    height: 280px;
                    border-radius: 20px;
                  `}
                  src={preview.imageUrl}
                />
              )}
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <input
          onChange={preview.selectImage}
          hidden
          accept="image/*"
          multiple
          type="file"
        />
      </ButtonBase>
      {preview.imageUrl && (
        <IconButton
          css={(theme) =>
            css`
              background: ${theme.palette.error.main} !important;
              position: absolute;
              bottom: -20px;
              left: 220px;
            `
          }
          size="small"
          onClick={preview.remove}
        >
          <Close />
        </IconButton>
      )}
    </div>
  );
};

export default PreviewSelector;
