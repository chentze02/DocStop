import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    console.log("ERRORR");
    return res.status(405).json({ message: "Method not allowed" });
  }

  // You can always return a successful response without making any external requests
  return res.status(200).json({ message: "Successfully subscribed" });
}
