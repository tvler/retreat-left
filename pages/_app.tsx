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
        <meta property="og:image" content="/og-image.jpg"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:title" content="DSA 2020 Voter Guide"></meta>
        <meta
          name="twitter:description"
          content="DSA voter guide for the 2020 election in Los Angeles County. Great for bringing to the polls and using as a reference while voting."
        ></meta>
        <meta name="twitter:image" content="/twitter-image.jpg"></meta>

        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <meta
          name="Description"
          content="DSA voter guide for the 2020 election in Los Angeles County. Great for bringing to the polls and using as a reference while voting."
        />
        <title>Retreat Left | DSA 2020 Voter Guide</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
