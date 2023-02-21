import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function Second() {
  return (
    <>
      <Head>
        <title>Mission Landing</title>
        <meta name="description" content="Redirect Link 2" />
        <meta property="og:title" content="og: Mission Landing" />
        <meta property="og:description" content="og: Redirect Link 2" />
        <meta property="og:image" content="https://mission-static-file-uat.storage.googleapis.com/mock/bg-landing.png" />
        <meta
          property="og:url"
          content="https://file-paotang-uat.th-service.co.in/DEEPLINK/paotang-external-deeplink.html?destination=missionWeb"
        />
        <meta http-equiv="refresh" content="1; url=https://file-paotang-uat.th-service.co.in/DEEPLINK/paotang-external-deeplink.html?destination=missionWeb"></meta>
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Redirecting...</h1>
      </main>
    </>
  );
}
