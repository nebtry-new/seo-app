import { TestResponse } from "@/common/interface";
import type { NextApiRequest, NextApiResponse } from "next";

export const links = [
  {
    id: "first",
    activity: "Mission Transit c700",
    key: "Redirect Link 1",
    url: "https://file-paotang-uat.th-service.co.in/DEEPLINK/paotang-external-deeplink.html?destination=missionWeb&page=tracking&campaignCode=c700",
    image:
      "https://mission-static-file-uat.storage.googleapis.com/mock/campaign-transit.png",
  },
  {
    id: "second",
    activity: "Mission Landing",
    key: "Redirect Link 2",
    url: "https://file-paotang-uat.th-service.co.in/DEEPLINK/paotang-external-deeplink.html?destination=missionWeb",
    image:
      "https://mission-static-file-uat.storage.googleapis.com/mock/bg-landing.png",
  },
  {
    id: "third",
    activity: "Mission Wallet-Topup c795",
    key: "Redirect Link 3",
    url: "https://file-paotang-uat.th-service.co.in/DEEPLINK/paotang-external-deeplink.html?destination=missionWeb&page=tracking&campaignCode=c795",
    image:
      "https://mission-static-file-uat.storage.googleapis.com/mock/transaction-count-paybill.png",
  },
  {
    id: "google",
    activity: "Google",
    key: "Redirect to Google",
    url: "http://www.google.com",
    image: "",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TestResponse[]>
) {
  res.status(200).json(links);
}
