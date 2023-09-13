import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

import { client } from "@/sanity/client";
import { getQSParamFromURL } from "@/utils/getParamFromURL";

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
