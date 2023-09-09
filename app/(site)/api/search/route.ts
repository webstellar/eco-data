import { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/sanity/client";

type Data = {
  results: string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req.query;

  try {
    const results = await client.fetch(
      `*[_type == 'industry' && (title match $query)]`,
      { query }
    );

    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching search results" });
  }
}
