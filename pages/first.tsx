import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function First() {
  return (
    <>
      <Head>
        <title>Mission Transit c700</title>
        <meta name="description" content="Redirect Link 1" />
        <meta property="og:title" content="og: Mission Transit" />
        <meta property="og:description" content="og: Redirect Link 1" />
        <meta property="og:image" content="https://mission-static-file-uat.storage.googleapis.com/mock/campaign-transit.png" />
        <meta
          property="og:url"
          content="https://file-paotang-uat.th-service.co.in/DEEPLINK/paotang-external-deeplink.html?destination=missionWeb&page=tracking&campaignCode=c700"
        />
        <meta http-equiv="refresh" content="1; url=https://file-paotang-uat.th-service.co.in/DEEPLINK/paotang-external-deeplink.html?destination=missionWeb&page=tracking&campaignCode=c700"></meta>
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Redirecting...</h1>
      </main>
    </>
  );
}
