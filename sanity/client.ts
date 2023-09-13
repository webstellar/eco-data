import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "e6ghx5sn",
  dataset: "production",
  apiVersion: "2023-08-19",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});
