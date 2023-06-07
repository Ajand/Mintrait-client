/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const FormRow = ({ children }) => {
  return (
    <div
      css={(theme) =>
        css`
          margin-bottom: 1em;
        `
      }
    >
      {children}
    </div>
  );
};

export default FormRow;
