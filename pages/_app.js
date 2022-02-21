import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} /> {/* Component가 children을 말한다. */}
      <style jsx global>
        {`
          a {
            color: red;
          }
          .active {
            color: blue;
          }
        `}
      </style>
    </Layout>
  );
}
