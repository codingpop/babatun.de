import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap"
            rel="stylesheet"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="/icons/16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/icons/32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link
            rel="mask-icon"
            href="/icons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <meta name="application-name" content="Babatun.de" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Babatun.de" />
          <meta name="description" content="Babatun.de Progressive Web App" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://babatun.de" />
          <meta name="twitter:title" content="Babatun.de" />
          <meta
            name="twitter:description"
            content="Babatun.de Progressive Web App"
          />
          <meta
            name="twitter:image"
            content="https://babatun.de/icons/192x192.png"
          />
          <meta name="twitter:creator" content="@codingpop" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Babatun.de" />
          <meta
            property="og:description"
            content="Babatun.de Progressive Web App"
          />
          <meta property="og:site_name" content="Babatun.de" />
          <meta property="og:url" content="https://babatun.de" />
          <meta
            property="og:image"
            content="https://babatun.de/icons/apple-touch-icon.png"
          />
          <meta name="theme-color" content="#317EFB" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
