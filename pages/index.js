import Header from "../components/organisms/Header";
import { Home } from "../components/templates";
import { Footer } from "../components/molecules";
import Head from "next/head";

export default function HomePage({ venomConnect }) {
  return (
    <div>
      <Head>
        <title>Mintrait</title>
        <meta
          name="description"
          content="Mint your nfts with ease and flexibility on Venom"
        />
      </Head>
      <Header venomConnect={venomConnect} />
      <Home />
    </div>
  );
}
