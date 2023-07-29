import Preloader from "@/components/Preloader";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import "@/styles/preloader.css";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

  return (
    <ThemeProvider attribute="class">
      {loading ? <Preloader /> : <Component {...pageProps} />}
      {/* <Component {...pageProps} /> */}
    </ThemeProvider>
  );
}
