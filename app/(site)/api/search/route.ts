import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "next-sanity";

// Define a custom headers interface
interface CustomHeaders {
  "content-type"?: string;
  "cache-control"?: string;
  Accept?: string;
  "your-custom-header"?: string; // Add your custom headers here
}

export const client = createClient({
  projectId: "e6ghx5sn",
  dataset: "production",
  apiVersion: "2023-08-19",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

export function getQSParamFromURL(
  key: string,
  url: string | undefined
): string | null {
  if (!url) return "";
  const search = new URL(url).search;
  const urlParams = new URLSearchParams(search);
  return urlParams.get(key);
}

export async function POST(req: NextApiRequest) {
  const query = getQSParamFromURL("query", req.url);
  console.log("QUERY = " + query);

  try {
    if (query) {
      const results = await client.fetch(
        `*[_type == "industry" && name match $query ] {
        _id,
        name,
        'slug': slug.current,
        'image': image.asset->url,
        "category": *[_type=='category' && references(^._id)]}`,
        {
          query,
        }
      );

      return NextResponse.json(results);
    } else {
      const results = await client.fetch(
        `*[_type == "industry" ]
        {
        _id,
        name,
        'slug': slug.current,
        'image': image.asset->url,
        "category": *[_type=='category' && references(^._id)]}`,
        {}
      );

      return NextResponse.json(results);
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error fetching search results" });
  }
}
