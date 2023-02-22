import { TestResponse } from "@/common/interface";
import { commonInfoRender } from "@/common/util";
import "@/styles/globals.css";
import axios from "axios";
import type { AppProps } from "next/app";
import { Head } from "next/document";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const fetchData = async () => {
    const resp = await axios.get("https://www.boredapi.com/api/activity");
    if (resp.data) {
      if (router.asPath.includes("first")) {
        resp.data = {
          activity: "Mission Transit c700",
          key: "Redirect Link 1",
          url: "https://file-paotang-uat.th-service.co.in/DEEPLINK/paotang-external-deeplink.html?destination=missionWeb&page=tracking&campaignCode=c700",
          image:
            "https://mission-static-file-uat.storage.googleapis.com/mock/campaign-transit.png",
        };
      } else if (router.asPath.includes("second")) {
        resp.data = {
          activity: "Mission Landing",
          key: "Redirect Link 2",
          url: "https://file-paotang-uat.th-service.co.in/DEEPLINK/paotang-external-deeplink.html?destination=missionWeb",
          image:
            "https://mission-static-file-uat.storage.googleapis.com/mock/bg-landing.png",
        };
      } else if (router.asPath.includes("third")) {
        resp.data = {
          activity: "Mission Wallet-Topup c795",
          key: "Redirect Link 3",
          url: "https://file-paotang-uat.th-service.co.in/DEEPLINK/paotang-external-deeplink.html?destination=missionWeb&page=tracking&campaignCode=c795",
          image:
            "https://mission-static-file-uat.storage.googleapis.com/mock/transaction-count-paybill.png",
        };
      }
      return resp.data;
    }
  };

  useEffect(() => {
    fetchData();
  });

  return <Component {...pageProps} />;
}
