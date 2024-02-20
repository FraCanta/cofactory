import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import "@/styles/blurryLights.css";
import "@/styles/line.css";
import "@/styles/linkMarquee.css";
import "@/styles/paragraph.css";
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
