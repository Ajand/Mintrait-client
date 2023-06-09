/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useEffect } from "react";
import { Base64 } from "js-base64";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

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
    main();
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
        <Button
          onClick={async () => {
            if (!venomConnect) return;
            await venomConnect.connect();
          }}
        >
          Signin
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
