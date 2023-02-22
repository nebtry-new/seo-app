import { commonInfoRender } from "@/common/util";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function Second() {
  const MetaTag = () => {
    // if (typeof window !== "undefined") {
    //   const data = sessionStorage.getItem("meta");

    //   if (data) {
    //     const apiResponse = JSON.parse(data);

    //     if (apiResponse !== undefined) {
    //       return (
    //         <Head>
    //           <title>{commonInfoRender(apiResponse.activity)}</title>
    //           <meta
    //             name="description"
    //             content={commonInfoRender(apiResponse.key)}
    //           />
    //           <meta
    //             property="og:title"
    //             content={commonInfoRender(apiResponse.activity)}
    //           />
    //           <meta
    //             property="og:description"
    //             content={commonInfoRender(apiResponse.key)}
    //           />
    //           <meta
    //             property="og:image"
    //             content={commonInfoRender(apiResponse.image)}
    //           />
    //           <meta
    //             property="og:url"
    //             content={commonInfoRender(apiResponse.url)}
    //           />
    //           <meta
    //             http-equiv="refresh"
    //             content={`1; url=${commonInfoRender(apiResponse.url)}`}
    //           ></meta>
    //           <meta property="og:type" content="website" />
    //           <link rel="icon" href="/favicon.ico" />
    //         </Head>
    //       );
    //     }
    //   }
    // }
    return (
      <main className={styles.main}>
        <div className={styles.title}>Redirecting...</div>
      </main>
    );
  };

  return (
    <>
      <MetaTag></MetaTag>
    </>
  );
}
