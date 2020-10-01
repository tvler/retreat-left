import { useEffect } from "react";
import { AppProps } from "next/app";
import "../index.css";
import "tachyons/css/tachyons.min.css";
import Head from "next/head";

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  // This is a mechanism for not showing focus outlines when using a cursor,
  // but keeping them visible and accessible when using keyboard nav.
  useEffect(() => {
    document.body.addEventListener("mousedown", () => {
      document.body.classList.add("using-pointer");
    });
    document.body.addEventListener("keydown", (e) => {
      const keyCode = e.keyCode || e.which;
      // show focus on TAB
      if (keyCode === 9) {
        document.body.classList.remove("using-pointer");
      }
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="keywords" content="DSA Voter Guide, 2020 Voter Guide" />
        <meta property="og:image" content="/og-image.jpg"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:title" content="DSA Voter Guide"></meta>
        <meta
          name="twitter:description"
          content="DSA voter guide for the 2020 election in Los Angeles County. Great for bringing to the polls and using as a reference while voting."
        ></meta>
        <meta name="twitter:image" content="/og-image.jpg"></meta>

        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <meta
          name="Description"
          content="DSA voter guide for the 2020 election in Los Angeles County. Great for bringing to the polls and using as a reference while voting."
        />
        <title>Retreat Left | DSA Voter Guide</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
