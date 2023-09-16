import { NextResponse } from "next/server";
import { client } from "@/sanity/client";

export async function GET() {
  try {
    const results = await client.fetch(
      `*[_type == "page" && name == 'Home']{carousel[]{"carousel": carousel.asset->url}}`,
      {}
    );

    return NextResponse.json(results);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error fetching search results" });
  }
}
