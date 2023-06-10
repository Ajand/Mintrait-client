/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Base64 } from "js-base64";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useMe } from "../hooks";

const GET_NONCE = gql`
  mutation Mutation($address: String!, $publicKey: String!) {
    getNonce(address: $address, publicKey: $publicKey)
  }
`;

const GET_JWT = gql`
  mutation GetJwt(
    $publicKey: String!
    $signature: String!
    $dataHash: String!
  ) {
    getJwt(publicKey: $publicKey, signature: $signature, dataHash: $dataHash)
  }
`;

const Header = ({ venomConnect }) => {
  const [getNonce] = useMutation(GET_NONCE);
  const [getJwt, { client }] = useMutation(GET_JWT);
  const [token, setToken] = useState("");
  const { data, loading, error } = useMe();

  console.log(data, loading, error);

  const router = useRouter();

  const getAddress = async (provider) => {
    const providerState = await provider?.getProviderState?.();
    console.log(providerState);
    return providerState?.permissions.accountInteraction?.address.toString();
  };

  const getPublicKey = async (provider) => {
    const providerState = await provider?.getProviderState?.();
    console.log(providerState);
    return providerState?.permissions.accountInteraction?.publicKey;
  };

  useEffect(() => {
    setToken(localStorage.getItem("mintrait-auth"));
  }, [client]);

  useEffect(() => {
    const main = async () => {
      if (venomConnect) {
        venomConnect.on("connect", async (provider) => {
          const userAddress = await getAddress(provider);

          const publicKey = await getPublicKey(provider);

          const msgData = await getNonce({
            variables: {
              address: userAddress,
              publicKey,
            },
          });

          const data = msgData.data.getNonce;
          //
          const signedData = await provider.signData({
            publicKey: publicKey,
            data: Base64.encode(data),
          });

          //
          //console.log(signedData);
          //
          const { signature, dataHash } = signedData;
          //
          //const isValid = await provider.verifySignature({
          //  publicKey: publicKey,
          //  signature: signature,
          //  dataHash: dataHash,
          //});

          const jwtData = await getJwt({
            variables: {
              publicKey,
              signature,
              dataHash,
            },
          });

          const jwt = jwtData.data.getJwt;

          console.log(jwt);

          localStorage.setItem("mintrait-auth", jwt);
          client.resetStore();

          router.push("/dashboard");
          //
          //console.log(isValid);
        });
      }
    };
    //main();
  }, [venomConnect]);

  return (
    <AppBar
      css={css`
        border-radius: 0px;
        display: flex;
        justify-content: space-between;
      `}
    >
      <Toolbar
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <Typography variant="h6">MinTraiT</Typography>
        {token ? (
          <div>
            <Button
              onClick={() => {
                localStorage.setItem("mintrait-auth", "");
                client.resetStore();
                router.push("/");
              }}
              color="pink"
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            onClick={async () => {
              if (!venomConnect) return;
              try {
                await venomConnect.connect();
                console.log("we are here");
                venomConnect.on("connect", async (provider) => {
                  const userAddress = await getAddress(provider);
                  const publicKey = await getPublicKey(provider);
                  const msgData = await getNonce({
                    variables: {
                      address: userAddress,
                      publicKey,
                    },
                  });
                  const data = msgData.data.getNonce;
                  const signedData = await provider.signData({
                    publicKey: publicKey,
                    data: Base64.encode(data),
                  });
                  const { signature, dataHash } = signedData;
                  const jwtData = await getJwt({
                    variables: {
                      publicKey,
                      signature,
                      dataHash,
                    },
                  });
                  const jwt = jwtData.data.getJwt;
                  localStorage.setItem("mintrait-auth", jwt);
                  client.resetStore();
                  router.push("/dashboard");
                });
              } catch (err) {
                console.log(err);
              }
            }}
          >
            Signin
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Header;
