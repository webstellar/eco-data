import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";

import { vercelDeployTool } from "sanity-plugin-vercel-deploy";

const config = defineConfig({
  name: "default",
  title: "Eco Data",
  projectId: "e6ghx5sn",
  dataset: "production",
  apiVersion: "2023-08-19",
  basePath: "/admin",
  plugins: [deskTool(), visionTool(), vercelDeployTool()],
  schema: { types: schemas },
});

export default config;
