import { TestResponse } from "@/common/interface";
import type { NextApiRequest, NextApiResponse } from "next";
import { links } from ".";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id, key, activity, image, url } = links.find(
      (link) => link.id == req.query.id
    ) as TestResponse;
    switch (req.method) {
      case "GET":
        res.status(200).json({ id, key, activity, image, url });
        break;
      default:
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(404).end(`id ${req.query.id} is not found`);
  }
}
