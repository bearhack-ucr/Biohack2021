import "../styles/globals.css";
// Removes default focus border because its ugly
import "what-input";
import '../styles/themes.css';
import { AuthProvider } from "react-auth-kit";
import { Provider } from "react-redux";
import store from "../store";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
        <title>BioHack at UCR 2021</title>
        <meta name="title" content="BioHack at UCR 2021"/>
        <meta name="description" content="BioHack is a 24-hour bioengineering focused, health and medicine themed, virtual hackathon at the University of California, Riverside."/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://biohackucr.com/"/>
        <meta property="og:title" content="BioHack at UCR 2021"/>
        <meta property="og:description" content="BioHack is a 24-hour bioengineering focused, health and medicine themed, virtual hackathon at the University of California, Riverside."/>
        <meta property="og:image" content="https://biohackucr.com/thumb.png"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://biohackucr.com/"/>
        <meta property="twitter:title" content="BioHack at UCR 2021"/>
        <meta property="twitter:description" content="BioHack is a 24-hour bioengineering focused, health and medicine themed, virtual hackathon at the University of California, Riverside."/>
        <meta property="twitter:image" content="https://biohackucr.com/thumb.png"/>
      </Head>
      <AuthProvider
        authStorageType={"cookie"}
        cookieDomain="biohackucr.com"
        cookieSecure="false"
      >
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
