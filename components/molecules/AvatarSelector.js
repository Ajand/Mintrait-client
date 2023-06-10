/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Avatar, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const AvatarSelector = ({ avatar }) => {
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <ButtonBase
        css={css`
          border-radius: 100px;
        `}
        variant="contained"
        component="label"
      >
        <Avatar
          css={css`
            width: 120px;
            height: 120px;
          `}
          src={avatar.imageUrl}
        />
        <input
          onChange={avatar.selectImage}
          hidden
          accept="image/*"
          multiple
          type="file"
        />
      </ButtonBase>
      {avatar.imageUrl && (
        <IconButton
          css={(theme) =>
            css`
              background: ${theme.palette.error.main} !important;
              position: absolute;
              bottom: 0;
              left: 90px;
            `
          }
          size="small"
          onClick={avatar.remove}
        >
          <Close />
        </IconButton>
      )}
    </div>
  );
};

export default AvatarSelector;
