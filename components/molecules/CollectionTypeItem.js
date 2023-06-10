/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography } from "@mui/material";

const CollectionTypeItem = ({ variant, selected, onSelect, disabled }) => {
  return (
    <div
      css={(theme) => css`
        border: ${selected
          ? `2px solid ${theme.palette.primary.main}`
          : `1px solid ${theme.palette.divider}`};
        border-radius: 0.75em;
        overflow: hidden;
        ${disabled ? `color: #a8a8a8;` : ""}
        ${disabled ? `cursor: not-allowed;` : ""}
      `}
    >
      <ButtonBase disabled={disabled} onClick={onSelect}>
        <div
          css={css`
            padding: 0.75em;
          `}
        >
          <Typography
            css={css`
              margin-bottom: 0.5em;
            `}
            variant="h6"
          >
            {variant.label}
          </Typography>
          <Typography
            css={css`
              margin-bottom: 0.5em;
            `}
            variant="body1"
          >
            {variant.description}
          </Typography>
        </div>
      </ButtonBase>
    </div>
  );
};
export default CollectionTypeItem;
