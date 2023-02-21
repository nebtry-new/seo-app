import { TestResponse } from "@/common/interface";
import { commonInfoRender } from "@/common/util";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

export default function First() {
  const [apiResponse, setApiResponse] = useState<TestResponse>({
    activity: "Create a meal plan for the coming week",
    key: "3491470",
    url: "",
    image: "",
  });
  
  const fetchData = async () => {
    const resp = await axios.get("https://www.boredapi.com/api/activity");
    if (resp.data) {
      console.log("fetchData", resp);
      resp.data = {
        activity: "Mission Transit c700",
        key: "Redirect Link 1",
        url: "https://file-paotang-uat.th-service.co.in/DEEPLINK/paotang-external-deeplink.html?destination=missionWeb&page=tracking&campaignCode=c700",
        image:
          "https://mission-static-file-uat.storage.googleapis.com/mock/campaign-transit.png",
      };
      location.href = resp.data.url;
      return resp.data;
    }
  };

  useEffect(() => {
    fetchData().then((resp: any) => setApiResponse(resp));
  }, []);

  return (
    <>
      <Head>
        <title>{commonInfoRender(apiResponse.activity)}</title>
        <meta name="description" content={commonInfoRender(apiResponse.key)} />
        <meta property="og:title" content={commonInfoRender(apiResponse.activity)} />
        <meta property="og:description" content={commonInfoRender(apiResponse.key)} />
        <meta
          property="og:image"
          content={commonInfoRender(apiResponse.image)}
        />
        <meta property="og:url" content={commonInfoRender(apiResponse.url)} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.title}>{apiResponse.url}</div>
      </main>
    </>
  );
}
