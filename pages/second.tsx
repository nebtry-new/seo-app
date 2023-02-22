import styles from "@/styles/Home.module.css";
import axios from "axios";
import Head from "next/head";

export default function Second({ data }: any) {
  return (
    <>
      <Head>
        <title>{data.activity}</title>
        <meta name="description" content={data.key} />
        <meta property="og:title" content={data.activity} />
        <meta property="og:description" content={data.key} />
        <meta property="og:image" content={data.image} />
        <meta property="og:url" content={data.url} />
        <meta http-equiv="refresh" content={`1; url=${data.url}`}></meta>
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.title}>Redirecting...</div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  let { data } = await axios.get("https://www.boredapi.com/api/activity");
  if (data) {
    data = {
      activity: data.activity,
      key: data.key,
      url: "https://file-paotang-uat.th-service.co.in/DEEPLINK/paotang-external-deeplink.html?destination=missionWeb",
      image:
        "https://mission-static-file-uat.storage.googleapis.com/mock/bg-landing.png",
    };

    return {
      props: {
        data,
      },
    };
  }
}
