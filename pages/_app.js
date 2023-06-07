import "../styles/globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "../styles/form.css";
import React from "react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {

  return (
    <>
    
<Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=UA-215989751-1`}
      />
<Script strategy="lazyOnload" id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'UA-215989751-1');
                `}
      </Script>

      <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=G-2GC4QV7F7F`}
      />
      <Script strategy="lazyOnload" id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-2GC4QV7F7F');
                `}
      </Script>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
