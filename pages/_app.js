import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { VenomConnect } from "venom-connect";
import { ProviderRpcClient } from "everscale-inpage-provider";
import { EverscaleStandaloneClient } from "everscale-standalone-client";
import { useEffect, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import apolloClient from "../components/apolloClient";

const darkTheme = createTheme({
  typography: {
    fontFamily: "Dosis",
    fontSize: 21,
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#66fcf1",
      paper: "#493E7F",
    },
    lavendar: {
      main: "#8167FF",
      light: "#B3A8FF",
    },
    secondary: {
      main: "#C5C6C7",
    },
    background: {
      default: "#0b0c10",
      paper: "#1f2833",
      secondary: "#443569",
    },
    error: {
      main: "#FF004F",
    },
    pink: {
      main: "#FC1E9A",
      light: "#fd8ecc",
    },
    simple: {
      main: "#F5FBEF",
      contrastText: "#000",
    },
    error: {
      main: "#e76d89",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: "rgb(20 21 33 / 18%) 0px 2px 10px 0px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8 },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: { borderRadius: "8px !important" },
      },
    },
    MuiTypography: {},
  },
});

export const initVenomConnect = async () => {
  return new VenomConnect({
    theme: "dark",
    checkNetworkId: 1002,
    providersOptions: {
      venomwallet: {
        walletWaysToConnect: [
          {
            package: ProviderRpcClient,

            packageOptions: {
              fallback:
                VenomConnect.getPromise("venomwallet", "extension") ||
                (() => Promise.reject()),
              forceUseFallback: true,
            },
            packageOptionsStandalone: {
              fallback: () =>
                EverscaleStandaloneClient.create({
                  connection: {
                    id: 1002,
                    group: "devnet",
                    type: "jrpc",
                    data: {
                      endpoint: "https://jrpc-devnet.venom.foundation/",
                    },
                  },
                }),
              forceUseFallback: true,
            },

            id: "extension",
            type: "extension",
          },
        ],
        defaultWalletWaysToConnect: ["mobile", "ios", "android"],
      },
    },
  });
};

function MyApp({ Component, pageProps }) {
  const [venomConnect, setVenomConnect] = useState(null);
  const init = async () => {
    const _venomConnect = await initVenomConnect();
    setVenomConnect(_venomConnect);
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} venomConnect={venomConnect} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
