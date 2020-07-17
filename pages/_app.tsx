import { AppProps } from "next/app";
import "tachyons/css/tachyons.min.css";
import "../index.css";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <meta
          name="Description"
          content="A mobile-friendly version of the DSA-LA 2020 voter guide. Great for bringing to the polls and using as a reference while voting."
        />
        <title>Retreat Left</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
