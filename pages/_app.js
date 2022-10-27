import { ThemeProvider } from "next-themes";
import Script from "next/script";

import "../css/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Script id="Adsense-id"
        data-ad-client="ca-pub-9160996502338474"
        async="true"
        strategy="beforeInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
