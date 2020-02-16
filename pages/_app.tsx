import { AppProps } from "next/app";
import "tachyons/css/tachyons.min.css";
import "../index.css";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
