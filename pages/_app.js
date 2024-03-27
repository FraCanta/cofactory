import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import "@/styles/blurryLights.css";
import "@/styles/line.css";
import "@/styles/linkMarquee.css";
import "@/styles/paragraph.css";
import "@/styles/cases.css";

import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
