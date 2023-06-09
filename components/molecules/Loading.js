/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Loading = () => {
  const theme = useTheme();

  return (
    <div
      css={css`
        width: 90vw;
        height: 90vh;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <ClimbingBoxLoader color={theme.palette.primary.main} />
    </div>
  );
};

export default Loading;
